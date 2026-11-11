import Link from "next/link";
import { site } from "@/content/site";
import { getProject } from "@/content/projects";
import { href, type Locale } from "@/i18n/config";

type Props = { locale: Locale; label: string; puzzle: string; puzzleHref: string };

/**
 * Schmales Logo-Band: Kundenlogos laufen ruhig durch, dazwischen ein freies Puzzleteil („Dein Logo hier?“) als Einladung.
 * Pausiert bei Hover/Fokus; bei „Bewegung reduzieren“ steht das Band still und bricht um.
 */
export function LogoTicker({ locale, label, puzzle, puzzleHref }: Props) {
  const items = site.clients.map((c) => {
    const p = getProject(c.slug);
    return { ...c, href: p?.published ? href(locale, `/work/${p.slug}`) : null };
  });
  const half = Math.ceil(items.length / 2);

  const Logo = ({ c, hidden }: { c: (typeof items)[number]; hidden: boolean }) => {
    // eslint-disable-next-line @next/next/no-img-element
    const img = <img src={c.src} alt={hidden ? "" : c.name} width={c.w} height={c.h} loading="lazy" decoding="async" style={{ ["--w" as string]: `${c.w}px`, ["--h" as string]: `${c.h}px` }} />;
    return (
      <li className="ticker__item">
        {c.href ? <Link href={c.href} tabIndex={hidden ? -1 : undefined} title={c.name}>{img}</Link> : img}
      </li>
    );
  };
  const Puzzle = ({ hidden }: { hidden: boolean }) => (
    <li className="ticker__item">
      <a href={puzzleHref} className="ticker__puzzle" tabIndex={hidden ? -1 : undefined}>
        <svg viewBox="0 0 120 64" aria-hidden="true" className="ticker__puzzle-shape">
          <path d="M8 4h36c0 8 6 12 14 12s14-4 14-12h40v22c-8 0-12 6-12 12s4 12 12 12v10H72c0-8-6-12-14-12s-14 4-14 12H8V40c8 0 12-6 12-12S16 16 8 16z" />
        </svg>
        <span>{puzzle}</span>
      </a>
    </li>
  );
  const group = (hidden: boolean) => (
    <ul className="ticker__group" aria-hidden={hidden || undefined}>
      {items.slice(0, half).map((c) => <Logo key={c.slug} c={c} hidden={hidden} />)}
      <Puzzle hidden={hidden} />
      {items.slice(half).map((c) => <Logo key={c.slug} c={c} hidden={hidden} />)}
    </ul>
  );

  return (
    <section className="ticker" aria-label={label}>
      <p className="ticker__label t-label">{label}</p>
      <div className="ticker__viewport">
        <div className="ticker__track">
          {group(false)}
          {group(true)}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

/**
 * Laufband in Signalfarbe: ein großer Link zum Kontakt.
 * Der Text läuft endlos (CSS), pausiert bei Hover/Fokus und steht bei
 * „Bewegung reduzieren“ still. Screenreader hören nur das Label.
 */
export function CtaMarquee({ href, label, items }: { href: string; label: string; items: string[] }) {
  const row = (hidden: boolean) => (
    <span className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <span key={i} className="marquee__item">
          {t}
          <span className="marquee__star" aria-hidden="true">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <Link href={href} className="marquee" aria-label={label} lang="en">
      <span className="marquee__track" aria-hidden="true">
        {row(false)}
        {row(true)}
      </span>
    </Link>
  );
}

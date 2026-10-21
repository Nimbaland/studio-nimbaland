import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { LocalTime } from "@/components/motion/LocalTime";

/** Footer: Kontakt, Seiten, Profile, Ortszeit – und die Wortmarke über die volle Breite. */
export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const nav = [
    { path: "/about", label: dict.nav.about },
    { path: "/work", label: dict.nav.work },
    { path: "/services", label: dict.nav.services },
    { path: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="tone-dark border-t border-line">
      <div className="container-site grid-site gap-y-12 pt-16 pb-10">
        <div className="col-span-full lg:col-span-5">
          {site.contact.email && (
            <a href={`mailto:${site.contact.email}`} className="text-link link-standalone font-display text-[clamp(1.5rem,1.2rem+1vw,2.25rem)]">{site.contact.email}</a>
          )}
          <address className="mt-6 not-italic leading-relaxed">
            {site.contact.address.name}<br />
            {site.contact.address.street}<br />
            {site.contact.address.city}
          </address>
          <p className="t-label t-muted mt-6" lang="en">{dict.footer.tagline}</p>
        </div>

        <nav aria-label={dict.footer.pages} className="col-span-2 lg:col-span-2 lg:col-start-7">
          <p className="t-label t-muted mb-3">{dict.footer.pages}</p>
          <ul>
            {nav.map((n) => (
              <li key={n.path}><Link href={href(locale, n.path)} className="footer-link" lang="en">{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-2">
          <p className="t-label t-muted mb-3" lang="en">{dict.footer.connect}</p>
          <ul>
            {site.social.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                  {s.label}<span className="sr-only"> ({dict.a11y.externalLink})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-full lg:col-span-2">
          <p className="t-label t-muted mb-3" lang="en">{dict.footer.localTime}</p>
          <p className="t-label"><LocalTime locale={locale} /></p>
        </div>
      </div>

      {site.brand.logoOnDark && (
        <div className="container-site pb-6" aria-hidden="true">
          <Image src={site.brand.logoOnDark} alt="" width={1440} height={Math.round(1440 / site.brand.logoRatio)} unoptimized className="footer-logo" />
        </div>
      )}

      <div className="container-site flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
        <p className="t-label t-muted">© {year} {site.name}. {dict.footer.rights}</p>
        <ul className="flex gap-6">
          <li><Link href={href(locale, "/impressum")} className="t-label t-muted link-standalone hover:text-fg">{dict.nav.imprint}</Link></li>
          <li><Link href={href(locale, "/datenschutz")} className="t-label t-muted link-standalone hover:text-fg">{dict.nav.privacy}</Link></li>
        </ul>
      </div>
    </footer>
  );
}

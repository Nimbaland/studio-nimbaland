import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { StatusMessage } from "@/components/ui/StatusMessage";
import { site } from "@/content/site";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/impressum", title: d.nav.imprint, noindex: true });
}

/**
 * LEGAL_CONTENT_REQUIRED
 * Rechtstext bewusst NICHT generiert. Bitte geprüften Text (z. B. aus einem
 * Generator einer Kanzlei oder von deiner Rechtsberatung) hier einsetzen und
 * danach `noindex` oben entfernen.
 */
export default async function Page({ params }: Props) {
  const { locale } = await params;
  const d = getDictionary(locale);
  return (
    <>
      <PageIntro title={d.nav.imprint} />
      <section className="tone-dark section border-t border-line">
        <div className="container-site">
          <div className="prose-site" data-placeholder="LEGAL_CONTENT_REQUIRED">
            <h2 className="t-h3">{locale === "de" ? "Angaben zum Anbieter" : "Provider"}</h2>
            <p className="mt-4 leading-relaxed">
              {site.contact.address.name}<br />
              {site.founder}<br />
              {site.contact.address.street}<br />
              {site.contact.address.city}<br />
              {site.contact.address.country}
            </p>
            {site.contact.email && (
              <p className="mt-4">E-Mail: <a href={`mailto:${site.contact.email}`} className="text-link">{site.contact.email}</a></p>
            )}
            <div className="mt-10"><StatusMessage tone="info">{d.legal.draftNotice}</StatusMessage></div>
          </div>
        </div>
      </section>
    </>
  );
}

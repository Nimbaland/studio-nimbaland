import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { StatusMessage } from "@/components/ui/StatusMessage";

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
            <StatusMessage tone="info">{d.legal.draftNotice}</StatusMessage>
          </div>
        </div>
      </section>
    </>
  );
}

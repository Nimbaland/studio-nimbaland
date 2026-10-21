import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Datenschutz } from "@/content/legal";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDictionary(locale);
  // noindex, bis die offenen Angaben in src/content/legal.tsx bestätigt sind
  return pageMetadata({ locale, path: "/datenschutz", title: d.nav.privacy, noindex: true });
}

/** Rechtstext auf Deutsch (maßgebliche Fassung), auch auf der englischen Seite. */
export default async function Page({ params }: Props) {
  const { locale } = await params;
  const d = getDictionary(locale);
  return (
    <>
      <PageIntro title={d.nav.privacy} />
      <section className="tone-dark section border-t border-line">
        <div className="container-site">
          <div className="prose-site legal" lang="de">
            {locale === "en" && <p className="t-muted">This legal information is provided in German.</p>}
            <Datenschutz />
          </div>
        </div>
      </section>
    </>
  );
}

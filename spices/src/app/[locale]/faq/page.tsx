import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { faq } from "@/i18n/dictionaries";
import { PageHead } from "@/components/ui";
import { asset } from "@/lib/base";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t("faq.h1"), description: t("faq.lead"), alternates: { languages: { de: asset("/de/faq"), en: asset("/en/faq") } } };
}

export default async function Faq({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const groups = [...new Set(faq.map((f) => f[locale].g))];
  return (
    <>
      <PageHead label={t("faq.label")} title={t("faq.h1")} lead={t("faq.lead")} />
      <div className="wrap faqgroup">
        {groups.map((g) => (
          <div key={g}>
            <h2>{g}</h2>
            <div className="faq">
              {faq.filter((f) => f[locale].g === g).map((f) => (
                <details key={f[locale].q}><summary>{f[locale].q}</summary><div className="ans" dangerouslySetInnerHTML={{ __html: f[locale].a }} /></details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

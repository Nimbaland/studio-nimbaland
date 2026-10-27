import type { Metadata } from "next";
import Link from "next/link";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { Newsletter } from "@/components/Newsletter";
import { Arrow, PageHead } from "@/components/ui";
import { asset } from "@/lib/base";
import { newsletterConfigured } from "@/lib/newsletter";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: getT(locale)("f.newsletter"), robots: { index: false }, alternates: { languages: { de: asset("/de/newsletter"), en: asset("/en/newsletter") } } };
}

export default async function NewsletterPage({ params, searchParams }: { params: Promise<{ locale: Locale }>; searchParams: Promise<{ status?: string }> }) {
  const { locale } = await params;
  const { status } = await searchParams;
  const t = getT(locale);
  const head = status === "confirmed" ? { h: t("nl.confirmed.h"), p: t("nl.confirmed.p") }
    : status === "invalid" ? { h: t("nl.invalid.h"), p: t("nl.invalid.p") }
    : status === "error" ? { h: t("nl.err.generic"), p: "" }
    : { h: t("nl.h"), p: t("nl.lead") };
  return (
    <>
      <PageHead label={t("f.newsletter")} title={head.h} lead={head.p || undefined} />
      {status === "confirmed" ? (
        <div className="wrap" style={{ paddingBottom: "var(--sp-section)" }}>
          <Link className="btn primary" href={href(locale, "/recipes")}>{t("st.cta2")} <Arrow /></Link>
        </div>
      ) : <Newsletter locale={locale} connected={newsletterConfigured} />}
    </>
  );
}

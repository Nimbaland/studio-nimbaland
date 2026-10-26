import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { fontVariables } from "@/fonts";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProducts, isSellable } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
// Ungültige Sprachen fängt notFound() unten ab.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(isLocale(locale) ? locale : "de");
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t("meta.title"), template: "%s · nimbaland.spices" },
    description: t("meta.desc"),
    openGraph: { siteName: "nimbaland.spices", locale: locale === "de" ? "de_DE" : "en_GB", type: "website" },
    robots: process.env.SITE_INDEXABLE === "true" ? undefined : { index: false, follow: false },
  };
}

export const viewport: Viewport = { themeColor: "#16191D", colorScheme: "light" };

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getT(locale as Locale);
  const products = await getProducts(locale);
  const locked = !products.every(isSellable);
  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <a className="skip" href="#main">{t("skip")}</a>
        {locked && (
          <div className="notice" role="note"><div className="wrap"><span><span className="dot" aria-hidden="true" />{t("notice")}</span></div></div>
        )}
        <Header locale={locale} />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

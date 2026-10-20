import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { fontVariables } from "@/fonts";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Preloader, preloaderBootScript } from "@/components/motion/Preloader";
import { Reveals } from "@/components/motion/Reveals";
import { PageTransition } from "@/components/motion/PageTransition";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export const viewport: Viewport = {
  themeColor: "#16191D",
  colorScheme: "dark light",
};

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <body>
        {/* Läuft synchron beim Parsen, vor dem ersten Paint */}
        <script dangerouslySetInnerHTML={{ __html: preloaderBootScript }} />
        <Preloader label={site.name} />
        <SmoothScroll />
        <Reveals />
        <PageTransition label={site.name} />
        <a href="#main" className="skip-link">{dict.a11y.skipToContent}</a>
        <Header locale={locale} dict={{ nav: dict.nav, a11y: dict.a11y }} />
        <main id="main" tabIndex={-1} className="outline-none">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}

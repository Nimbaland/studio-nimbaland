import type { Metadata } from "next";
import { site } from "@/content/site";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Args = { locale: Locale; path?: string; title?: string; description?: string; noindex?: boolean };

/** Einheitliche Metadaten inkl. Canonical, hreflang und Open Graph pro Seite. */
export function pageMetadata({ locale, path = "", title, description, noindex }: Args): Metadata {
  const dict = getDictionary(locale);
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  const fullTitle = title ? `${title} – ${site.name}` : dict.meta.defaultTitle;
  const desc = description ?? dict.meta.defaultDescription;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: `/${locale}${path}`, languages: { ...languages, "x-default": `/de${path}` } },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `/${locale}${path}`,
      siteName: site.name,
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
      images: [{ url: `/og/${locale}.png`, width: 1200, height: 630, alt: dict.meta.defaultTitle }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: [`/og/${locale}.png`] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

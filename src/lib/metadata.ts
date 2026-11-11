import type { Metadata } from "next";
import { site } from "@/content/site";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Args = { locale: Locale; path?: string; title?: string; description?: string; noindex?: boolean };

/** Kürzt Beschreibungen für Suchergebnisse auf höchstens ~155 Zeichen – am Satz- oder Wortende. */
export function snippet(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const sentence = cut.lastIndexOf(". ");
  if (sentence > 90) return cut.slice(0, sentence + 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:–-]+$/, "") + " …";
}

/** Einheitliche Metadaten inkl. Canonical, hreflang und Open Graph pro Seite. */
export function pageMetadata({ locale, path = "", title, description, noindex }: Args): Metadata {
  const dict = getDictionary(locale);
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  const fullTitle = title ? `${title} – ${site.name}` : dict.meta.defaultTitle;
  const desc = snippet(description ?? dict.meta.defaultDescription);

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

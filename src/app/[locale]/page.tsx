import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { getProjects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HomeContact } from "@/components/sections/HomeContact";
import { LogoTicker } from "@/components/sections/LogoTicker";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale });
}

/** Knapp: Wer, was, wo (Hero) → drei Projekte → Kontakt → Logo-Band. Details über das Menü. */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const projects = getProjects();
  const featured = site.homeWork
    .map((s) => getProject(s))
    .filter((p): p is NonNullable<typeof p> => !!p && p.published)
    .slice(0, 3);

  return (
    <>
      <Hero locale={locale} dict={dict.hero} recent={getProject(site.recentWorkSlug) ?? projects[0]} />
      <SelectedWork locale={locale} dict={dict.work} projects={featured} total={projects.filter((p) => p.published).length} />
      <HomeContact locale={locale} dict={dict} />
      <LogoTicker locale={locale} label={dict.ticker.label} puzzle={dict.ticker.puzzle} puzzleHref="#contact" />
    </>
  );
}

import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { getProjects, getProject, getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Expertise } from "@/components/sections/Expertise";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { HomeContact } from "@/components/sections/HomeContact";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const projects = getProjects();

  return (
    <>
      <Hero locale={locale} dict={dict.hero} recent={getProject(site.recentWorkSlug) ?? projects[0]} />
      <SelectedWork locale={locale} dict={dict.work} projects={getFeaturedProjects(8)} />
      <Expertise locale={locale} dict={dict.expertise} deliverablesLabel={dict.services.deliverables} />
      <AboutPreview locale={locale} dict={dict.aboutPreview} portraitAlt={dict.about.portraitAlt} />
      <HomeContact locale={locale} dict={dict} />
    </>
  );
}

import type { Metadata } from "next";
import { href, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { getProjects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { Recognition } from "@/components/sections/Recognition";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Expertise } from "@/components/sections/Expertise";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaMarquee } from "@/components/sections/CtaMarquee";
import { HomeContact } from "@/components/sections/HomeContact";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale });
}

/**
 * Spannungsbogen der Startseite:
 * Hero (Wer hilft mir?) → Sound familiar? (Wiedererkennen) → Work, up close (Einblick)
 * → Where I can help (Leistungen) → Hi, I'm Nimba (Vertrauen) → Kontakt (Gespräch).
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const projects = getProjects();
  const featured = site.homeWork.map((s) => getProject(s)).filter((p): p is NonNullable<typeof p> => !!p && p.published);
  const r = dict.recognition;
  const recog = site.recognition
    .map((it) => ({ it, p: getProject(it.slug) }))
    .filter(({ p }) => p?.published)
    .map(({ it, p }) => ({ href: href(locale, `/work/${p!.slug}`), text: it[locale], project: p!.title, src: p!.coverImage.src }));

  return (
    <>
      <Hero locale={locale} dict={dict.hero} recent={getProject(site.recentWorkSlug) ?? projects[0]} />
      <section className="tone-light section" aria-labelledby="recog-title">
        <div className="container-site">
          <div className="grid-site gap-y-6">
            <div className="col-span-full lg:col-span-6">
              <p className="t-label t-muted mb-6" lang="en">{r.eyebrow}</p>
              <h2 id="recog-title" className="t-h1" lang="en">{r.title}</h2>
            </div>
            <p className="t-lead measure col-span-full lg:col-span-5 lg:col-start-8 lg:self-end">{r.intro}</p>
          </div>
          <div className="mt-12 lg:mt-16">
            <Recognition items={recog} proofLabel={r.proof} label={r.title} />
          </div>
          <p className="recog__outro t-lead">
            <a href="#work" className="link-standalone">{r.outro} <span aria-hidden="true">↓</span></a>
          </p>
        </div>
      </section>
      <CtaMarquee href="#contact" label={dict.marquee.label} items={dict.marquee.items} />
      <SelectedWork locale={locale} dict={dict.work} projects={featured} total={projects.filter((p) => p.published).length} />
      <Expertise locale={locale} dict={dict.expertise} deliverablesLabel={dict.services.deliverables} />
      <AboutPreview locale={locale} dict={dict.aboutPreview} portraitAlt={dict.about.portraitAlt} />
      <HomeContact locale={locale} dict={dict} />
    </>
  );
}

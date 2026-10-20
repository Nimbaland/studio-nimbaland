import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { getProjects } from "@/content/projects";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { WorkEmptyState } from "@/components/sections/WorkEmptyState";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HoverPreview } from "@/components/motion/HoverPreview";
import { href, t } from "@/i18n/config";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/work", title: "Selected work", description: d.workPage.intro });
}

/** Projektliste. Filter erst ergänzen, wenn genug Projekte veröffentlicht sind. */
export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  const d = getDictionary(locale);
  const projects = getProjects();

  return (
    <>
      <PageIntro title={d.workPage.pageTitle} titleLang="en" subtitle={d.workPage.subtitle} intro={d.workPage.intro} />
      <section className="tone-dark section border-t border-line">
        <div className="container-site">
          {projects.length > 0 ? (
            <ProjectGrid projects={projects} locale={locale} draftLabel={d.work.draftBadge} viewLabel={d.work.viewProject} headingLevel="h2" />
          ) : (
            <WorkEmptyState locale={locale} dict={d.work} />
          )}
        </div>
      </section>
      {projects.length > 0 && (
        <section className="tone-dark section border-t border-line" aria-labelledby="work-index">
          <div className="container-site">
            <p className="t-label t-muted mb-6" lang="en">Index</p>
            <h2 id="work-index" className="t-h2 mb-12" lang="en">{locale === "de" ? "Alle Projekte." : "All projects."}</h2>
            <HoverPreview
              label={locale === "de" ? "Projektindex" : "Project index"}
              items={projects.map((p) => ({
                href: href(locale, `/work/${p.slug}`),
                title: p.title,
                meta: t(p.services, locale).slice(0, 2).join(" / "),
                year: p.year,
                src: p.coverImage.src,
                alt: p.coverImage.alt[locale],
              }))}
            />
          </div>
        </section>
      )}
      <ContactCTA locale={locale} dict={d.contactCta} />
    </>
  );
}

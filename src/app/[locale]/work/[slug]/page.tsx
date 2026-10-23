import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaMarquee } from "@/components/sections/CtaMarquee";
import { href, locales, t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { getNextProject, getProject, getProjects } from "@/content/projects";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { MediaGallery } from "@/components/projects/MediaGallery";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ArrowRight } from "@/components/ui/Icons";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => getProjects().map((p) => ({ locale, slug: p.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMetadata({ locale, path: `/work/${slug}`, title: p.title, description: t(p.summary, locale), noindex: !p.published });
}

/**
 * Case-Study-Vorlage (Spec §9): Hero → Überblick → Ausgangslage → Vorgehen → Lösung/Galerie
 * → Ergebnisse (nur belegte) → Nächstes Projekt. Fehlende Abschnitte werden ausgelassen.
 */
export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const d = getDictionary(locale);
  const c = d.caseStudy;
  const next = getNextProject(slug);

  const overview = [
    { label: c.client, value: project.client },
    { label: c.year, value: project.year },
    { label: c.role, value: t(project.role, locale).join(", ") },
    { label: c.services, value: t(project.services, locale).join(" / ") },
  ].filter((row) => row.value);

  const chapters = [
    { id: "challenge", title: c.challenge, body: project.challenge },
    { id: "approach", title: c.approach, body: project.approach },
    { id: "solution", title: c.solution, body: project.solution },
  ];
  const hasChapters = chapters.some((ch) => ch.body);

  const themeStyle = project.theme
    ? ({
        "--color-bg": project.theme.bg,
        "--color-text-on-dark": project.theme.fg,
        "--color-muted": project.theme.muted,
        "--color-border-on-dark": project.theme.border,
        "--color-accent": project.theme.accent,
        "--placeholder-bg": project.theme.border,
      } as React.CSSProperties)
    : undefined;

  return (
    <article style={themeStyle} className={project.theme ? "case--themed" : undefined}>
      <header className="tone-dark">
        <div className="container-site pt-12 pb-12 lg:pt-16">
          <Breadcrumb
            label={d.a11y.breadcrumb}
            items={[{ label: d.nav.work, href: href(locale, "/work") }, { label: project.title }]}
          />
          <div className="grid-site mt-10 gap-y-6">
            <h1 className="t-display col-span-full lg:col-span-8">{project.title}</h1>
            <div className="col-span-full lg:col-span-4 lg:self-end">
              {project.tagline && <p className="t-h3 italic" lang="en">{t(project.tagline, locale)}</p>}
              <p className="t-lead t-muted mt-4">{t(project.summary, locale)}</p>
            </div>
          </div>
          {!project.published && <p className="mt-6"><span className="badge badge--draft">{d.work.draftBadge}</span></p>}
        </div>
        <div className="container-site pb-16">
          <ProjectMedia image={project.coverImage} locale={locale} sizes="100vw" priority aspect={project.coverImage.aspect ?? "16/9"} />
        </div>
      </header>

      <div className="tone-dark section border-t border-line">
        <div className="container-site grid-site gap-y-16">
          <section aria-labelledby="overview" className="col-span-full lg:col-span-4">
            <h2 id="overview" className="t-h3">{c.overview}</h2>
            <dl className="rule-list mt-6">
              {overview.map((row) => (
                <div key={row.label} className="flex flex-col gap-1 py-4">
                  <dt className="t-label t-muted">{row.label}</dt>
                  <dd className="m-0">{row.value}</dd>
                </div>
              ))}
            </dl>
            {project.aiNote && (
              <div className="ai-note mt-8">
                <p className="t-label mb-2">{locale === "de" ? "KI-Einsatz" : "Use of AI"}</p>
                <p className="m-0">{t(project.aiNote, locale)}</p>
              </div>
            )}
            {project.liveUrl && (
              <p className="mt-6">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary" lang="en">
                  <span>Visit Website</span>
                  <span className="sr-only"> ({d.a11y.externalLink})</span>
                </a>
              </p>
            )}
          </section>

          <div className="col-span-full flex flex-col gap-12 lg:col-span-7 lg:col-start-6">
            {hasChapters ? (
              chapters.filter((ch) => ch.body).map((ch) => (
                <section key={ch.id} aria-labelledby={ch.id}>
                  <h2 id={ch.id} className="t-h2">{ch.title}</h2>
                  <p className="t-lead measure mt-6">{t(ch.body!, locale)}</p>
                </section>
              ))
            ) : (
              <p className="t-muted">{c.missingText}</p>
            )}

            {project.outcomes && t(project.outcomes, locale).length > 0 && (
              <section aria-labelledby="outcomes">
                <h2 id="outcomes" className="t-h2">{c.outcomes}</h2>
                <ul className="rule-list mt-6">
                  {t(project.outcomes, locale).map((o) => <li key={o} className="py-4 t-lead">{o}</li>)}
                </ul>
              </section>
            )}
          </div>

          {project.gallery.length > 0 && (
            <section aria-label={c.gallery} className="col-span-full">
              <MediaGallery images={project.gallery} locale={locale} layout={project.galleryLayout} />
              {project.mockups && (
                <p className="t-caption t-muted mt-8">
                  {locale === "de"
                    ? "Hinweis: Die Produktdarstellungen sind Mockups – gestaltete Kompositionen auf Basis der Originaldaten."
                    : "Note: product shots are mockups – designed compositions based on the original files."}
                </p>
              )}
              {project.document && (
                <p className="mt-10">
                  <a href={project.document.href} target="_blank" rel="noopener" className="btn btn--primary">
                    {t(project.document.label, locale)}
                  </a>
                </p>
              )}
            </section>
          )}
        </div>
      </div>

      <CtaMarquee href={href(locale, "/contact")} label={d.marquee.label} items={d.marquee.items} />
      {next && (
        <nav aria-label={c.nextProject} className="tone-dark border-t border-line">
          <Link href={href(locale, `/work/${next.slug}`)} className="container-site group flex items-center justify-between gap-6 py-16 no-underline text-inherit">
            <span>
              <span className="t-label t-muted block">{c.nextProject}</span>
              <span className="t-h1 mt-2 block group-hover:underline group-hover:decoration-2 group-hover:underline-offset-8">{next.title}</span>
            </span>
            <ArrowRight size={40} className="flex-none transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </nav>
      )}

      <ContactCTA locale={locale} dict={d.contactCta} />
    </article>
  );
}

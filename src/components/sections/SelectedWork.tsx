import Link from "next/link";
import { href, t, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import type { PortfolioProject } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectSlider } from "@/components/motion/ProjectSlider";
import { WorkEmptyState } from "./WorkEmptyState";

/** Startseite: ausgewählte Projekte als horizontaler Slider. */
export function SelectedWork({ locale, dict, projects }: { locale: Locale; dict: Dictionary["work"]; projects: PortfolioProject[] }) {
  return (
    <section id="work" className="tone-dark border-t border-line" aria-labelledby="work-title">
      <div className="container-site section pb-12 lg:pb-16">
        <SectionHeading
          id="work-title"
          eyebrow={dict.eyebrow}
          title={dict.sectionTitle}
          titleLang="en"
          intro={dict.sectionIntro}
          action={projects.length > 0 && <ButtonLink href={href(locale, "/work")} variant="secondary" lang="en">{dict.allWork}</ButtonLink>}
        />
      </div>

      {projects.length > 0 ? (
        <ProjectSlider count={projects.length} hint={dict.scrollHint}>
          {projects.map((p, i) => (
            <li key={p.slug} className="slide">
              <article className="project-card">
                <div className="project-card__media">
                  <ProjectMedia image={p.coverImage} locale={locale} aspect="16/9" sizes="(min-width: 1024px) 50vw, 86vw" priority={i === 0} />
                </div>
                <div className="slide__meta">
                  <span className="t-label t-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <p className="t-label t-muted" lang="en">{t(p.services, locale).join(" / ")}</p>
                    <h3 className="slide__title font-display project-card__title mt-2">
                      <Link href={href(locale, `/work/${p.slug}`)} className="project-card__link">{p.title}</Link>
                    </h3>
                    {p.tagline && <p className="font-display italic text-[1.25rem] mt-2" lang="en">{t(p.tagline, locale)}</p>}
                  </div>
                  <div className="slide__aside">
                    <p className="t-muted">{t(p.summary, locale)}</p>
                    <p className="mt-4 flex flex-wrap items-center gap-4">
                      <span className="project-card__cta" aria-hidden="true" lang="en">{dict.viewProject} <ArrowUpRight /></span>
                      {!p.published && <span className="badge badge--draft">{dict.draftBadge}</span>}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ProjectSlider>
      ) : (
        <div className="container-site pb-24"><WorkEmptyState locale={locale} dict={dict} /></div>
      )}
    </section>
  );
}

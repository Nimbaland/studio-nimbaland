import Link from "next/link";
import { href, t, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import type { PortfolioProject } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { WorkEmptyState } from "./WorkEmptyState";

/**
 * Startseite „Work, up close“: wenige Projekte, groß gezeigt, jeweils mit
 * Frage → Idee → Entscheidung. Abwechselnd links/rechts für einen ruhigen Rhythmus.
 * Kein Scroll-Pinning – die Seite scrollt ganz normal.
 */
export function SelectedWork({ locale, dict, projects, total }: { locale: Locale; dict: Dictionary["work"]; projects: PortfolioProject[]; total: number }) {
  return (
    <section id="work" className="tone-dark section border-t border-line" aria-labelledby="work-title">
      <div className="container-site">
        <SectionHeading id="work-title" eyebrow={dict.eyebrow} title={dict.sectionTitle} titleLang="en" intro={dict.sectionIntro} />

        {projects.length > 0 ? (
          <ol className="feature-list">
            {projects.map((p, i) => {
              const link = href(locale, `/work/${p.slug}`);
              return (
                <li key={p.slug} className={`feature${i % 2 ? " feature--flip" : ""}`}>
                  <Link href={link} className="feature__media" aria-label={`${p.title} – ${dict.viewProject}`} tabIndex={-1}>
                    <ProjectMedia image={p.coverImage} locale={locale} aspect="16/10" sizes="(min-width: 1024px) 58vw, 100vw" priority={i === 0} />
                    <span className="feature__badge" aria-hidden="true" lang="en">{dict.viewProject} <ArrowUpRight size={16} /></span>
                  </Link>
                  <div className="feature__body">
                    <p className="t-label t-muted" lang="en">
                      <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span> · {t(p.category, locale).join(" / ")}{p.year ? ` · ${p.year}` : ""}
                    </p>
                    <h3 className="feature__title font-display">
                      <Link href={link} className="feature__link">{p.title}</Link>
                    </h3>
                    {p.story && (
                      <dl className="story">
                        <div className="story__step"><dt className="t-label">{dict.challenge}</dt><dd>{t(p.story.challenge, locale)}</dd></div>
                        <div className="story__step"><dt className="t-label">{dict.idea}</dt><dd className="story__idea font-display">{t(p.story.idea, locale)}</dd></div>
                        <div className="story__step"><dt className="t-label">{dict.decision}</dt><dd>{t(p.story.decision, locale)}</dd></div>
                      </dl>
                    )}
                    <p className="mt-8">
                      <Link href={link} className="feature__cta" lang="en">{dict.viewProject} <ArrowUpRight size={16} /></Link>
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          <div className="pb-24"><WorkEmptyState locale={locale} dict={dict} /></div>
        )}

        <div className="feature-more">
          <div>
            <p className="t-h3">{dict.moreTitle}</p>
            <p className="t-muted mt-2 measure">{dict.moreBody}</p>
          </div>
          <ButtonLink href={href(locale, "/work")} variant="secondary" lang="en">{dict.allWork} ({total})</ButtonLink>
        </div>
      </div>
    </section>
  );
}

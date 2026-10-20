import Link from "next/link";
import { href, t, type Locale } from "@/i18n/config";
import type { PortfolioProject } from "@/content/projects";
import { ArrowUpRight } from "@/components/ui/Icons";
import { ProjectMedia } from "./ProjectMedia";

type Props = {
  project: PortfolioProject;
  locale: Locale;
  size?: "large" | "default";
  draftLabel: string;
  viewLabel: string;
  headingLevel?: "h2" | "h3";
  priority?: boolean;
};

/**
 * Projektkarte: Cover, Leistungen (Label), Titel, Leitsatz, Kurztext, "View Project".
 * Die ganze Karte ist über den Titel-Link klickbar und per Tastatur erreichbar.
 */
export function ProjectCard({ project, locale, size = "default", draftLabel, viewLabel, headingLevel: H = "h3", priority }: Props) {
  const large = size === "large";
  const services = t(project.services, locale).join(" / ");

  return (
    <article className="project-card">
      <div className="project-card__media">
        <ProjectMedia
          image={project.coverImage}
          locale={locale}
          aspect="16/9"
          sizes={large ? "(min-width: 1440px) 1340px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
          priority={priority}
        />
      </div>

      <div className={large ? "grid gap-4 lg:grid-cols-12 lg:gap-6" : "flex flex-col gap-3"}>
        <div className={large ? "lg:col-span-6" : ""}>
          <p className="t-label t-muted" lang="en">{services}</p>
          <H className={`${large ? "t-h2" : "t-h3"} project-card__title mt-3`}>
            <Link href={href(locale, `/work/${project.slug}`)} className="project-card__link">
              {project.title}
            </Link>
          </H>
          {project.tagline && <p className="mt-2 font-display text-[1.25rem] italic leading-snug" lang="en">{t(project.tagline, locale)}</p>}
        </div>
        <div className={large ? "flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-8" : "flex flex-col gap-4"}>
          <p className="t-muted measure">{t(project.summary, locale)}</p>
          <p className="flex flex-wrap items-center gap-4">
            <span className="project-card__cta" aria-hidden="true" lang="en">
              {viewLabel} <ArrowUpRight />
            </span>
            {!project.published && <span className="badge badge--draft">{draftLabel}</span>}
          </p>
        </div>
      </div>
    </article>
  );
}

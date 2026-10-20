import type { Locale } from "@/i18n/config";
import type { PortfolioProject } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: PortfolioProject[];
  locale: Locale;
  draftLabel: string;
  viewLabel: string;
  /** Erstes Projekt großformatig über volle Breite. */
  leadLarge?: boolean;
  headingLevel?: "h2" | "h3";
};

/** Desktop 2 Spalten mit optionaler großer Lead-Karte, mobil 1 Spalte (Spec §5). */
export function ProjectGrid({ projects, locale, draftLabel, viewLabel, leadLarge = true, headingLevel }: Props) {
  // Große Lead-Karte nur, wenn danach volle Paare übrig bleiben (keine verwaiste Karte).
  const useLead = leadLarge && projects.length > 1 && (projects.length - 1) % 2 === 0;
  const [lead, ...rest] = projects;
  const list = useLead ? rest : projects;

  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      {useLead && lead && (
        <ProjectCard project={lead} locale={locale} size="large" draftLabel={draftLabel} viewLabel={viewLabel} headingLevel={headingLevel} />
      )}
      {list.length > 0 && (
        <ul className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:gap-y-24">
          {list.map((p, i) => (
            // Versatz der rechten Spalte: ruhige Asymmetrie statt Raster-Kacheln
            <li key={p.slug} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <ProjectCard project={p} locale={locale} draftLabel={draftLabel} viewLabel={viewLabel} headingLevel={headingLevel} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

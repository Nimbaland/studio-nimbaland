import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { services } from "@/content/services";
import { getProjects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesAccordion, type ServiceExample } from "./ServicesAccordion";

/** Linien-Icons für die vier Arbeitsschritte (24×24, Strich in currentColor) */
const stepIcons = [
  // Verstehen – Lupe
  <svg key="0" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" /><path d="M8 10.5h5M10.5 8v5" /></svg>,
  // Schärfen – Fadenkreuz
  <svg key="1" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 1.5V5M12 19v3.5M1.5 12H5M19 12h3.5" /></svg>,
  // Gestalten – Zeichenfeder
  <svg key="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 18.5 9 15 20H9L5.5 9z" /><path d="M12 2.5V12" /><circle cx="12" cy="13.5" r="1.5" /><path d="M8 22.5h8" /></svg>,
  // Umsetzen – Pfeil nach oben rechts
  <svg key="3" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5" /><path d="M9 5h10v10" /><path d="M3 21h6" /></svg>,
];

export function Expertise({ locale, dict, deliverablesLabel }: { locale: Locale; dict: Dictionary["expertise"]; deliverablesLabel: string }) {
  // Pro Leistung genau ein Beispiel: das neueste veröffentlichte Projekt, das thematisch passt
  const projects = getProjects().filter((p) => p.published && p.coverImage.src);
  const examples: Record<string, ServiceExample[]> = {};
  const used = new Set<string>();
  for (const s of services) {
    // neuestes passendes Projekt, das noch nicht bei einer anderen Leistung steht
    const hit = s.match && projects.find((p) => !used.has(p.slug) && s.match!.test([...p.services.de, ...p.services.en, ...p.category.de, ...p.role.en].join(" ")));
    if (hit) used.add(hit.slug);
    examples[s.id] = hit ? [{ href: href(locale, `/work/${hit.slug}`), title: hit.title, src: hit.coverImage.src as string, alt: hit.coverImage.alt[locale] }] : [];
  }

  return (
    <section className="tone-dark section border-t border-line" aria-labelledby="expertise-title">
      <div className="container-site">
        <SectionHeading id="expertise-title" eyebrow={dict.eyebrow} title={dict.sectionTitle} titleLang="en" intro={[dict.intro, dict.introMore]} />

        <div className="mt-14 lg:mt-20">
          <ServicesAccordion services={services.map(({ match: _m, ...rest }) => rest)} locale={locale} deliverablesLabel={deliverablesLabel} examples={examples} exampleLabel={dict.exampleLabel} />
        </div>

        <div className="mt-16 lg:mt-24">
          <h3 className="t-label t-muted mb-8" lang="en">{dict.processTitle}</h3>
          <ol className="process-steps">
            {dict.process.map((step, i) => (
              <li key={step.title} className="process-step">
                <span className="process-step__icon">{stepIcons[i]}</span>
                <p className="t-h3 mt-6">{step.title}</p>
                <p className="t-muted mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

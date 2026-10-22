import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { services } from "@/content/services";
import { getProjects } from "@/content/projects";
import { site } from "@/content/site";
import { resolveProof } from "@/lib/service-proof";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesAccordion, type ServiceExample } from "./ServicesAccordion";


export function Expertise({ locale, dict, deliverablesLabel }: { locale: Locale; dict: Dictionary["expertise"]; deliverablesLabel: string }) {
  // Pro Leistung genau ein Beispiel: das neueste veröffentlichte Projekt, das thematisch passt
  const projects = getProjects().filter((p) => p.published && p.coverImage.src && !site.homeWork.includes(p.slug));
  const examples: Record<string, ServiceExample[]> = {};
  const used = new Set<string>();
  const text = (p: (typeof projects)[number]) => [...p.services.de, ...p.services.en, ...p.category.de, ...p.role.en].join(" ");
  // AI-Projekte zuerst: alle AI-Visual-Engineering-Arbeiten (max. 2) gehören zu diesem Bereich
  const ai = services.find((s) => s.id === "ai-visual-engineering");
  const aiPool = getProjects().filter((p) => p.published && p.coverImage.src);
  const aiHits = ai?.match ? aiPool.filter((p) => ai.match!.test(text(p))).slice(0, 2) : [];
  aiHits.forEach((p) => used.add(p.slug));
  for (const s of services) {
    const hits = s === ai ? aiHits : (() => {
      // neuestes passendes Projekt, das noch nicht bei einer anderen Leistung steht
      const hit = s.match && projects.find((p) => !used.has(p.slug) && s.match!.test(text(p)));
      if (hit) used.add(hit.slug);
      return hit ? [hit] : [];
    })();
    examples[s.id] = hits.map((h) => ({ href: href(locale, `/work/${h.slug}`), title: h.title, src: h.coverImage.src as string, alt: h.coverImage.alt[locale] }));
  }

  return (
    <section className="tone-dark section border-t border-line" aria-labelledby="expertise-title">
      <div className="container-site">
        <SectionHeading id="expertise-title" eyebrow={dict.eyebrow} title={dict.sectionTitle} titleLang="en" intro={[dict.intro, dict.introMore].filter(Boolean)} />

        <div className="mt-14 lg:mt-20">
          <ServicesAccordion services={services.map(({ match: _m, ...rest }) => rest)} locale={locale} deliverablesLabel={deliverablesLabel} examples={examples} exampleLabel={dict.exampleLabel} focusLabel={dict.focusLabel} proofs={Object.fromEntries(services.map((s) => [s.id, resolveProof(s, locale)]))} />
        </div>

        <div className="section-cta">
          <p className="section-cta__text">{dict.ctaText}</p>
          <ButtonLink href="#contact" lang="en">{dict.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

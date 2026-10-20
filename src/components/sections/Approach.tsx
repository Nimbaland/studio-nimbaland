import type { Dictionary } from "@/i18n/dictionaries/de";
import { services } from "@/content/services";
import { PhysicsTags } from "@/components/motion/PhysicsTags";

/** Begriffe aus deinen Leistungen – ohne Dubletten. */
const tags = Array.from(new Set(services.flatMap((s) => s.deliverables)));

/**
 * Statement-Sektion mit fallenden, ziehbaren Begriffen (Physik).
 * Inhalt: dein Hero-Statement und dein Leitsatz.
 */
export function Approach({ dict, hero }: { dict: Dictionary["approach"]; hero: Dictionary["hero"] }) {
  return (
    <section className="tone-dark approach border-t border-line" aria-labelledby="approach-title">
      <div className="container-site approach__head">
        <p className="t-label t-muted" lang="en">{dict.eyebrow}</p>
        <p className="t-label t-muted approach__hint" aria-hidden="true">{dict.dragHint}</p>
      </div>
      <div className="container-site approach__statement">
        <h2 id="approach-title" className="t-h1 text-balance">{hero.statement}</h2>
        <p className="t-lead t-muted measure mt-8">{hero.tagline}</p>
      </div>
      <PhysicsTags tags={tags} className="approach__physics" />
    </section>
  );
}

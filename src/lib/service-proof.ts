import { href, type Locale } from "@/i18n/config";
import type { Service } from "@/content/services";
import { getProject } from "@/content/projects";

export type ProofLink = { href: string; title: string };

/** Löst die Leistung→Projekt-Zuordnung auf (nur veröffentlichte Projekte). */
export function resolveProof(s: Pick<Service, "proof">, locale: Locale): Record<string, ProofLink> {
  const out: Record<string, ProofLink> = {};
  for (const [d, slug] of Object.entries(s.proof ?? {})) {
    const p = getProject(slug);
    if (p?.published) out[d] = { href: href(locale, `/work/${p.slug}`), title: p.title };
  }
  return out;
}

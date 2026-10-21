import type { Localized } from "@/i18n/config";

/**
 * Datenmodell nach Spec §10, erweitert um Zweisprachigkeit.
 *
 * Regeln:
 *  - Nur belegte Angaben eintragen. Unbekanntes weglassen (Felder sind optional).
 *  - `outcomes` nur mit nachweisbaren Ergebnissen.
 *  - `published: false`, bis Inhalte UND Veröffentlichungsrechte geklärt sind.
 *    Unveröffentlichte Projekte erscheinen nur lokal im Dev-Modus
 *    (oder mit NEXT_PUBLIC_SHOW_DRAFTS=true) – mit Entwurfs-Badge.
 *  - Bilder liegen unter /public/projects/<slug>/. Fehlt eine Datei, `src: null`
 *    setzen – dann rendert die Seite einen beschrifteten Platzhalter.
 */

export type ProjectImage = {
  /** Pfad unter /public, z. B. "/projects/kratzert/cover.webp" – oder null, solange es fehlt. */
  src: string | null;
  /** Erwarteter Dateiname – wird im Platzhalter angezeigt. */
  expected?: string;
  alt: Localized;
  caption?: Localized;
  /** Seitenverhältnis des Originals, z. B. "16/9", "4/3", "3/2". */
  aspect?: string;
  width?: number;
  height?: number;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  /** Kurzer Leitsatz unter dem Titel, z. B. "Building a stronger brand presence." */
  tagline?: Localized;
  client?: string;
  year?: string;
  /** Fertigstellung als "JJJJ-MM" – steuert die chronologische Reihenfolge (neueste zuerst). */
  date?: string;
  /** Link zur Live-Website des Projekts (falls vorhanden). */
  liveUrl?: string;
  category: Localized<string[]>;
  role: Localized<string[]>;
  services: Localized<string[]>;
  summary: Localized;
  challenge?: Localized;
  approach?: Localized;
  solution?: Localized;
  outcomes?: Localized<string[]>; // only verified results
  coverImage: ProjectImage;       // real approved asset
  gallery: ProjectImage[];
  featured: boolean;
  published: boolean;             // false until approved
  /** Reihenfolge in Listen (kleiner = weiter oben). */
  order: number;
  /** Interne Notizen: was fehlt noch? Wird nie öffentlich angezeigt. */
  backlog?: string[];
};

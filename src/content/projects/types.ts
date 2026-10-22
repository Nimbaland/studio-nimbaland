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
  /** Optional: MP4-Video statt Standbild (src dient dann als Poster). */
  video?: string;
  /** false = Video startet nicht automatisch (z. B. lange Videos mit Ton). */
  autoplay?: boolean;
  /** Layout in der Galerie: "full" = volle Breite, "half" = halbe Breite. Sonst automatisch. */
  span?: "full" | "half";
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
  /** "stack": Bilder lückenlos untereinander (z. B. eine durchgehende Präsentation). */
  galleryLayout?: "grid" | "stack";
  /** Kurzgeschichte für die Startseite: Ausgangsfrage, Idee, gestalterische Entscheidung (nur belegte Inhalte). */
  story?: { challenge: Localized; idea: Localized; decision: Localized };
  /** Optionale Farbwelt der Case-Study-Seite (überschreibt die dunklen Basistöne). */
  theme?: { bg: string; fg: string; muted: string; border: string; accent: string };
  /** Optionaler Download, z. B. die vollständige Case-Study als PDF. */
  document?: { href: string; label: Localized };
  featured: boolean;
  published: boolean;             // false until approved
  /** Reihenfolge in Listen (kleiner = weiter oben). */
  order: number;
  /** Interne Notizen: was fehlt noch? Wird nie öffentlich angezeigt. */
  backlog?: string[];
};

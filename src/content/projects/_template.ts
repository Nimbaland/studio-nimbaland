import type { PortfolioProject } from "./types";

/**
 * VORLAGE für eine neue Case Study. Datei kopieren, umbenennen, ausfüllen.
 * Unbekannte optionale Felder einfach löschen – nichts erfinden.
 */
const project: PortfolioProject = {
  slug: "projekt-slug",
  title: "Projekttitel",
  tagline: { de: "Leitsatz.", en: "Tagline." },
  client: "Kunde",
  year: "2025",
  category: { de: ["Branding"], en: ["Branding"] },
  role: { de: ["Creative Direction"], en: ["Creative direction"] },
  services: { de: ["Visual Identity"], en: ["Visual identity"] },
  summary: { de: "Ein Satz, worum es ging.", en: "One sentence on what it was about." },
  challenge: { de: "Ausgangslage …", en: "Context …" },
  approach: { de: "Vorgehen …", en: "Approach …" },
  solution: { de: "Lösung …", en: "Solution …" },
  outcomes: { de: ["Nur belegte Ergebnisse"], en: ["Verified results only"] },
  coverImage: {
    src: "/projects/projekt-slug/cover.webp",
    alt: { de: "Beschreibung des Bildinhalts", en: "Description of the image" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    {
      src: "/projects/projekt-slug/gallery-01.webp",
      alt: { de: "…", en: "…" },
      caption: { de: "Optionale Bildunterschrift", en: "Optional caption" },
      aspect: "3/2",
      width: 2400,
      height: 1600,
    },
  ],
  featured: false,
  published: false,
  order: 99,
};

export default project;

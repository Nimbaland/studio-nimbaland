import type { PortfolioProject } from "./types";

// Emmler Lofts – Verkaufspreiseinschätzung, Kottbusser Damm 25–26, Berlin (Mai 2020), Colliers International.
// Quelle: "200511_Emmler_lofts_2" (62 Folien). Team-Folien und Zahlen werden nicht gezeigt.
const project: PortfolioProject = {
  slug: "emmler-lofts",
  title: "Emmler Lofts",
  tagline: { de: "Berlin energy for a sales pitch.", en: "Berlin energy for a sales pitch." },
  client: "Colliers International",
  year: "2020",
  date: "2020-05",
  category: { de: ["Präsentation", "Real Estate"], en: ["Presentation", "Real estate"] },
  role: { de: ["Art Direction", "Presentation Design"], en: ["Art direction", "Presentation design"] },
  services: { de: ["Art Direction", "Presentation Design", "Pitch Design"], en: ["Art Direction", "Presentation Design", "Pitch Design"] },
  summary: {
    de: "Verkaufspreiseinschätzung für die Emmler Lofts am Kottbusser Damm in Berlin – eine 62-seitige Präsentation von Executive Summary über Markt, Lage und Objekt bis zu Vergleichstransaktionen und Honorarvorschlag.",
    en: "Sales price assessment for the Emmler Lofts on Kottbusser Damm in Berlin — a 62-slide presentation from executive summary through market, location and property to comparable transactions and fee proposal.",
  },
  approach: {
    de: "Kreuzberg statt Konferenzraum: diagonale Farbbänder in Magenta, Grün, Blau und Gelb, Schwarz-Weiß-Fotografie mit Rasterpunkt und eine kantige Display-Schrift für die nummerierten Kapitel. Der Rhythmus aus lauten Kapitelfolien und ruhigen Inhaltsfolien hält 62 Seiten lebendig.",
    en: "Kreuzberg rather than boardroom: diagonal colour bands in magenta, green, blue and yellow, black-and-white photography with halftone dots and an angular display type for the numbered chapters. The rhythm of loud chapter slides and calm content slides keeps 62 pages alive.",
  },
  coverImage: { src: "/projects/emmler-lofts/cover.webp", alt: { de: "Titelfolie Emmler Lofts mit Farbbändern und Fassadenfoto", en: "Emmler Lofts title slide with colour bands and façade photo" }, aspect: "16/9", width: 2400, height: 1350 },
  gallery: [
    { src: "/projects/emmler-lofts/pages-poster.webp", video: "/projects/emmler-lofts/pages.mp4", span: "full", alt: { de: "Video: Alle 62 Seiten des Exposés nacheinander durchgeblättert", en: "Video: All 62 pages of the brochure paged through one by one" }, caption: { de: "Alle 62 Seiten des Exposés · Video", en: "All 62 pages of the brochure · video" }, aspect: "16/9", width: 1600, height: 900 },
    { src: "/projects/emmler-lofts/gallery-01.webp", alt: { de: "Kapitelfolie Executive Summary und Folie Emmler Lofts", en: "Executive summary chapter slide and Emmler Lofts slide" }, caption: { de: "Kapitel und Objekt", en: "Chapter and property" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/emmler-lofts/gallery-02.webp", alt: { de: "Marktfolie mit Diagramm und Objektfolie", en: "Market slide with chart and property slide" }, caption: { de: "Markt und Objekt", en: "Market and property" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/emmler-lofts/gallery-03.webp", alt: { de: "Kapitelfolien Objekt und Vergleichstransaktionen", en: "Chapter slides Property and Comparable transactions" }, caption: { de: "Kapitelfolien", en: "Chapter slides" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: false,
  published: true,
  order: 15,
  backlog: [],
};

export default project;

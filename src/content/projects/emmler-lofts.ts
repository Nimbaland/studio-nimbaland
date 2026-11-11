import type { PortfolioProject } from "./types";

// Emmler Lofts – Vermarktungspräsentation für ein Wohn- und Geschäftshaus in Berlin (Mai 2020), entstanden bei Colliers International.
// Anonymisiert (11.11.2026): keine Adresse, keine Zahlen, kein Auftraggeber-Logo, kein Blätter-Video aller Seiten.
const project: PortfolioProject = {
  slug: "emmler-lofts",
  title: "Emmler Lofts",
  tagline: { de: "Berliner Energie für eine Vermarktungspräsentation.", en: "Berlin energy for a sales pitch." },
  client: "Colliers International",
  year: "2020",
  date: "2020-05",
  category: { de: ["Präsentation", "Immobilien"], en: ["Presentation", "Real estate"] },
  role: { de: ["Art Direction", "Präsentationsdesign"], en: ["Art direction", "Presentation design"] },
  services: { de: ["Art Direction", "Präsentationsdesign", "Pitch-Design"], en: ["Art Direction", "Presentation Design", "Pitch Design"] },
  summary: {
    de: "Vermarktungspräsentation für ein Wohn- und Geschäftshaus in Berlin – über 60 Folien mit Kapiteln zu Markt, Lage und Objekt. Vertrauliche Angaben sind unkenntlich gemacht.",
    en: "Marketing presentation for a residential and commercial building in Berlin — more than 60 slides with chapters on market, location and property. Confidential details have been obscured.",
  },
  approach: {
    de: "Kreuzberg statt Konferenzraum: diagonale Farbbänder in Magenta, Grün, Blau und Gelb, Schwarz-Weiß-Fotografie mit Rasterpunkt und eine kantige Display-Schrift für die nummerierten Kapitel. Der Rhythmus aus lauten Kapitelfolien und ruhigen Inhaltsfolien hält 62 Seiten lebendig.",
    en: "Kreuzberg rather than boardroom: diagonal colour bands in magenta, green, blue and yellow, black-and-white photography with halftone dots and an angular display type for the numbered chapters. The rhythm of loud chapter slides and calm content slides keeps 62 pages alive.",
  },
  coverImage: { src: "/projects/emmler-lofts/cover.webp", alt: { de: "Titelfolie Emmler Lofts mit Farbbändern und Fassadenfoto", en: "Emmler Lofts title slide with colour bands and façade photo" }, aspect: "16/9", width: 2400, height: 1350 },
  gallery: [
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

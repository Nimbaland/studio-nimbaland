import type { PortfolioProject } from "./types";

// Logo Design – Auswahl von Logos und Marken, die Nimalan über die Jahre gestaltet hat.
// Quelle: Logo-Dateien von Nimalan (PNG/JPG/SVG). Weitere Logos liegen nur als .ai ohne
// PDF-Inhalt vor und werden ergänzt, sobald sie als PDF/SVG/PNG exportiert sind:
// Zillertaler Flugschule, Bartenders Night Out, Shylo Mylo, Hase (COVID-19), First German
// Property Management Dubai, Cleancircle, Wholistic Health, Kita Steimker Gärten.
const project: PortfolioProject = {
  slug: "logo-design",
  title: "Logo Design",
  tagline: { de: "Marks that stay.", en: "Marks that stay." },
  client: "Verschiedene Kunden",
  category: { de: ["Logo Design", "Branding"], en: ["Logo design", "Branding"] },
  role: { de: ["Logo Design", "Brand Identity"], en: ["Logo design", "Brand identity"] },
  services: {
    de: ["Brand Identity", "Logo Design"],
    en: ["Brand Identity", "Logo Design"],
  },
  summary: {
    de: "Eine Auswahl von Logos und Marken aus den letzten Jahren – vom Interior Designer über den Barbershop bis zum Social Club. Jedes Zeichen beginnt mit der Frage, wofür eine Marke steht, bevor man sie sieht.",
    en: "A selection of logos and brands from recent years — from an interior designer to a barbershop to a social club. Every mark starts with the question of what a brand stands for before you see it.",
  },
  coverImage: {
    src: "/projects/logo-design/cover.webp",
    alt: { de: "Logo-Wand mit sechs Logos", en: "Logo wall with six logos" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/logo-design/mp.webp", span: "half", alt: { de: "Logo Marcel Prior Interior", en: "Marcel Prior Interior logo" }, caption: { de: "Marcel Prior Interior", en: "Marcel Prior Interior" }, aspect: "1/1", width: 1200, height: 1200 },
    { src: "/projects/logo-design/casse.webp", span: "half", alt: { de: "Wortmarke cassé auf Blattwerk", en: "cassé wordmark on foliage" }, caption: { de: "cassé", en: "cassé" }, aspect: "1/1", width: 1200, height: 1200 },
    { src: "/projects/logo-design/csc.webp", span: "half", alt: { de: "Rundes Logo Cannabis Social Club Wolfsburg mit Pfau", en: "Round Cannabis Social Club Wolfsburg logo with a peacock" }, caption: { de: "Cannabis Social Club Wolfsburg · 2023", en: "Cannabis Social Club Wolfsburg · 2023" }, aspect: "1/1", width: 1200, height: 1200 },
    { src: "/projects/logo-design/gong.webp", span: "half", alt: { de: "Logo Gong Love by Mimi mit goldenem Gong", en: "Gong Love by Mimi logo with a golden gong" }, caption: { de: "Gong Love by Mimi", en: "Gong Love by Mimi" }, aspect: "1/1", width: 1200, height: 1200 },
    { src: "/projects/logo-design/mw.webp", span: "half", alt: { de: "Logo MW Dellentechnik – Reparieren ohne Lackieren", en: "MW Dellentechnik logo — repair without repainting" }, caption: { de: "MW Dellentechnik", en: "MW Dellentechnik" }, aspect: "1/1", width: 1200, height: 1200 },
    { src: "/projects/logo-design/sisi.webp", span: "half", alt: { de: "Logo Sisi Afro Kiosk / Afro Barber Shop", en: "Sisi Afro Kiosk / Afro Barber Shop logo" }, caption: { de: "Sisi Afro Kiosk", en: "Sisi Afro Kiosk" }, aspect: "1/1", width: 1200, height: 1200 },
    { src: "/projects/logo-design/traffic.webp", span: "half", alt: { de: "Logo TrafficHabibi", en: "TrafficHabibi logo" }, caption: { de: "TrafficHabibi", en: "TrafficHabibi" }, aspect: "1/1", width: 1200, height: 1200 },
  ],
  featured: false,
  published: true,
  order: 20,
  backlog: [
    "Jahre/Kunden je Logo bestätigen",
    "Höher aufgelöste Dateien (Cannabis Social Club, TrafficHabibi)",
    ".ai-Dateien als PDF/SVG/PNG exportieren: Zillertaler Flugschule, Bartenders Night Out, Shylo Mylo, Hase, First German, Cleancircle, Wholistic Health, Kita Steimker, Untitled Artwork",
  ],
};

export default project;

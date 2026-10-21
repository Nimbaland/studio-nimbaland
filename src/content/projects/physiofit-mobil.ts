import type { PortfolioProject } from "./types";

// Physiofit-Mobil · Inga Zander, mobile Physiotherapie (2025).
// Quelle: Projektordner "Inga Zander" (Logo, Flyer, Preisliste). Icons im Flyer stammen
// aus dem Noun Project und werden hier nicht als eigene Arbeit genannt.
// Tippfehler aus den Originaldateien (Logo "PHIYSIOFIT", Flyer "Physiotherpeutin") sind in den Website-Bildern korrigiert.
const project: PortfolioProject = {
  slug: "physiofit-mobil",
  title: "Physiofit-Mobil",
  tagline: { de: "Therapy that comes to you.", en: "Therapy that comes to you." },
  client: "Inga Zander · Physiofit-Mobil",
  year: "2025",
  date: "2025-09",
  category: { de: ["Branding", "Print"], en: ["Branding", "Print"] },
  role: { de: ["Logo", "Corporate Design", "Print"], en: ["Logo", "Corporate design", "Print"] },
  services: {
    de: ["Brand Identity", "Logo Design", "Print Design"],
    en: ["Brand Identity", "Logo Design", "Print Design"],
  },
  summary: {
    de: "Logo und Printauftritt für eine mobile Physiotherapeutin – vom Markenzeichen bis zu Flyer und Preisliste.",
    en: "Logo and print identity for a mobile physiotherapist — from brand mark to flyer and price list.",
  },
  approach: {
    de: "Das Zeichen verbindet eine bewegte Figur mit fließenden Linien in Petrol und Türkis: Bewegung, Ruhe und Behandlung in einem runden, freundlichen Symbol. Daraus entstanden ein Flyer, der alle Leistungen verständlich erklärt, und eine Preisliste als Einleger.",
    en: "The mark combines a moving figure with flowing lines in petrol and turquoise: movement, calm and treatment in one round, friendly symbol. It led to a flyer that explains all services clearly and a price list insert.",
  },
  coverImage: {
    src: "/projects/physiofit-mobil/cover.webp",
    alt: { de: "Logo von Physiofit-Mobil, mobile Physiotherapie", en: "Physiofit-Mobil logo, mobile physiotherapy" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/physiofit-mobil/flyer-poster.webp", video: "/projects/physiofit-mobil/flyer.mp4", span: "full", alt: { de: "Video: der Flyer wird gewendet, die Kamera fährt über Logo und Leistungen", en: "Video: the flyer turns over while the camera moves across logo and services" }, caption: { de: "Flyer · Video", en: "Flyer · video" }, aspect: "16/9", width: 1600, height: 900 },
    { src: "/projects/physiofit-mobil/gallery-01.webp", alt: { de: "Flyer-Außenseite mit Logo und Behandlungsfoto", en: "Flyer outside with logo and treatment photo" }, caption: { de: "Flyer, außen", en: "Flyer, outside" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/physiofit-mobil/gallery-02.webp", alt: { de: "Flyer-Innenseite mit Leistungsübersicht", en: "Flyer inside with service overview" }, caption: { de: "Flyer, innen", en: "Flyer, inside" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/physiofit-mobil/gallery-03.webp", alt: { de: "Preisliste als Einleger", en: "Price list insert" }, caption: { de: "Preisliste", en: "Price list" }, aspect: "3/2", width: 2400, height: 1600 },
  ],
  featured: true,
  published: true,
  order: 5,
  backlog: [],
};

export default project;

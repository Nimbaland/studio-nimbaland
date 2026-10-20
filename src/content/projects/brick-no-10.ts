import type { PortfolioProject } from "./types";

// Brick No 10 – Investment-Pitchbuch für ein Kontorhaus in Hamburg (Juli 2019).
// Entstanden als Senior Art Director bei Colliers International (Juni 2019 – März 2021).
// Quelle: Druck-PDF "190701_BrickNo10_korrigiert" (87 Seiten). Team-/CV-Seiten und Zahlen werden nicht gezeigt.
const project: PortfolioProject = {
  slug: "brick-no-10",
  title: "Brick No 10",
  tagline: { de: "Where Hanseatic tradition meets the digital future.", en: "Where Hanseatic tradition meets the digital future." },
  client: "Colliers International",
  year: "2019",
  category: { de: ["Editorial", "Real Estate", "Pitch"], en: ["Editorial", "Real estate", "Pitch"] },
  role: { de: ["Art Direction", "Editorial Design", "Naming & Logo"], en: ["Art direction", "Editorial design", "Naming & logo"] },
  services: { de: ["Art Direction", "Editorial Design", "Pitch Design"], en: ["Art Direction", "Editorial Design", "Pitch Design"] },
  summary: {
    de: "Ein 87-seitiges Pitchbuch für den Verkauf eines historischen Backstein-Kontorhauses im Hamburger Kontorhausviertel – mit eigener Objektmarke, Kapiteldramaturgie und maritimer Bildsprache.",
    en: "An 87-page pitch book for the sale of a historic brick office building in Hamburg's Kontorhaus district — with its own property brand, chapter dramaturgy and maritime visual language.",
  },
  approach: {
    de: "Das Objekt bekam eine eigene Marke: „Brick No 10“ in Rot auf Navy, dazu feine Linien und Seefahrts-Icons – Schiff, Anker, Kompass – als Kapitelzeichen. Luftbilder mit präzisen Markierungen erklären die Lage, freigestellte Gebäude und Nachtaufnahmen geben dem Backstein Präsenz. So liest sich ein Zahlenwerk wie eine Geschichte über Tradition und Zukunft.",
    en: "The property got its own brand: “Brick No 10” in red on navy, with fine lines and seafaring icons — ship, anchor, compass — as chapter marks. Aerial photos with precise markings explain the location, cut-out buildings and night shots give the brick presence. The result reads less like a data pack and more like a story of tradition and future.",
  },
  coverImage: { src: "/projects/brick-no-10/cover.webp", alt: { de: "Doppelseite mit Agenda und freigestelltem Backsteingebäude", en: "Spread with agenda and cut-out brick building" }, aspect: "16/9", width: 2400, height: 1350 },
  gallery: [
    { src: "/projects/brick-no-10/gallery-01.webp", alt: { de: "Doppelseite Lage: Luftbild von Hamburg mit Markierungen", en: "Location spread: aerial photo of Hamburg with markings" }, caption: { de: "Lage", en: "Location" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/brick-no-10/gallery-02.webp", alt: { de: "Doppelseite Kontorhausviertel mit beleuchtetem Gebäude", en: "Kontorhaus district spread with illuminated building" }, caption: { de: "Kontorhausviertel", en: "Kontorhaus district" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/brick-no-10/gallery-03.webp", alt: { de: "Titel mit Objektmarke Brick No 10", en: "Cover with the Brick No 10 property brand" }, caption: { de: "Titel", en: "Cover" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 13,
  backlog: ["Rolle Naming/Logo bestätigen"],
};

export default project;

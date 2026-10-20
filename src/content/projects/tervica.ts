import type { PortfolioProject } from "./types";

// Quelle: Nimalans Projektordner "Tervica" (Rebranding-Pitch Q2 2026, finale Logo-Versionen A/B).
const project: PortfolioProject = {
  slug: "tervica",
  title: "Tervica",
  tagline: { de: "Rethinking identity.", en: "Rethinking identity." },
  client: "Tervica",
  year: "2026",
  category: { de: ["Rebranding", "Markenstrategie"], en: ["Rebranding", "Brand strategy"] },
  role: { de: ["Brand Strategy", "Visual Identity", "Pitch"], en: ["Brand strategy", "Visual identity", "Pitch"] },
  services: {
    de: ["Brand Strategy", "Rebranding", "Creative Concept"],
    en: ["Brand Strategy", "Rebranding", "Creative Concept"],
  },
  summary: {
    de: "Die gestalterische und strategische Auseinandersetzung mit einer neuen Markenidentität und ihrer visuellen Sprache.",
    en: "A design-led and strategic exploration of a new brand identity and its visual language.",
  },
  challenge: {
    de: "Das Logo stammte aus 2012: Die Welle als Bewegungssignatur und der Bronze-Silber-Kontrast trugen noch, aber Verläufe und Glanz skalierten nicht, kleine Größen zerfielen und es fehlte eine digitale System-Logik.",
    en: "The logo dated from 2012: the wave as a signature of movement and the bronze–silver contrast still worked, but gradients and gloss didn't scale, small sizes fell apart and there was no digital system logic.",
  },
  approach: {
    de: "Ein Rebrand als Schärfung, nicht als Neuerfindung. Vier Leitprinzipien – premium statt prunkvoll, System statt Einzelstück, eigen statt modisch, digital-native – steuerten vier Farbwelten und fünf Logokonzepte, die alle dieselbe DNA in einer anderen Tonlage weiterdenken.",
    en: "A rebrand as sharpening, not reinvention. Four principles — premium not showy, system not one-off, distinctive not trendy, digital-native — guided four colour worlds and five logo concepts, each carrying the same DNA in a different tone.",
  },
  solution: {
    de: "Die Empfehlung: „Wave + Sphere“ in der Farbwelt „Midnight Luxury“ – die Welle bekommt einen Kern, Bronze wird zu Gold auf Mitternachtsblau. Eine Evolution statt Revolution, vom Favicon bis zur Fassade einsetzbar. In der Ausarbeitung entstanden zwei finale Logo-Versionen.",
    en: "The recommendation: “Wave + Sphere” in the “Midnight Luxury” colour world — the wave gains a core, bronze becomes gold on midnight blue. Evolution rather than revolution, usable from favicon to façade. The refinement produced two final logo versions.",
  },
  coverImage: {
    src: "/projects/tervica/cover.webp",
    alt: { de: "Titelfolie des Rebranding-Pitches: „Tervica, neu übersetzt.“", en: "Title slide of the rebranding pitch: “Tervica, neu übersetzt.”" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/tervica/gallery-01.webp", alt: { de: "Analyse des bisherigen Logos aus 2012", en: "Analysis of the previous logo from 2012" }, caption: { de: "Status quo", en: "Status quo" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/gallery-02.webp", alt: { de: "Vier Farbwelten im Überblick", en: "Overview of four colour worlds" }, caption: { de: "Vier Farbwelten", en: "Four colour worlds" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/gallery-03.webp", alt: { de: "Farbwelt Midnight Luxury mit Nacht, Tiefblau, Gold, Hellgold und Elfenbein", en: "Midnight Luxury colour world with night, deep blue, gold, light gold and ivory" }, caption: { de: "Empfohlene Farbwelt", en: "Recommended colour world" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/gallery-04.webp", alt: { de: "Fünf Logokonzepte: Wave + Sphere, Triple Wave, Line Wave, Radial Sonar, Framed Mark", en: "Five logo concepts: Wave + Sphere, Triple Wave, Line Wave, Radial Sonar, Framed Mark" }, caption: { de: "Fünf Konzepte", en: "Five concepts" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/gallery-05.webp", alt: { de: "Empfehlung Wave + Sphere in Midnight Luxury", en: "Recommendation: Wave + Sphere in Midnight Luxury" }, caption: { de: "Die Empfehlung", en: "The recommendation" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/gallery-06.webp", alt: { de: "Logo-Varianten in allen Farbwelten", en: "Logo variants across all colour worlds" }, caption: { de: "Logo-Varianten", en: "Logo variants" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/gallery-07.webp", alt: { de: "Zwei finale Logo-Versionen: Kupfer-Silber und Violett", en: "Two final logo versions: copper–silver and violet" }, caption: { de: "Finale Versionen A und B", en: "Final versions A and B" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 2,
  backlog: [],
};

export default project;

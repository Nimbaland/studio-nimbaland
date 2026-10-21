import type { PortfolioProject } from "./types";

// Quelle: Nimalans Projektordner "Tervica" (Rebranding-Pitch Q2 2026), "Tervica Finale Pitch" (04/2026),
// finale Logos Version A + B (SVG), Druckdaten der Produkte, Fotos der bisherigen Produkte.
// Annahme: Version B = Hauptmarke, Version A = zweites Produkt (Rundsticker) – bestätigen.
const project: PortfolioProject = {
  slug: "tervica",
  title: "Tervica",
  tagline: { de: "Rethinking identity.", en: "Rethinking identity." },
  client: "Tervica",
  year: "2026",
  date: "2026-05",
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
    de: "Ein Rebrand als Schärfung, nicht als Neuerfindung. Aus mehreren Farbwelten setzte sich Amethyst durch – die einzige Farbe, die alle drei Versprechen der Marke trägt: Tiefe, Klarheit und Differenzierung. Daraus entstanden vier Stimmen derselben Welle, von standhaft bis zart: Amethyst & Anchor, Amethyst & Rose, Soft Amethyst und Rose Veil.",
    en: "A rebrand as sharpening, not reinvention. Out of several colour worlds, amethyst won through — the only colour that carries all three brand promises: depth, clarity and differentiation. It produced four voices of the same wave, from steadfast to delicate: Amethyst & Anchor, Amethyst & Rose, Soft Amethyst and Rose Veil.",
  },
  solution: {
    de: "Nicht eine Stimme, ein Chor: Amethyst & Anchor wird zur Hauptmarke, die übrigen Varianten tragen Kampagnen, Atmosphäre und Sub-Linien. Zwei finale Logos gingen in die Produktion – Version B für die Hauptmarke, Version A für ein zweites Produkt. Auf den Kuppel-Stickern ersetzen sie das Logo von 2012, die konzentrischen Ringe der Produkte bleiben.",
    en: "Not one voice but a choir: Amethyst & Anchor becomes the primary brand, the other variants carry campaigns, atmosphere and sub-lines. Two final logos went into production — version B for the main brand, version A for a second product. On the domed stickers they replace the 2012 logo, while the products' concentric rings remain.",
  },
  coverImage: {
    src: "/projects/tervica/cover.webp",
    alt: { de: "Kuppel-Sticker im neuen Tervica-Logo: Rundsticker und Karten-Sticker", en: "Domed stickers in the new Tervica logo: round sticker and card sticker" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/tervica/vorher.webp", span: "full", alt: { de: "Bisherige Produkte: Kuppel-Sticker mit dem Logo von 2012", en: "Previous products: domed stickers with the 2012 logo" }, caption: { de: "Ausgangslage: die Produkte mit dem alten Logo", en: "Starting point: the products with the old logo" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-01.webp", span: "full", alt: { de: "Titelfolie: Vier Stimmen. Eine Marke.", en: "Title slide: Four voices. One brand." }, caption: { de: "Finale Präsentation, April 2026", en: "Final presentation, April 2026" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-02.webp", span: "half", alt: { de: "Warum Amethyst: Tiefe, Klarheit, Differenzierung", en: "Why amethyst: depth, clarity, differentiation" }, caption: { de: "Eine Farbe, die trägt", en: "One colour that carries" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-03.webp", span: "half", alt: { de: "Die vier finalen Logo-Varianten", en: "The four final logo variants" }, caption: { de: "Vier Persönlichkeiten der gleichen Welle", en: "Four personalities of the same wave" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-04.webp", span: "half", alt: { de: "Variante 01: Amethyst & Anchor", en: "Variant 01: Amethyst & Anchor" }, caption: { de: "01 · Amethyst & Anchor", en: "01 · Amethyst & Anchor" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-05.webp", span: "half", alt: { de: "Variante 02: Amethyst & Rose", en: "Variant 02: Amethyst & Rose" }, caption: { de: "02 · Amethyst & Rose", en: "02 · Amethyst & Rose" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-06.webp", span: "half", alt: { de: "Variante 03: Soft Amethyst", en: "Variant 03: Soft Amethyst" }, caption: { de: "03 · Soft Amethyst", en: "03 · Soft Amethyst" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-07.webp", span: "half", alt: { de: "Variante 04: Rose Veil", en: "Variant 04: Rose Veil" }, caption: { de: "04 · Rose Veil", en: "04 · Rose Veil" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/pitch-08.webp", span: "full", alt: { de: "Empfehlung: Nicht eine Stimme. Ein Chor.", en: "Recommendation: Not one voice. A choir." }, caption: { de: "Die Empfehlung", en: "The recommendation" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/logos.webp", span: "full", alt: { de: "Die beiden finalen Logos, Version B in Amethyst und Version A in Rost, Ocker und Stahlblau", en: "The two final logos, version B in amethyst and version A in rust, ochre and steel blue" }, caption: { de: "Finale Logos · Version B und A", en: "Final logos · versions B and A" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/druckdaten.webp", span: "full", alt: { de: "Druckdaten: Rundsticker mit Version A und Karten-Sticker mit Version B", en: "Print files: round sticker with version A and card sticker with version B" }, caption: { de: "Druckdaten der Produkte, 2D", en: "Product print files, 2D" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tervica/stickerbogen.webp", span: "full", alt: { de: "Stickerbogen mit sechs Kuppel-Stickern im neuen Logo", en: "Sticker sheet with six domed stickers in the new logo" }, caption: { de: "Mockup: Stickerbogen", en: "Mockup: sticker sheet" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  theme: { bg: "#1d1226", fg: "#f4eff8", muted: "#b7a5c6", border: "#3d2d4b", accent: "#c9aad0" },
  featured: true,
  published: true,
  order: 2,
  backlog: ["Zuordnung bestätigen: Version B Hauptmarke, Version A zweites Produkt (Rundsticker)?"],
};

export default project;

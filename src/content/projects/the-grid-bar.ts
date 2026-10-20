import type { PortfolioProject } from "./types";

// The Grid Bar, Köln (Friesenstraße 62) · 2018–2019.
// Quelle: Druckdaten von Nimalan – Barkarte "The Square Paper" (Season 2018/2019, 16 Seiten),
// Flying-Buffet-Karte, Silvester-Einladung (NYE 2020), Karneval-Special-Einleger "Fastelovend".
// Barsnacks-Datei (.ai) ist ohne PDF-Inhalt gespeichert und konnte nicht dargestellt werden.
// Mockups: eigene Flat-Lay-Kompositionen aus den Druckdaten.
const project: PortfolioProject = {
  slug: "the-grid-bar",
  title: "The Grid Bar",
  tagline: { de: "A bar menu worth reading.", en: "A bar menu worth reading." },
  client: "The Grid Bar, Köln",
  year: "2018–2019",
  category: { de: ["Print", "Editorial", "Gastronomie"], en: ["Print", "Editorial", "Hospitality"] },
  role: { de: ["Editorial Design", "Print Design"], en: ["Editorial design", "Print design"] },
  services: {
    de: ["Editorial Design", "Print Design", "Event Collateral"],
    en: ["Editorial Design", "Print Design", "Event Collateral"],
  },
  summary: {
    de: "Barkarte, Flying-Buffet-Karte, Silvester-Einladung und Karneval-Special für eine Cocktailbar in Köln – ein quadratisches Printsystem, das Drinks wie kleine Geschichten erzählt.",
    en: "Bar menu, flying-buffet card, New Year's Eve invitation and carnival special for a cocktail bar in Cologne — a square print system that tells each drink like a short story.",
  },
  approach: {
    de: "„The Square Paper“ gibt jedem Drink eine eigene Spalte: Name in gesperrten Versalien, ein kurzer Text mit Haltung, die Key Flavours und eine Glas-Ikone – klar wie ein Raster, passend zum Namen der Bar. Ein knallrotes Statement-Motiv bricht die Ruhe. Für Anlässe wurde das System erweitert: eine Silvester-Einladung in Gold und Weiß und ein Karneval-Einleger mit eigenem Drink, dem „Fastelovend“.",
    en: "“The Square Paper” gives every drink its own column: the name in spaced capitals, a short text with attitude, the key flavours and a glass icon — clear as a grid, true to the bar's name. A bright red statement page breaks the calm. For occasions the system was extended: a New Year's Eve invitation in gold and white, and a carnival insert with its own drink, the “Fastelovend”.",
  },
  coverImage: {
    src: "/projects/the-grid-bar/cover.webp",
    alt: { de: "Titel der Barkarte „The Square Paper“ und rote Statement-Seite", en: "Cover of the bar menu “The Square Paper” and red statement page" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/the-grid-bar/gallery-01.webp", alt: { de: "Zwei Innenseiten der Barkarte mit je zwei Cocktails", en: "Two inside pages of the bar menu with two cocktails each" }, caption: { de: "Barkarte „The Square Paper“", en: "Bar menu “The Square Paper”" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/the-grid-bar/gallery-02.webp", alt: { de: "Silvester-Einladung, Vorder- und Rückseite in Gold und Weiß", en: "New Year's Eve invitation, front and back in gold and white" }, caption: { de: "Silvester-Einladung", en: "New Year's Eve invitation" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/the-grid-bar/gallery-03.webp", alt: { de: "Karneval-Special-Einleger mit dem Drink „Fastelovend“", en: "Carnival special insert featuring the “Fastelovend” drink" }, caption: { de: "Karneval-Special", en: "Carnival special" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/the-grid-bar/gallery-04.webp", alt: { de: "Flying-Buffet-Karte, Titel und Innenseite", en: "Flying buffet card, cover and inside" }, caption: { de: "Flying Buffet", en: "Flying buffet" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 9,
  backlog: ["Barsnacks als PDF exportieren (die .ai-Datei enthält keine darstellbare PDF-Ansicht)"],
};

export default project;

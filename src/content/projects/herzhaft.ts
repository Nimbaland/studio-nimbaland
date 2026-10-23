import type { PortfolioProject } from "./types";

// Café Herzhaft, Düsseldorfer Str. 7, 51379 Leverkusen-Opladen.
// Quelle: Druckdaten von Nimalan – Speisekarte 2024 (A5, 15 Seiten), Außenschild + Außenwerbung Speisekarte (je 600 × 2000 mm),
// Kundenstopper 500 × 700 mm (Rückseite „Hey Ihr Lieben“, Weihnachten schwarz, Weihnachten rot), Gutschein A6 (Dateiname 230411),
// Treuebonus-Karte 85 × 55 mm, Fensterbeklebung 400 × 400 mm mit/ohne Schriftzug (.ai, Darstellung über Bildmarke aus der Speisekarte
// und die eingebettete .ai-Vorschau für Farbverlauf und Anordnung).
// Logo, Design System und Schriftwahl laut Nimalan von ihm (22.10.2026). Schriften aus den PDFs: Futura PT, Josefin Sans.
// Farbwerte aus Logo-Vorschau (.ai) und Druckdaten abgelesen.
// Mockups: eigene Kompositionen aus den Druckdaten.
const project: PortfolioProject = {
  slug: "herzhaft",
  title: "Herzhaft",
  tagline: { de: "Ein Café, das man schon von der Straße aus versteht.", en: "A café you understand from the street." },
  client: "Café Herzhaft, Leverkusen-Opladen",
  year: "2023–2024",
  date: "2024-01",
  category: { de: ["Branding", "Print", "Außenwerbung", "Gastronomie"], en: ["Branding", "Print", "Outdoor", "Hospitality"] },
  role: { de: ["Logo", "Design System", "Schriftwahl", "Print Design", "Außenwerbung"], en: ["Logo", "Design system", "Type selection", "Print design", "Outdoor advertising"] },
  services: {
    de: ["Brand Identity", "Logo Design", "Design System", "Print Design", "Signage"],
    en: ["Brand Identity", "Logo Design", "Design System", "Print Design", "Signage"],
  },
  summary: {
    de: "Logo, Design System und alle Medien für ein Café in Opladen – Speisekarte, Außenschilder, Kundenstopper, Gutschein, Treuekarte und Fensterbeklebung – ein Auftritt, der vom Gehweg bis zum Tisch dieselbe Sprache spricht.",
    en: "Logo, design system and every touchpoint for a café in Opladen – menu, exterior signs, A-boards, gift voucher, loyalty card and window graphics – one look that speaks the same language from the pavement to the table.",
  },
  challenge: {
    de: "Ein Café mit großer Auswahl – Frühstück, Panini, Baguettes, Wraps, Bowls, Suppen und Catering – vegetarisch, vegan und halal. Die Gäste sollen das schon draußen erfassen und drinnen schnell finden, was sie suchen.",
    en: "A café with a wide range – breakfast, panini, baguettes, wraps, bowls, soups and catering – vegetarian, vegan and halal. Guests should grasp it from outside and quickly find what they're looking for inside.",
  },
  approach: {
    de: "Am Anfang steht die Marke: eine Bildmarke aus Herz, Apfel, Löffel und Gabel im Verlauf von Dunkel- zu Blattgrün, dazu eine handgeschriebene Wortmarke. Futura PT trägt alle Informationen – klar, gut lesbar, auch auf zwei Metern Höhe –, Josefin Sans gibt Kundenstopper und Aktionen einen leichteren Ton. Eine ruhige Schwarz-Weiß-Basis mit handgezeichneten Gemüse-Illustrationen und der Script-Wortmarke trägt alles: die 15-seitige Speisekarte mit einer Seite pro Kategorie und dunklen Getränkeseiten, vier runde Siegel (100 % Veg, Vegan Food, 100 % Halal, To Go) als wiederkehrende Orientierung. Draußen übernehmen zwei 2 Meter hohe Außenschilder die komplette Karte, der Kundenstopper zeigt auf der einen Seite die Kategorien, auf der anderen saisonale Aktionen.",
    en: "It starts with the brand: a mark made of heart, apple, spoon and fork in a gradient from dark to leaf green, plus a handwritten wordmark. Futura PT carries all information – clear and legible, even at two metres high – while Josefin Sans gives A-boards and offers a lighter tone. A calm black-and-white base with hand-drawn vegetable illustrations and the script wordmark carries everything: the 15-page menu with one page per category and dark drinks pages, and four round seals (100 % Veg, Vegan Food, 100 % Halal, To Go) as recurring orientation. Outside, two 2-metre exterior signs carry the full menu, and the A-board shows the categories on one side and seasonal offers on the other.",
  },
  solution: {
    de: "Dazu ein Gutschein im A6-Format, eine Treuekarte, auf der jeder Stempel einen Buchstaben von H-E-R-Z-H-A-F-T füllt, und die Fensterbeklebung mit Wort- und Bildmarke in Grün. Zur Weihnachtszeit wurde der Kundenstopper zweimal neu inszeniert – einmal schwarz mit Orangen und Sternanis, einmal weiß-rot mit Ornamentrahmen – jeweils mit den Winter-Angeboten für Frühstück und Nachmittag.",
    en: "Plus an A6 gift voucher, a loyalty card where every stamp fills one letter of H-E-R-Z-H-A-F-T, and the window graphics with wordmark and mark in green. For the Christmas season the A-board was restaged twice – once black with oranges and star anise, once white and red with an ornamental frame – each with the winter offers for breakfast and afternoon.",
  },
  story: {
    challenge: { de: "Viel Auswahl, drei Ernährungsweisen – und Gäste, die im Vorbeigehen entscheiden.", en: "A big range, three diets – and guests who decide while walking past." },
    idea: { de: "Eine Marke, die nach Essen und Herz aussieht – und ein System, das vom Gehweg bis zum Tisch dieselbe Sprache spricht.", en: "A brand that looks like food and heart – and a system that speaks the same language from pavement to table." },
    decision: { de: "Die komplette Karte nach draußen holen – auf zwei 2 Meter hohe Schilder – und die Treuekarte den Namen buchstabieren lassen.", en: "Bring the full menu outside – onto two 2-metre signs – and let the loyalty card spell out the name." },
  },
  coverImage: {
    src: "/projects/herzhaft/cover.webp",
    alt: { de: "Aufgeschlagene Herzhaft-Speisekarte mit Frühstück und Panini, daneben Titelseite und Treuekarte", en: "Open Herzhaft menu showing breakfast and panini, next to the cover and the loyalty card" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/herzhaft/gallery-01.webp", span: "full", alt: { de: "Herzhaft-Logo: Wortmarke über Bildmarke im grünen Verlauf, Negativ auf Dunkelgrün, Wortmarke und Bildmarke einzeln", en: "Herzhaft logo: wordmark above the mark in a green gradient, reversed on dark green, wordmark and mark on their own" }, caption: { de: "Logo · Wortmarke und Bildmarke", en: "Logo · wordmark and mark" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-02.webp", span: "full", alt: { de: "Design System: fünf Farben, Logo-Verlauf, vier Siegel, Schriften Futura PT und Josefin Sans", en: "Design system: five colours, logo gradient, four seals, typefaces Futura PT and Josefin Sans" }, caption: { de: "Design System · Farbe, Siegel, Typografie", en: "Design system · colour, seals, typography" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-03.webp", span: "full", alt: { de: "Fensterbeklebung mit Wortmarke und grüner Bildmarke auf der Scheibe des Cafés", en: "Window graphic with wordmark and green mark on the café window" }, caption: { de: "Fensterbeklebung 400 × 400 mm", en: "Window graphic 400 × 400 mm" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-04.webp", span: "full", alt: { de: "Alle 15 Seiten der Speisekarte im Überblick", en: "All 15 pages of the menu at a glance" }, caption: { de: "Speisekarte 2024 · A5 · 15 Seiten", en: "Menu 2024 · A5 · 15 pages" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-05.webp", span: "full", alt: { de: "Dunkle Getränkeseiten der Speisekarte und die Seite mit den Saucen", en: "Dark drinks pages of the menu and the sauces page" }, caption: { de: "Getränke auf Schwarz", en: "Drinks on black" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-06.webp", span: "full", alt: { de: "Zwei Kundenstopper: Weihnachtsmotiv in Schwarz und die grüne Seite mit allen Kategorien", en: "Two A-boards: the black Christmas design and the green side with all categories" }, caption: { de: "Kundenstopper 500 × 700 mm · Weihnachten und Rückseite", en: "A-board 500 × 700 mm · Christmas and reverse" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-07.webp", span: "half", alt: { de: "Kundenstopper mit weiß-rotem Weihnachtsmotiv", en: "A-board with the white and red Christmas design" }, caption: { de: "Weihnachten, zweite Version", en: "Christmas, second version" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-08.webp", span: "half", alt: { de: "Zwei 2 Meter hohe Außenschilder mit der kompletten Speisekarte an der Fassade", en: "Two 2-metre exterior signs with the full menu on the facade" }, caption: { de: "Außenschilder 600 × 2000 mm", en: "Exterior signs 600 × 2000 mm" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/herzhaft/gallery-09.webp", span: "full", alt: { de: "Gutschein im A6-Format und Treuebonus-Karte, Vorder- und Rückseite", en: "A6 gift voucher and loyalty card, front and back" }, caption: { de: "Gutschein A6 und Treuebonus-Karte", en: "A6 gift voucher and loyalty card" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  mockups: true,
  featured: true,
  published: true,
  order: 10,
  backlog: [
    "Zeitraum/Datum bestätigen (Gutschein 04/2023, Speisekarte 2024, Weihnachts-Kundenstopper – welches Jahr?)",
    "Farbwerte (HEX) aus Dateien abgelesen – bei Bedarf mit Original-Styleguide abgleichen; Schrift der Wortmarke benennen?",
    "Fensterbeklebung: .ai ohne PDF-Ansicht gespeichert – Anordnung Wortmarke/Bildmarke nach eingebetteter Vorschau nachgebaut",
  ],
};

export default project;

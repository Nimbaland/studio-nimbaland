import type { PortfolioProject } from "./types";

// Aurum Herbs – Branding und Design System für die Website (Auftrag über die Olympia Apotheke).
// Quelle: Nimalans Kundenordner "Aurum Herbs" – Logo (Haupt- und Standortvarianten Wolfsburg,
// Gifhorn, Aue; farbig und weiß) und Farbpalette (10 Töne mit CMYK/HEX), Jan./Feb. 2025.
// Typo- und Größen-System (Jost, 8-px-Raster) als Website-Design-System ausgearbeitet.
// Rechnung und Nutzungsrechtsvertrag liegen im Ordner, werden aber nicht gezeigt.
const project: PortfolioProject = {
  slug: "aurum-herbs",
  title: "Aurum Herbs",
  tagline: { de: "Nature, made precise.", en: "Nature, made precise." },
  client: "Aurum Herbs · Olympia Apotheke",
  year: "2025",
  date: "2025-02",
  category: { de: ["Branding", "Design System"], en: ["Branding", "Design system"] },
  role: { de: ["Logo Design", "Brand Identity", "Design System"], en: ["Logo design", "Brand identity", "Design system"] },
  services: {
    de: ["Brand Identity", "Logo Design", "Web Design System"],
    en: ["Brand Identity", "Logo Design", "Web Design System"],
  },
  summary: {
    de: "Branding für Aurum Herbs mit Standortvarianten für Wolfsburg, Gifhorn und Aue – und ein Design System für die Website mit Farben, Schrift und Größen.",
    en: "Branding for Aurum Herbs with location variants for Wolfsburg, Gifhorn and Aue — and a website design system defining colour, type and sizes.",
  },
  approach: {
    de: "Das Zeichen ist eine Blüte aus Kräuterblättern: ein grüner Kern, umrahmt von klaren Konturen, daneben eine geometrische Wortmarke mit Tilde über dem Ã. Für jeden Standort gibt es eine eigene Variante, farbig und weiß. Die Palette verbindet Kraut, Gold und Nacht – von Lime Yellow und Khaki Green bis Midnight Blue und Digger's Gold.",
    en: "The mark is a blossom of herb leaves: a green core framed by clean outlines, next to a geometric wordmark with a tilde over the Ã. Each location has its own variant, in colour and white. The palette combines herb, gold and night — from lime yellow and khaki green to midnight blue and digger's gold.",
  },
  solution: {
    de: "Für die Website wurde daraus ein Design System: Midnight Blue als Primärfarbe für Flächen und Text, Lime Yellow als Akzent für Buttons und Links, Gold für Highlights. Jost als geometrische Grotesk nah an der Wortmarke, eine Typo-Skala von 56 bis 12 px und ein 8-px-Raster für Abstände, Container und Komponenten.",
    en: "For the website this became a design system: midnight blue as the primary colour for surfaces and text, lime yellow as the accent for buttons and links, gold for highlights. Jost as a geometric sans close to the wordmark, a type scale from 56 to 12 px and an 8 px grid for spacing, containers and components.",
  },
  coverImage: {
    src: "/projects/aurum-herbs/cover.webp",
    alt: { de: "Aurum-Herbs-Logo in Weiß auf Midnight Blue", en: "Aurum Herbs logo in white on midnight blue" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/aurum-herbs/logos.webp", span: "full", alt: { de: "Hauptlogo und Standortvarianten Wolfsburg, Gifhorn und Aue", en: "Main logo and location variants Wolfsburg, Gifhorn and Aue" }, caption: { de: "Logo und Standortvarianten", en: "Logo and location variants" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/aurum-herbs/colors.webp", span: "full", alt: { de: "Farbpalette mit zehn Tönen, HEX- und CMYK-Werten und Farbrollen", en: "Colour palette with ten tones, HEX and CMYK values and colour roles" }, caption: { de: "Design System · Farbe", en: "Design system · colour" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/aurum-herbs/type.webp", span: "full", alt: { de: "Typo-Skala in Jost sowie Größen, Abstände und Buttons", en: "Type scale in Jost plus sizes, spacing and buttons" }, caption: { de: "Design System · Schrift und Größen", en: "Design system · type and sizes" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/aurum-herbs/web.webp", span: "full", alt: { de: "Anwendungsbeispiel des Design Systems als Startseite im Browser", en: "Design system applied to an example homepage in a browser" }, caption: { de: "Anwendungsbeispiel Website", en: "Website example" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 5,
  backlog: ["Schrift der Website bestätigen (vorgeschlagen: Jost)", "Live-URL, falls die Website online ist"],
};

export default project;

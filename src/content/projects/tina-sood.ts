import type { PortfolioProject } from "./types";

// Branding + Website für die Praxis Tina Sood · Ganzheitliche Ergotherapie, Düsseldorf.
// Quelle: Nimalans Angaben (Logo, Geschäftsausstattung, Website-Konzept, Webdesign,
// Projektleitung zwischen Kundin und Entwicklung) und die Live-Website.
const project: PortfolioProject = {
  slug: "tina-sood",
  title: "Tina Sood Ergotherapie",
  tagline: { de: "Making care feel close.", en: "Making care feel close." },
  client: "Tina Sood · Ganzheitliche Ergotherapie",
  year: "2026",
  date: "2026-06",
  liveUrl: "https://ergotherapie-sood.de/",
  category: { de: ["Branding", "Website"], en: ["Branding", "Website"] },
  role: {
    de: ["Brand Design", "Webdesign", "Projektleitung"],
    en: ["Brand design", "Web design", "Project management"],
  },
  services: {
    de: ["Brand Identity", "Web Design", "Project Management"],
    en: ["Brand Identity", "Web Design", "Project Management"],
  },
  summary: {
    de: "Markenauftritt und Website für eine Praxis für ganzheitliche Ergotherapie in Düsseldorf – vom Logo über die Geschäftsausstattung bis zur fertigen Website.",
    en: "Brand identity and website for a holistic occupational therapy practice in Düsseldorf — from logo and stationery to the finished website.",
  },
  approach: {
    de: "Nach Logo und Visitenkarten folgte das Website-Konzept. Im Webprojekt habe ich das Design verantwortet und zwischen der Praxis und der Entwicklung koordiniert.",
    en: "Logo and business cards were followed by the website concept. On the web project, I led the design and coordinated between the practice and development.",
  },
  solution: {
    de: "Eine klar gegliederte One-Page-Website, die Leistungen für Kinder, Erwachsene und ältere Menschen, Therapieformen und den Ablauf verständlich erklärt – mit direktem Weg zur Terminanfrage.",
    en: "A clearly structured one-page website that explains services for children, adults and older people, therapy formats and the process — with a direct path to booking an appointment.",
  },
  coverImage: {
    src: "/projects/tina-sood/cover.webp",
    alt: { de: "Signet von Tina Sood Ganzheitliche Ergotherapie in Blau auf Apricot", en: "Tina Sood holistic occupational therapy mark in blue on apricot" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/tina-sood/gallery-01.webp", alt: { de: "Visitenkarte in Apricot, Vorder- und Rückseite", en: "Apricot business card, front and back" }, caption: { de: "Visitenkarte", en: "Business card" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tina-sood/gallery-02.webp", alt: { de: "Visitenkarten in Blau und Apricot, jeweils Vorder- und Rückseite", en: "Business cards in blue and apricot, front and back" }, caption: { de: "Zwei Farbwelten", en: "Two colourways" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tina-sood/gallery-03.webp", alt: { de: "Startseite der Website auf Desktop und Smartphone", en: "Website homepage on desktop and smartphone" }, caption: { de: "Website, Startseite", en: "Website, homepage" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/tina-sood/gallery-04.webp", alt: { de: "Website-Sektion Behandlungsmöglichkeiten mit vier Karten", en: "Website section on treatment options with four cards" }, caption: { de: "Website, Behandlungsmöglichkeiten", en: "Website, treatment options" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 8,
  backlog: ["Website-Bilder zeigen den Design-Stand mit Bild-Platzhalter im Hero (Praxisfoto fehlt)"],
};

export default project;

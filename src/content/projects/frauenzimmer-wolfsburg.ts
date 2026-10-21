import type { PortfolioProject } from "./types";

// Frauen-Zimmer Wolfsburg – Redesign-Prototyp der Website und Logo-Redesign
// für das Frauenzentrum Frauen-Zimmer (Goethestraße 12, Wolfsburg, seit 1979).
// Quelle: Claude-Design-Export "Frauen-Zimmer-Webseite" (Start + Marke), Screenshots 1440 px.
// Hinweis: Fotos sind im Prototyp noch Platzhalter.
const project: PortfolioProject = {
  slug: "frauenzimmer-wolfsburg",
  title: "Frauen-Zimmer Wolfsburg",
  tagline: { de: "A protected space for all women.", en: "A protected space for all women." },
  client: "Frauenzentrum Frauen-Zimmer, Wolfsburg",
  year: "2026",
  date: "2026-10",
  category: { de: ["Web Design", "Logo-Redesign", "Non-Profit"], en: ["Web design", "Logo redesign", "Non-profit"] },
  role: { de: ["Web Design", "UX/UI", "Logo-Redesign"], en: ["Web design", "UX/UI", "Logo redesign"] },
  services: {
    de: ["Web Design", "UX/UI", "Brand Identity"],
    en: ["Web Design", "UX/UI", "Brand Identity"],
  },
  summary: {
    de: "Redesign der Website und des Logos für das Frauen-Zimmer in Wolfsburg – eine kostenlose, niedrigschwellige Anlaufstelle für Frauen jeden Alters und aller Kulturen, seit 1979 in der Goethestraße 12.",
    en: "Website and logo redesign for Frauen-Zimmer in Wolfsburg — a free, low-threshold drop-in centre for women of all ages and cultures, at Goethestraße 12 since 1979.",
  },
  challenge: {
    de: "Wer hier Hilfe sucht, ist oft unter Druck. Die Seite muss in Sekunden zeigen, wie man ankommt – kostenlos, vertraulich, ohne Anmeldung – und zugleich die Vielfalt aus über 20 Gruppen, Beratung und Treffs zeigen.",
    en: "People looking for help here are often under pressure. The site has to show within seconds how to get in touch — free, confidential, no sign-up — while also presenting more than 20 groups, counselling and meet-ups.",
  },
  approach: {
    de: "Ein warmer, ruhiger Auftritt in Sand, Blau und Pink: oben das klare Versprechen „Ein geschützter Raum für alle Frauen“, direkt daneben die Telefonnummer und ein „Schnell verlassen“-Button für Sicherheit. Drei Wege zum Ankommen, vier Bereiche für die Gruppen, Stimmen aus dem Haus. Im Logo bleibt das Frauenzeichen, darunter legt sich ein Bogen als Geste des Haltens – er fängt das Zeichen auf und öffnet sich nach rechts.",
    en: "A warm, calm look in sand, blue and pink: at the top the clear promise “A protected space for all women”, right next to it the phone number and a “quick exit” button for safety. Three ways to get in touch, four areas for the groups, voices from the house. The logo keeps the female symbol, with an arc beneath it as a gesture of holding — it catches the symbol and opens to the right.",
  },
  coverImage: {
    src: "/projects/frauenzimmer-wolfsburg/cover.webp",
    alt: { de: "Startseite des Frauen-Zimmer-Redesigns im Browser", en: "Frauen-Zimmer redesign homepage in a browser" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/frauenzimmer-wolfsburg/gallery-01.webp", span: "full", alt: { de: "Die komplette Startseite in zwei Browserfenstern", en: "The complete homepage in two browser windows" }, caption: { de: "Startseite komplett", en: "Full homepage" }, aspect: "16/10", width: 2400, height: 1500 },
    { src: "/projects/frauenzimmer-wolfsburg/gallery-02.webp", span: "full", alt: { de: "Sektionen: Drei Wege zum Ankommen und vier Bereiche mit über 20 Gruppen", en: "Sections: three ways to get in touch and four areas with over 20 groups" }, caption: { de: "Angebote und Gruppen", en: "Services and groups" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/frauenzimmer-wolfsburg/gallery-03.webp", span: "full", alt: { de: "Logo-Redesign mit Varianten und Anwendungen: App-Icon, Visitenkarte, Türschild", en: "Logo redesign with variants and applications: app icon, card, door sign" }, caption: { de: "Logo-Redesign", en: "Logo redesign" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 2,
  backlog: ["Datum/Jahr bestätigen", "Auftrag oder freies Redesign-Konzept?", "Echte Fotos statt Platzhalter im Prototyp", "Live-URL falls umgesetzt"],
};

export default project;

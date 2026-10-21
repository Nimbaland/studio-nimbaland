import type { PortfolioProject } from "./types";

// Waiturn – Landingpage für ein digitales Wartelisten-System für Barbershops.
// Quelle: Screen-Design aus Claude Design ("Waiturn Landing"), Screenshots Desktop.
// Offen: Kunde oder eigenes Produkt? Jahr, genaue Rolle, Live-URL.
// Hinweis: Die mobile Navigation im Design bricht noch um – daher keine Mobil-Screens.
const project: PortfolioProject = {
  slug: "waiturn",
  title: "Waiturn",
  tagline: { de: "Order for the waiting room.", en: "Order for the waiting room." },
  date: "2026-01",
  category: { de: ["Digital", "Landingpage"], en: ["Digital", "Landing page"] },
  role: { de: ["Screen Design", "UX/UI"], en: ["Screen design", "UX/UI"] },
  services: {
    de: ["Digital Design", "UX/UI", "Landing Page"],
    en: ["Digital Design", "UX/UI", "Landing Page"],
  },
  summary: {
    de: "Screen Design der Landingpage für Waiturn, ein digitales Wartelisten-System für Barbershops: Kundinnen und Kunden kommen per Link oder QR-Code in die Warteschlange, das Team sieht sofort, wer als Nächstes drankommt.",
    en: "Screen design of the landing page for Waiturn, a digital waitlist system for barbershops: customers join the queue via link or QR code, and the team instantly sees who is next.",
  },
  approach: {
    de: "Die Seite erklärt das Produkt über den Alltag im Laden statt über Funktionen: ein klares Versprechen im Hero, daneben das Panel, wie es das Team am Tresen sieht. Ein Vorher-Nachher-Vergleich zeigt, was sich ändert – weniger WhatsApp-Rückfragen, keine Warteschlange nach Gefühl. Kräftiges Orange für Aktionen, ruhiges Navy und viel Weißraum für Vertrauen.",
    en: "The page explains the product through everyday shop life rather than features: a clear promise in the hero, next to the panel as the team sees it at the counter. A before-and-after comparison shows what changes — fewer WhatsApp questions, no queue by gut feeling. Bold orange for actions, calm navy and plenty of white space for trust.",
  },
  coverImage: {
    src: "/projects/waiturn/cover.webp",
    alt: { de: "Startseite der Waiturn-Landingpage im Browser", en: "Waiturn landing page homepage in a browser" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/waiturn/gallery-01.webp", alt: { de: "Sektion Vorher und Nachher: Ohne Waiturn und Mit Waiturn", en: "Before and after section: without and with Waiturn" }, caption: { de: "Vorher und Nachher", en: "Before and after" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/waiturn/gallery-02.webp", alt: { de: "Panel-Ansicht mit nächstem Kunden und aktuellem Betrieb", en: "Panel view with next customer and current status" }, caption: { de: "Das Panel für das Team", en: "The team panel" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: false,
  published: false,
  order: 12,
  backlog: ["Kunde oder eigenes Produkt?", "Jahr", "Rolle bestätigen", "Live-URL falls online", "Mobile Navigation im Design korrigieren (bricht um)"],
};

export default project;

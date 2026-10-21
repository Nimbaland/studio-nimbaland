import type { PortfolioProject } from "./types";

// Bales Smart Home Services (2026). Quelle: Projektordner "Bales Smart Home"
// (Logo, Kampagnenkonzept, Instagram-Content-Serie).
// Karussells laut Nimalan (21.10.2026): „Smart vs. Normal“ (6) und „Ein Tag“ (8); Wärmepumpen-Post entfernt (falsch).
const project: PortfolioProject = {
  slug: "bales-smart-home",
  title: "Bales Smart Home Services",
  tagline: { de: "Making smart living feel intuitive.", en: "Making smart living feel intuitive." },
  client: "Bales Smart Home Services",
  year: "2026",
  date: "2026-03",
  category: { de: ["Corporate Identity", "Kampagne", "Social Media"], en: ["Corporate identity", "Campaign", "Social media"] },
  role: { de: ["Brand Identity", "Kampagnenkonzept", "Art Direction"], en: ["Brand identity", "Campaign concept", "Art direction"] },
  services: {
    de: ["Brand Identity", "Art Direction", "Digital Design"],
    en: ["Brand Identity", "Art Direction", "Digital Design"],
  },
  summary: {
    de: "Eine Markenidentität für intelligente Wohnlösungen – klar, zeitgemäß und auf digitale Anwendungen ausgerichtet.",
    en: "A brand identity for smart living solutions — clear, contemporary and built for digital applications.",
  },
  challenge: {
    de: "Ein regionaler Smart-Home-Dienstleister in der Region Hannover sollte bekannter werden und daraus persönliche Beratungsanfragen gewinnen.",
    en: "A regional smart home service provider in the Hannover area needed more visibility and, from it, personal consultation requests.",
  },
  approach: {
    de: "Ausgehend vom Logo – Wortmarke mit Haus und Signalwellen – entstand ein Kampagnenkonzept in sieben Schritten: Ziel und KPIs, Personas, Kernbotschaft „Ein Zuhause, das mitdenkt.“, Visual Identity (premium, minimal, editorial), Kanal-Mix aus Instagram, Meta Ads und Google Business, Content-Plan und Messbarkeit.",
    en: "Starting from the logo — a wordmark with a house and signal waves — a seven-step campaign concept followed: goals and KPIs, personas, the core message “A home that thinks ahead”, visual identity (premium, minimal, editorial), a channel mix of Instagram, Meta Ads and Google Business, a content plan and measurement.",
  },
  solution: {
    de: "Instagram-Karussells, die Smart Home über Alltagsmomente erklären: „Smart vs. Normal“ stellt zwei identische Häuser gegenüber, „Ein Tag“ begleitet einen Tag von 06:30 bis 23:00, an dem kein Schalter berührt wird. Jede Serie endet mit einer Frage an die Community.",
    en: "Instagram carousels that explain smart home through everyday moments: “Smart vs. normal” compares two identical houses, “One day” follows a day from 06:30 to 23:00 without touching a switch. Each series ends with a question to the community.",
  },
  coverImage: {
    src: "/projects/bales-smart-home/cover.webp",
    alt: { de: "Logo von Bales Smart Home", en: "Bales Smart Home logo" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/bales-smart-home/gallery-01.webp", alt: { de: "Titelfolie des Kampagnenkonzepts", en: "Title slide of the campaign concept" }, caption: { de: "Kampagnenkonzept", en: "Campaign concept" }, aspect: "16/9", width: 2401, height: 1350 },
    { src: "/projects/bales-smart-home/gallery-02.webp", alt: { de: "Ziele der Kampagne: Impressions, Follower, Beratungsanfragen", en: "Campaign goals: impressions, followers, consultation requests" }, caption: { de: "Ziel und KPIs", en: "Goals and KPIs" }, aspect: "16/9", width: 2401, height: 1350 },
    { src: "/projects/bales-smart-home/gallery-03.webp", alt: { de: "Visual Identity: Farben, Typografie, Bildsprache", en: "Visual identity: colours, typography, imagery" }, caption: { de: "Visual Identity", en: "Visual identity" }, aspect: "16/9", width: 2401, height: 1350 },
    { src: "/projects/bales-smart-home/gallery-04.webp", alt: { de: "Kanal-Mix: Instagram, Meta Ads, Google Business", en: "Channel mix: Instagram, Meta Ads, Google Business" }, caption: { de: "Kanäle", en: "Channels" }, aspect: "16/9", width: 2401, height: 1350 },
    { src: "/projects/bales-smart-home/carousel-smart-vs-normal.webp", span: "full", alt: { de: "Karussell-Post „Smart vs. Normal“ im Smartphone-Mockup, daneben alle sechs Slides", en: "Carousel post “Smart vs. normal” in a smartphone mockup, next to all six slides" }, caption: { de: "Instagram-Karussell · Smart vs. Normal", en: "Instagram carousel · Smart vs. normal" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/bales-smart-home/carousel-ein-tag.webp", span: "full", alt: { de: "Karussell-Post „Ein Tag“ im Smartphone-Mockup, daneben alle acht Slides", en: "Carousel post “One day” in a smartphone mockup, next to all eight slides" }, caption: { de: "Instagram-Karussell · Ein Tag", en: "Instagram carousel · One day" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 3,
  backlog: ["Schreibweise im Logo prüfen („Smar t Home“)"],
};

export default project;

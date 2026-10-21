import type { PortfolioProject } from "./types";

// Bales Smart Home Services (2026). Quelle: Projektordner "Bales Smart Home"
// (Logo, Kampagnenkonzept, Instagram-Content-Serie).
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
    de: "Eine Instagram-Content-Serie aus Karussell-Posts, die Smart Home über Alltagsmomente erklärt – vom kalten Morgen bis zum Abend, an dem kein Schalter mehr gesucht wird.",
    en: "An Instagram content series of carousel posts that explains smart home through everyday moments — from a cold morning to an evening without hunting for a switch.",
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
    { src: "/projects/bales-smart-home/gallery-05.webp", alt: { de: "Acht Slides aus der Instagram-Content-Serie", en: "Eight slides from the Instagram content series" }, caption: { de: "Instagram-Content-Serie", en: "Instagram content series" }, aspect: "2288/1444", width: 2288, height: 1444 },
  ],
  featured: true,
  published: true,
  order: 3,
  backlog: ["Schreibweise im Logo prüfen („Smar t Home“)"],
};

export default project;

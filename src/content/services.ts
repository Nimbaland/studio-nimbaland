import type { Localized } from "@/i18n/config";

/**
 * Leistungen – finale Texte von Nimalan (20.10.2026).
 * `homeTitle` / `homeSummary`: Startseite ("What I Do / 02")
 * `title` / `description` / `deliverables`: Services-Seite
 */
export type Service = {
  id: string;
  homeTitle: Localized;
  title: Localized;
  homeSummary: Localized;
  description: Localized;
  /** Englische Bezeichnungen dienen zugleich als Schlüssel für `proof`. */
  deliverables: string[];
  /** Deutsche Bezeichnungen, gleiche Reihenfolge wie `deliverables`. */
  deliverablesDe: string[];
  /** Stichworte: Das neueste veröffentlichte Projekt, dessen Leistungen dazu passen, wird als Beispiel gezeigt. */
  match?: RegExp;
  /** Schwerpunkt: wird hervorgehoben und steht oben. */
  featured?: boolean;
  /** Leistung → Projekt-Slug, das diese Leistung am besten zeigt (verlinkt in der Liste). */
  proof?: Record<string, string>;
};

export const services: Service[] = [
  {
    id: "ai-visual-engineering",
    proof: { "AI Visual Concepts": "lumiq", "Generative Imagery": "welcome-to-nimbaland", "AI-assisted Creative Workflows": "lumiq", "Visual Prototyping": "welcome-to-nimbaland" },
    featured: true,
    homeTitle: { de: "KI-gestützte Bildwelten", en: "AI-Powered Visuals" },
    title: { de: "KI-gestützte Bildwelten", en: "AI-Powered Visuals" },
    homeSummary: {
      de: "Generative KI als Werkzeug für neue Bildwelten, visuelle Konzepte und schnellere Abläufe – immer mit einer klaren gestalterischen Idee.",
      en: "Generative AI as an extension of creative possibilities. For new imagery, visual concepts and efficient creative processes — always driven by a clear design idea.",
    },
    description: {
      de: "Mit generativer KI entstehen Bildwelten schneller und in mehr Varianten. Ich verbinde sie mit Art Direction und einem klaren Anspruch an Bildqualität – entschieden wird am Ende mit dir, nicht von der Maschine.",
      en: "Generative AI makes it possible to explore visuals faster and in more variations. I combine it with art direction and a high bar for image quality – the final call is made with you, not by the machine.",
    },
    deliverables: ["AI Visual Concepts", "Generative Imagery", "AI-assisted Creative Workflows", "Visual Prototyping"],
    deliverablesDe: ["KI-Bildkonzepte", "Generierte Bildwelten", "KI-gestützte Arbeitsabläufe", "Visuelle Prototypen"],
    match: /\bai\b|ki-|generative|visual engineering/i,
  },
  {
    id: "brand-strategy-identity",
    proof: { "Brand Strategy": "tervica", "Visual Identity": "circle-up", "Rebranding": "tervica", "Corporate Design": "mkg-koeln-west", "Design Systems": "aurum-herbs", "Brand Guidelines": "aurum-herbs" },
    homeTitle: { de: "Markenstrategie & Markenauftritt", en: "Brand Strategy & Identity" },
    title: { de: "Markenstrategie & Markenauftritt", en: "Brand Strategy & Identity" },
    homeSummary: {
      de: "Markenpositionierung, visuelle Identitäten, Rebranding und Designsysteme. Von der strategischen Grundlage bis zum konsistenten Markenauftritt.",
      en: "Brand positioning, visual identities, rebranding and design systems. From the strategic foundation to a consistent brand presence.",
    },
    description: {
      de: "Eine starke Marke braucht mehr als ein gutes Logo. Ich entwickle Positionierungen, visuelle Identitäten und Designsysteme, die Wiedererkennung schaffen und langfristig funktionieren.",
      en: "A strong brand needs more than a good logo. I develop positioning, visual identities and design systems that build recognition and work for the long term.",
    },
    deliverables: ["Brand Strategy", "Visual Identity", "Rebranding", "Corporate Design", "Design Systems", "Brand Guidelines"],
    deliverablesDe: ["Markenstrategie", "Visuelle Identität", "Rebranding", "Corporate Design", "Designsysteme", "Markenrichtlinien"],
    match: /brand|identity|identität|logo|rebrand/i,
  },
  {
    id: "creative-art-direction",
    proof: { "Creative Concepts": "circle-up", "Art Direction": "bales-smart-home", "Campaign Visuals": "lumiq", "Editorial Design": "the-grid-bar", "Visual Storytelling": "welcome-to-nimbaland" },
    homeTitle: { de: "Konzept & Art Direction", en: "Creative & Art Direction" },
    title: { de: "Konzept & Art Direction", en: "Creative & Art Direction" },
    homeSummary: {
      de: "Konzepte, Kampagnen und Bildwelten, die eine Idee klar auf den Punkt bringen.",
      en: "Creative concepts, campaigns and visual worlds that get an idea across clearly.",
    },
    description: {
      de: "Ich übersetze Ideen in visuelle Konzepte mit einer klaren Haltung. Von der kreativen Leitidee bis zur konsequenten Ausarbeitung über verschiedene Medien hinweg.",
      en: "I translate ideas into visual concepts with a clear point of view. From the guiding creative idea to consistent execution across media.",
    },
    deliverables: ["Creative Concepts", "Art Direction", "Campaign Visuals", "Editorial Design", "Visual Storytelling"],
    deliverablesDe: ["Kreativkonzepte", "Art Direction", "Kampagnenmotive", "Editorial Design", "Visuelles Storytelling"],
    match: /art direction|creative|editorial|campaign|kampagne/i,
  },
  {
    id: "digital-design-ux-ui",
    proof: { "Web Design": "tina-sood", "UX/UI Design": "flamingo-swift", "Digital Experiences": "frauenzimmer-wolfsburg", "Prototyping": "flamingo-swift", "Responsive Design": "frauenzimmer-wolfsburg" },
    homeTitle: { de: "Websites & UX/UI", en: "Websites & UX/UI" },
    title: { de: "Websites & UX/UI", en: "Websites & UX/UI" },
    homeSummary: {
      de: "Websites, digitale Produkte und UX/UI Design, bei denen Ästhetik, Nutzererlebnis und Funktion zusammenspielen.",
      en: "Websites, digital products and UX/UI design where aesthetics, user experience and function work together.",
    },
    description: {
      de: "Eine Website muss verständlich sein, funktionieren und gut aussehen. Ich gestalte Websites und Oberflächen, die deine Marke zeigen und für die Menschen funktionieren, die sie nutzen.",
      en: "A website has to be clear, work well and look good. I design websites and interfaces that show your brand and work for the people using them.",
    },
    deliverables: ["Web Design", "UX/UI Design", "Digital Experiences", "Prototyping", "Responsive Design"],
    deliverablesDe: ["Webdesign", "UX/UI Design", "Digitale Auftritte", "Prototyping", "Responsive Design"],
    match: /web|ux|ui design|digital|app/i,
  },
];

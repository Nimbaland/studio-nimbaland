import type { Localized } from "@/i18n/config";

/**
 * Leistungen – finale Texte von Nimalan (20.10.2026).
 * `homeTitle` / `homeSummary`: Startseite ("What I Do / 02")
 * `title` / `description` / `deliverables`: Services-Seite
 */
export type Service = {
  id: string;
  homeTitle: string;
  title: string;
  homeSummary: Localized;
  description: Localized;
  deliverables: string[];
  /** Stichworte: Das neueste veröffentlichte Projekt, dessen Leistungen dazu passen, wird als Beispiel gezeigt. */
  match?: RegExp;
};

export const services: Service[] = [
  {
    id: "brand-strategy-identity",
    homeTitle: "Brand Strategy & Identity",
    title: "Brand Strategy & Identity",
    homeSummary: {
      de: "Markenpositionierung, visuelle Identitäten, Rebranding und Designsysteme. Von der strategischen Grundlage bis zum konsistenten Markenauftritt.",
      en: "Brand positioning, visual identities, rebranding and design systems. From the strategic foundation to a consistent brand presence.",
    },
    description: {
      de: "Eine starke Marke braucht mehr als ein gutes Logo. Ich entwickle Positionierungen, visuelle Identitäten und Designsysteme, die Wiedererkennung schaffen und langfristig funktionieren.",
      en: "A strong brand needs more than a good logo. I develop positioning, visual identities and design systems that build recognition and work for the long term.",
    },
    deliverables: ["Brand Strategy", "Visual Identity", "Rebranding", "Corporate Design", "Design Systems", "Brand Guidelines"],
    match: /brand|identity|identität|logo|rebrand/i,
  },
  {
    id: "creative-art-direction",
    homeTitle: "Creative & Art Direction",
    title: "Creative & Art Direction",
    homeSummary: {
      de: "Kreative Konzepte, Kampagnen und visuelle Welten, die eine Idee konsequent auf den Punkt bringen.",
      en: "Creative concepts, campaigns and visual worlds that bring an idea consistently to the point.",
    },
    description: {
      de: "Ich übersetze Ideen in visuelle Konzepte mit einer klaren Haltung. Von der kreativen Leitidee bis zur konsequenten Ausarbeitung über verschiedene Medien hinweg.",
      en: "I translate ideas into visual concepts with a clear point of view. From the guiding creative idea to consistent execution across media.",
    },
    deliverables: ["Creative Concepts", "Art Direction", "Campaign Visuals", "Editorial Design", "Visual Storytelling"],
    match: /art direction|creative|editorial|campaign|kampagne/i,
  },
  {
    id: "digital-design-ux-ui",
    homeTitle: "Digital Experiences",
    title: "Digital Design & UX/UI",
    homeSummary: {
      de: "Websites, digitale Produkte und UX/UI Design, bei denen Ästhetik, Nutzererlebnis und Funktion zusammenspielen.",
      en: "Websites, digital products and UX/UI design where aesthetics, user experience and function work together.",
    },
    description: {
      de: "Digitale Erlebnisse müssen verständlich, funktional und visuell überzeugend sein. Ich gestalte Websites und Interfaces, die Markenidentität und Nutzerbedürfnisse miteinander verbinden.",
      en: "Digital experiences need to be clear, functional and visually convincing. I design websites and interfaces that connect brand identity with user needs.",
    },
    deliverables: ["Web Design", "UX/UI Design", "Digital Experiences", "Prototyping", "Responsive Design"],
    match: /web|ux|ui design|digital|app/i,
  },
  {
    id: "ai-visual-engineering",
    homeTitle: "AI Visual Engineering",
    title: "AI Visual Engineering",
    homeSummary: {
      de: "Generative KI als Erweiterung kreativer Möglichkeiten. Für neue Bildwelten, visuelle Konzepte und effiziente kreative Prozesse – immer mit einer klaren gestalterischen Idee.",
      en: "Generative AI as an extension of creative possibilities. For new imagery, visual concepts and efficient creative processes — always driven by a clear design idea.",
    },
    description: {
      de: "Neue Technologien eröffnen neue kreative Möglichkeiten. Ich verbinde generative KI mit Art Direction, Designverständnis und einem bewussten Umgang mit visueller Qualität.",
      en: "New technologies open up new creative possibilities. I combine generative AI with art direction, design understanding and a deliberate approach to visual quality.",
    },
    deliverables: ["AI Visual Concepts", "Generative Imagery", "AI-assisted Creative Workflows", "Visual Prototyping"],
    match: /\bai\b|ki-|generative|visual engineering/i,
  },
];

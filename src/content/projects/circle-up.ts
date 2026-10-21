import type { PortfolioProject } from "./types";

// Circle Up – Logo, Konzeption und Investoren-Pitch-Deck für eine Sport-Community-App (2025).
// Umfang laut Nimalan: Logo Design, Konzeption, Pitch Deck für Investoren.
// Quelle: Logo-Dateien (5 Varianten) und "Circle Up – Präsentation – Final (überarbeitet).pptx".
// App-Screens stammen aus dem Pitch Deck; Team-Fotos werden nicht gezeigt.
const project: PortfolioProject = {
  slug: "circle-up",
  title: "Circle Up",
  tagline: { de: "Train. Connect. Succeed.", en: "Train. Connect. Succeed." },
  client: "Circle Up",
  year: "2025",
  date: "2025-12",
  category: { de: ["Branding", "Konzept", "Pitch"], en: ["Branding", "Concept", "Pitch"] },
  role: { de: ["Logo Design", "Konzeption", "Pitch Deck"], en: ["Logo design", "Concept", "Pitch deck"] },
  services: {
    de: ["Brand Identity", "Concept", "Pitch Design"],
    en: ["Brand Identity", "Concept", "Pitch Design"],
  },
  summary: {
    de: "Logo, Konzeption und Investoren-Pitch-Deck für Circle Up – eine App, die Menschen mit gleichen Trainingsgewohnheiten und Zielen verbindet: für mehr gemeinsame Motivation, Flexibilität und echte Community.",
    en: "Logo, concept and investor pitch deck for Circle Up — an app that connects people with the same training habits and goals: for more shared motivation, flexibility and real community.",
  },
  challenge: {
    de: "Sport wird immer flexibler, aber auch einsamer: Feste Vereinsstrukturen passen nicht mehr zum Alltag, digitale Angebote ersetzen keine echte Begegnung. Wer viel arbeitet und reist, trainiert oft allein.",
    en: "Sport is becoming more flexible but also lonelier: fixed club structures no longer fit everyday life, and digital offers don't replace real encounters. People who work and travel a lot often train alone.",
  },
  approach: {
    de: "Das Zeichen ist ein offener Kreis, der sich zum „Q“ schließt – Bewegung, Runde und Gemeinschaft in einer Linie, in Neon-Gelb auf Schwarz. Das Pitch Deck führt Investoren von Vision und Problem über Marktvalidierung, Lösung und Monetarisierung bis zu Go-to-Market und Team – mit Schwarz-Weiß-Fotografie und dem Neon-Gelb als Signalfarbe.",
    en: "The mark is an open circle that closes into a “Q” — movement, lap and community in one line, in neon yellow on black. The pitch deck guides investors from vision and problem through market validation, solution and monetisation to go-to-market and team — with black-and-white photography and neon yellow as the signal colour.",
  },
  coverImage: {
    src: "/projects/circle-up/cover.webp",
    alt: { de: "Circle-Up-Logo in Neon-Gelb neben drei App-Screens", en: "Circle Up logo in neon yellow next to three app screens" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/circle-up/gallery-01.webp", alt: { de: "Vier Logo-Varianten auf Schwarz, Neon-Gelb und Grau", en: "Four logo variants on black, neon yellow and grey" }, caption: { de: "Logo-Varianten", en: "Logo variants" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/gallery-02.webp", alt: { de: "Titelfolie des Investoren-Pitch-Decks", en: "Title slide of the investor pitch deck" }, caption: { de: "Pitch Deck für Investoren", en: "Investor pitch deck" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/gallery-03.webp", alt: { de: "Drei App-Screens: Profil, Running Club, Trainingspartner", en: "Three app screens: profile, running club, training partners" }, caption: { de: "App-Screens aus dem Pitch Deck", en: "App screens from the pitch deck" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 4,
  backlog: [],
};

export default project;

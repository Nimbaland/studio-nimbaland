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
  story: {
    challenge: { de: "Sport wird flexibler, aber einsamer. Wer viel arbeitet und reist, trainiert oft allein.", en: "Sport is getting more flexible, but lonelier. People who work and travel a lot often train alone." },
    idea: { de: "Ein offener Kreis, der sich zum „Q“ schließt: Bewegung, Runde, Gemeinschaft.", en: "An open circle that closes into a “Q”: movement, lap, community." },
    decision: { de: "Neon-Gelb auf Schwarz-Weiß-Fotografie – vom Logo über Instagram bis zum Investoren-Pitch.", en: "Neon yellow on black-and-white photography – from the logo to Instagram to the investor pitch." },
  },
  coverImage: {
    src: "/projects/circle-up/cover.webp",
    alt: { de: "Titelfolie des Pitch Decks: Läufergruppe in Schwarz-Weiß mit Circle-Up-Logo in Neon-Gelb", en: "Pitch deck cover: group of runners in black and white with the Circle Up logo in neon yellow" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/circle-up/neon.webp", span: "full", alt: { de: "Circle-Up-Logo als Neon-Schriftzug auf Betonwand", en: "Circle Up logo as a neon sign on a concrete wall" }, caption: { de: "Logo-Mockup · Neon", en: "Logo mockup · neon" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/cards.webp", span: "full", alt: { de: "Karten und Sticker mit dem Circle-Up-Logo in Schwarz, Neon-Gelb und Weiß", en: "Cards and stickers with the Circle Up logo in black, neon yellow and white" }, caption: { de: "Logo-Mockup · Karten und Sticker", en: "Logo mockup · cards and stickers" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/gallery-01.webp", span: "half", alt: { de: "Vier Logo-Varianten auf Schwarz, Neon-Gelb und Grau", en: "Four logo variants on black, neon yellow and grey" }, caption: { de: "Logo-Varianten", en: "Logo variants" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/gallery-03.webp", span: "half", alt: { de: "Drei App-Screens: Profil, Running Club, Trainingspartner", en: "Three app screens: profile, running club, training partners" }, caption: { de: "App-Screens aus dem Pitch Deck", en: "App screens from the pitch deck" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/instagram-phones.webp", span: "full", alt: { de: "Instagram-Story-Vorlagen von Circle Up auf drei Smartphones", en: "Circle Up Instagram story templates on three smartphones" }, caption: { de: "Instagram-Vorlagen · Mockup", en: "Instagram templates · mockup" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/instagram-stories-poster.webp", video: "/projects/circle-up/instagram-stories.mp4", span: "half", alt: { de: "Video: alle Story-Vorlagen laufen nacheinander auf einem Smartphone durch", en: "Video: all story templates play one after another on a smartphone" }, caption: { de: "Instagram-Stories · Video", en: "Instagram stories · video" }, aspect: "16/9", width: 1600, height: 900 },
    { src: "/projects/circle-up/instagram-grid.webp", span: "half", alt: { de: "Übersicht aller 14 Story-Vorlagen: verschiedene Sportarten in Schwarz-Weiß mit Logo in Neon-Gelb, Weiß oder Schwarz", en: "Overview of all 14 story templates: different sports in black and white with the logo in neon yellow, white or black" }, caption: { de: "14 Story-Vorlagen", en: "14 story templates" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/circle-up/pitch-deck-poster.webp", video: "/projects/circle-up/pitch-deck.mp4", span: "full", alt: { de: "Video: das Investoren-Pitch-Deck Folie für Folie auf einem Laptop", en: "Video: the investor pitch deck slide by slide on a laptop" }, caption: { de: "Pitch Deck für Investoren · Video", en: "Investor pitch deck · video" }, aspect: "16/9", width: 1600, height: 900 },
  ],
  featured: true,
  published: true,
  order: 4,
  backlog: [],
};

export default project;

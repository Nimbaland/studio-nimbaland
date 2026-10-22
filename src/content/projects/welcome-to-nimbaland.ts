import type { PortfolioProject } from "./types";

// „Welcome to Nimbaland“ – KI-generiertes Musikvideo, eigenes Projekt (Mai–Juni 2026).
// Quelle: Nimalans Ordner „Nimbaland Music Video“ (Clips aus Magnific, u. a. Kling und Seedance,
// Song „Nimbaland – Welcome to Nimbaland“, finales Video) und der Songtext.
// Laut Nimalan: Beat selbst produziert in Ableton, Vocals mit Suno Pro, Lyrics selbst geschrieben.
// Auf der Website: 36-Sekunden-Teaser (Intro + Höhepunkt) aus den Einzelclips, nicht das ganze Video (481 MB).
const project: PortfolioProject = {
  slug: "welcome-to-nimbaland",
  title: "Welcome to Nimbaland",
  tagline: { de: "Where the sacred meets the night.", en: "Where the sacred meets the night." },
  client: "Eigenes Projekt · Nimbaland",
  year: "2026",
  date: "2026-06",
  category: { de: ["AI Visual Engineering", "Musikvideo"], en: ["AI visual engineering", "Music video"] },
  role: { de: ["Songwriting", "Musikproduktion", "Art Direction", "AI Visual Engineering", "Schnitt"], en: ["Songwriting", "Music production", "Art direction", "AI visual engineering", "Edit"] },
  services: {
    de: ["AI Visual Engineering", "Art Direction", "Visual Storytelling"],
    en: ["AI Visual Engineering", "Art Direction", "Visual Storytelling"],
  },
  summary: {
    de: "Song und Musikvideo aus einer Hand: Lyrics selbst geschrieben, Beat in Ableton produziert, Vocals mit Suno Pro – und dazu ein Video, in dem tamilische Tempelkultur auf elektronische Nacht trifft, Bild für Bild mit generativer KI entwickelt.",
    en: "Song and music video from one hand: lyrics written myself, beat produced in Ableton, vocals with Suno Pro – and a video where Tamil temple culture meets electronic night, developed shot by shot with generative AI.",
  },
  challenge: {
    de: "Der Song erzählt von Ritualen, Göttern und Frequenzen: „The temple doors open at midnight. The drum does not ask permission.“ Die Bilder sollten diese Welt ernst nehmen – Gopuram, Kolam, Ganesha und Nataraja – und sie gleichzeitig in Licht, Bass und Bewegung übersetzen.",
    en: "The song tells of rituals, gods and frequencies: “The temple doors open at midnight. The drum does not ask permission.” The images had to take that world seriously – gopuram, kolam, Ganesha and Nataraja – while translating it into light, bass and motion.",
  },
  approach: {
    de: "Jede Szene beginnt als Standbild und wird dann mit einer genau beschriebenen Kamerabewegung zum Clip: Drohnenflüge über eine Ganesha-Insel, ein langsames Öffnen der Tempeltore, ein Lichtstrahl, der sich verdichtet. Eine wiederkehrende Figur – ich selbst – führt durch die Welten von Feuer, Kosmos und Tempel.",
    en: "Every scene starts as a still and becomes a clip through a precisely described camera move: drone flights over a Ganesha island, the slow opening of temple doors, a beam of light intensifying. A recurring figure – me – leads through worlds of fire, cosmos and temple.",
  },
  solution: {
    de: "Ein fünfminütiges Musikvideo im Hochformat, geschnitten auf den eigenen Song. Unten der 36-Sekunden-Teaser aus Intro und Höhepunkt – und das ganze Video.",
    en: "A five-minute vertical music video, cut to my own song. Below: the 36-second teaser from the intro and climax – and the full video.",
  },
  coverImage: {
    src: "/projects/welcome-to-nimbaland/cover.webp",
    alt: { de: "Drei Szenen: Nataraja über einer Menge, Tempeltor mit Lichtschein, Porträt mit leuchtenden Linien", en: "Three scenes: Nataraja above a crowd, a temple gate with light, a portrait with glowing lines" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/welcome-to-nimbaland/teaser-poster.webp", video: "/projects/welcome-to-nimbaland/teaser.mp4", span: "full", alt: { de: "Video: 36-Sekunden-Teaser des Musikvideos mit Ton", en: "Video: 36-second teaser of the music video with sound" }, caption: { de: "Teaser · Intro und Höhepunkt · mit Ton", en: "Teaser · intro and climax · with sound" }, aspect: "16/9", width: 1600, height: 900 },
    { src: "/projects/welcome-to-nimbaland/full-poster.webp", video: "/projects/welcome-to-nimbaland/full.mp4", autoplay: false, span: "full", alt: { de: "Video: das vollständige Musikvideo „Welcome to Nimbaland“, 5 Minuten, mit Ton", en: "Video: the full music video “Welcome to Nimbaland”, 5 minutes, with sound" }, caption: { de: "Das ganze Video · 5:00 · zum Abspielen klicken", en: "The full video · 5:00 · click to play" }, aspect: "16/9", width: 1600, height: 900 },
    { src: "/projects/welcome-to-nimbaland/stills.webp", span: "full", alt: { de: "Acht Szenen aus dem Video im Hochformat", en: "Eight vertical scenes from the video" }, caption: { de: "Szenen aus dem Video", en: "Scenes from the video" }, aspect: "2400/2122", width: 2400, height: 2122 },
  ],
  featured: true,
  published: true,
  order: 3,
  backlog: [],
};

export default project;

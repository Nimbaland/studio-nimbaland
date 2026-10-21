import type { PortfolioProject } from "./types";

// Solitaire – Investment-Präsentation für ein Bürohochhaus (August 2019), Colliers International.
// Quelle: "190821_Solitaire_Praesentation" (42 Folien). Team-Folien und Zahlen werden nicht gezeigt.
const project: PortfolioProject = {
  slug: "solitaire",
  title: "Solitaire",
  tagline: { de: "A prime office, presented like one.", en: "A prime office, presented like one." },
  client: "Colliers International",
  year: "2019",
  date: "2019-08",
  category: { de: ["Präsentation", "Real Estate"], en: ["Presentation", "Real estate"] },
  role: { de: ["Art Direction", "Presentation Design"], en: ["Art direction", "Presentation design"] },
  services: { de: ["Art Direction", "Presentation Design", "Pitch Design"], en: ["Art Direction", "Presentation Design", "Pitch Design"] },
  summary: {
    de: "Investment-Präsentation für ein Bürohochhaus in Toplage – 42 Folien von den Investment Highlights über Markt und Wettbewerb bis zum Vermarktungskonzept mit Website, App und Film.",
    en: "Investment presentation for a prime-location office tower — 42 slides from investment highlights through market and competition to a marketing concept with website, app and film.",
  },
  approach: {
    de: "Transparente Dreiecke in Rosé, Mint und Sand legen sich über die Fassade und werden zum Leitmotiv – leicht, präzise und wiedererkennbar auf jeder Kapitelfolie. Tabellen und Diagramme folgen derselben ruhigen Farbwelt, damit die Zahlen lesbar bleiben.",
    en: "Translucent triangles in rose, mint and sand layer over the façade and become the key motif — light, precise and recognisable on every chapter slide. Tables and charts follow the same calm palette so the numbers stay readable.",
  },
  coverImage: { src: "/projects/solitaire/cover.webp", alt: { de: "Titelfolie Solitaire – Prime Location Office", en: "Title slide Solitaire — Prime Location Office" }, aspect: "16/9", width: 2400, height: 1350 },
  gallery: [
    { src: "/projects/solitaire/gallery-01.webp", alt: { de: "Kapitelfolien The Asset und Location and Competition", en: "Chapter slides The Asset and Location and Competition" }, caption: { de: "Kapitelfolien", en: "Chapter slides" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/solitaire/gallery-02.webp", alt: { de: "Folie Marketing mit Website, App und Film auf Geräten", en: "Marketing slide with website, app and film on devices" }, caption: { de: "Vermarktungskonzept", en: "Marketing concept" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/solitaire/gallery-03.webp", alt: { de: "Kapitelfolie Investment Highlights und Angebotsübersicht", en: "Investment highlights chapter slide and offer overview" }, caption: { de: "Investment Highlights", en: "Investment highlights" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: false,
  published: true,
  order: 14,
  backlog: [],
};

export default project;

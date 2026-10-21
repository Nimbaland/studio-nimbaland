import type { PortfolioProject } from "./types";

// Lebensbuch · Britta Küper (2025).
// Eigener Umfang laut Nimalan: Buchverpackung/Stanze, Seidenpapier, Sticker, Magnetlesezeichen.
// Logo und Visitenkarte gehören NICHT dazu und werden nicht gezeigt.
const project: PortfolioProject = {
  slug: "das-lebensbuch",
  title: "Das Lebensbuch",
  tagline: { de: "A box full of memories.", en: "A box full of memories." },
  client: "Britta Küper · Lebensbuch",
  year: "2025",
  date: "2025-10",
  category: { de: ["Packaging", "Print"], en: ["Packaging", "Print"] },
  role: {
    de: ["Verpackungsdesign", "Stanzform", "Print"],
    en: ["Packaging design", "Dieline", "Print"],
  },
  services: {
    de: ["Packaging Design", "Print Design"],
    en: ["Packaging Design", "Print Design"],
  },
  summary: {
    de: "Verpackung für „Lebensbuch – Dein lebenslanges Erinnerungsbuch“: Buchschachtel mit Stanzform, Seidenpapier, Sticker und Magnetlesezeichen.",
    en: "Packaging for “Lebensbuch – your lifelong book of memories”: book box with dieline, tissue paper, sticker and magnetic bookmark.",
  },
  approach: {
    de: "Die Fragen, mit denen das Lebensbuch zum Erinnern einlädt, werden selbst zum Muster: Sie laufen als Fließtext über Seidenpapier und Schachtel-Innenseite, unterbrochen vom kleinen Buch-Signet. Außen bleibt die Schachtel ruhig in tiefem Blau, Sticker und Lesezeichen tragen das helle Markenblau.",
    en: "The questions that invite people to remember become the pattern itself: they run as continuous text across the tissue paper and the inside of the box, punctuated by the small book mark. Outside, the box stays calm in deep blue, while sticker and bookmark carry the bright brand blue.",
  },
  coverImage: {
    src: "/projects/das-lebensbuch/cover.webp",
    alt: { de: "Seidenpapier mit Erinnerungsfragen als Muster", en: "Tissue paper patterned with memory prompts" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/das-lebensbuch/gallery-01.webp", alt: { de: "Stanzformen der Schachtel: Deckel außen und Innenseite mit Fragen", en: "Box dielines: lid outside and inside printed with questions" }, caption: { de: "Schachtel 220 × 158 × 40 mm", en: "Box 220 × 158 × 40 mm" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/das-lebensbuch/gallery-02.webp", alt: { de: "Sticker 3 cm und Magnetlesezeichen", en: "3 cm sticker and magnetic bookmark" }, caption: { de: "Sticker und Magnetlesezeichen", en: "Sticker and magnetic bookmark" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/das-lebensbuch/gallery-03.webp", alt: { de: "Detail des Seidenpapiers", en: "Tissue paper detail" }, caption: { de: "Seidenpapier, Detail", en: "Tissue paper, detail" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 6,
  backlog: [],
};

export default project;

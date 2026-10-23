import type { PortfolioProject } from "./types";

// Lebensbuch · Britta Küper (2025).
// Eigener Umfang laut Nimalan: Buchverpackung/Stanze, Seidenpapier, Sticker, Magnetlesezeichen.
// Logo und Visitenkarte gehören NICHT dazu und werden nicht gezeigt.
// Mockups (Schachtel, Sticker): eigene 3D-Kompositionen aus den Druckdaten (21.10.2026).
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
  story: {
    challenge: { de: "Eine Verpackung für ein Buch, das ein ganzes Leben an Erinnerungen sammeln soll.", en: "Packaging for a book meant to collect a lifetime of memories." },
    idea: { de: "Die Fragen des Buchs werden selbst zum Muster.", en: "The book’s questions become the pattern." },
    decision: { de: "Außen ruhiges Tiefblau, innen laufen die Erinnerungsfragen über Schachtel und Seidenpapier.", en: "Calm deep blue outside; inside, the memory prompts run across the box and tissue paper." },
  },
  coverImage: {
    src: "/projects/das-lebensbuch/cover.webp",
    alt: { de: "Geschlossene Lebensbuch-Schachtel mit Sticker auf Seidenpapier mit Erinnerungsfragen", en: "Closed Lebensbuch box with sticker on tissue paper printed with memory prompts" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/das-lebensbuch/box-open.webp", alt: { de: "Geöffnete Stülpschachtel: Deckel daneben, innen der Boden mit den Erinnerungsfragen", en: "Opened box: lid beside it, the inside base printed with memory prompts" }, caption: { de: "Stülpschachtel 220 × 158 × 40 mm, innen bedruckt", en: "Box 220 × 158 × 40 mm, printed inside" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/das-lebensbuch/stickers.webp", alt: { de: "Stickerbogen und Seidenpapier-Päckchen, verschlossen mit dem Lebensbuch-Sticker", en: "Sticker sheet and tissue paper parcel sealed with the Lebensbuch sticker" }, caption: { de: "Sticker 3 cm und Seidenpapier", en: "3 cm stickers and tissue paper" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/das-lebensbuch/dieline.webp", alt: { de: "Stanzformen der Schachtel: Deckel außen und Innenseite mit Fragen", en: "Box dielines: lid outside and inside printed with questions" }, caption: { de: "Stanzformen", en: "Dielines" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/das-lebensbuch/tissue-detail.webp", alt: { de: "Detail des Seidenpapiers", en: "Tissue paper detail" }, caption: { de: "Seidenpapier, Detail", en: "Tissue paper, detail" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  mockups: true,
  featured: true,
  published: true,
  order: 6,
  backlog: [],
};

export default project;

import type { PortfolioProject } from "./types";

// KANDIDAT – eigenes Brand Development. Geeignete Teile fürs Studio-Portfolio auswählen.
const project: PortfolioProject = {
  slug: "nimbaland",
  title: "Nimbaland",
  category: { de: ["Eigene Marke", "Brand Development"], en: ["Own brand", "Brand development"] },
  role: { de: ["Gründer", "Creative Director"], en: ["Founder", "Creative Director"] },
  services: {
    de: ["Brand Development", "Creative Direction", "AI Visual Content"],
    en: ["Brand development", "Creative direction", "AI visual content"],
  },
  summary: {
    de: "Aufbau der eigenen Marke Nimbaland – von der Identität bis zum Content.",
    en: "Building the Nimbaland brand — from identity to content.",
  },
  coverImage: {
    src: null,
    expected: "/projects/nimbaland/cover.webp",
    alt: { de: "Nimbaland – Titelbild (folgt)", en: "Nimbaland – cover image (to follow)" },
    aspect: "4/3",
  },
  gallery: [],
  featured: false,
  published: false,
  order: 5,
  backlog: ["Auswahl der Arbeiten (Identität, Kampagnenbilder, Clip?)", "Kurztext zur Marke", "Bildmaterial"],
};

export default project;

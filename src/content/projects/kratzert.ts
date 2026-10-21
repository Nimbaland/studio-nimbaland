import type { PortfolioProject } from "./types";

// KANDIDAT – Inhalte, Kundenfreigabe und Bildmaterial prüfen.
const project: PortfolioProject = {
  slug: "kratzert",
  title: "Kratzert Gruppe",
  tagline: { de: "Building a stronger brand presence.", en: "Building a stronger brand presence." },
  client: "Kratzert Gruppe",
  date: "2025-11",
  category: { de: ["Corporate Design", "Website"], en: ["Corporate design", "Website"] },
  role: { de: ["Brand & Design Manager"], en: ["Brand & Design Manager"] },
  services: { de: ["Brand Development", "Creative Direction", "Corporate Design", "Web Design"], en: ["Brand Development", "Creative Direction", "Corporate Design", "Web Design"] },
  summary: {
    de: "Ein konsistenter Markenauftritt für eine Unternehmensgruppe. Von der visuellen Identität bis zur digitalen Präsenz.",
    en: "A consistent brand presence for a group of companies. From visual identity to digital presence.",
  },
  coverImage: {
    src: null,
    expected: "/projects/kratzert/cover.webp",
    alt: { de: "Kratzert Gruppe – Titelbild (folgt)", en: "Kratzert Gruppe – cover image (to follow)" },
    aspect: "16/9",
  },
  gallery: [
    { src: null, expected: "/projects/kratzert/gallery-01.webp", alt: { de: "Projektbild 1", en: "Project image 1" }, aspect: "3/2" },
    { src: null, expected: "/projects/kratzert/gallery-02.webp", alt: { de: "Projektbild 2", en: "Project image 2" }, aspect: "3/2" },
  ],
  featured: true,
  published: false,
  order: 16,
  backlog: ["Genaue Rolle bestätigen (inhouse als Brand & Design Manager 2024–2025?)", "Bildmaterial: Cover + 4–8 Galeriebilder", "Texte: Ausgangslage, Vorgehen, Lösung; Jahr"],
};

export default project;

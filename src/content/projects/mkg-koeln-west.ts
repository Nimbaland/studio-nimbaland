import type { PortfolioProject } from "./types";

// MKG Köln West – Praxis für Mund-, Kiefer- und Gesichtschirurgie.
// Quelle: Nimalans Projektordner (Logo, Icons, Geschäftsausstattung, Außenwerbung, 2020–2021)
// und seine Angabe "Branding, Außendarstellung, Website".
const project: PortfolioProject = {
  slug: "mkg-koeln-west",
  title: "MKG Köln West",
  tagline: { de: "A clear identity for precise care.", en: "A clear identity for precise care." },
  client: "MKG Köln West",
  liveUrl: "https://www.mkg-koeln-west.de/",
  year: "2020–2021",
  date: "2021-06",
  category: { de: ["Branding", "Außendarstellung", "Website"], en: ["Branding", "Signage", "Website"] },
  role: { de: ["Branding", "Art Direction", "Webdesign"], en: ["Branding", "Art direction", "Web design"] },
  services: {
    de: ["Brand Identity", "Corporate Design", "Signage", "Web Design"],
    en: ["Brand Identity", "Corporate Design", "Signage", "Web Design"],
  },
  summary: {
    de: "Markenidentität und Außenauftritt für eine Praxis für Mund-, Kiefer- und Gesichtschirurgie in Köln – vom Logo über die Geschäftsausstattung bis zur Schaufensterwerbung und Website.",
    en: "Brand identity and public presence for an oral and maxillofacial surgery practice in Cologne — from logo and stationery to window graphics and website.",
  },
  approach: {
    de: "Ausgangspunkt war ein klares Zeichen: ein Stern als Symbol, kombiniert mit einer ruhigen Wortmarke in Blau. Daraus entstand ein System aus eigenen Behandlungs-Icons, Geschäftspapier, Visitenkarten mit Terminplaner und einem Überweisungsformular.",
    en: "The starting point was a clear mark: a star symbol paired with a calm blue wordmark. It grew into a system of custom treatment icons, letterhead, business cards with appointment planner and a referral form.",
  },
  solution: {
    de: "Für die Eröffnung kamen Schaufenstergrafiken für den Standort hinzu – mit „Coming soon“-Motiv und Recruiting-Botschaft – sowie die Website und der Social-Media-Auftritt.",
    en: "For the opening, window graphics for the location followed — with a “coming soon” motif and a recruiting message — along with the website and social media presence.",
  },
  coverImage: {
    src: "/projects/mkg-koeln-west/cover.webp",
    alt: { de: "Logo von MKG Köln West in Weiß auf Blau", en: "MKG Köln West logo in white on blue" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    {
      src: "/projects/mkg-koeln-west/gallery-01.webp",
      alt: { de: "Geschäftspapier sowie Visitenkarte mit Terminplaner, Vorder- und Rückseite", en: "Letterhead and business card with appointment planner, front and back" },
      caption: { de: "Geschäftsausstattung", en: "Stationery" },
      aspect: "16/10",
      width: 2400,
      height: 1500,
    },
    {
      src: "/projects/mkg-koeln-west/gallery-02.webp",
      alt: { de: "Zwei Schaufenstergrafiken: Recruiting-Motiv auf Blau und „Coming soon“ mit Zahn-Illustration", en: "Two window graphics: recruiting message on blue and “coming soon” with tooth illustration" },
      caption: { de: "Schaufensterwerbung zur Eröffnung", en: "Window graphics for the opening" },
      aspect: "16/9",
      width: 2400,
      height: 1350,
    },
    {
      src: "/projects/mkg-koeln-west/gallery-03.webp",
      alt: { de: "Praxiseingang mit Beschriftung „MKG Köln West Implantologie“", en: "Practice entrance with “MKG Köln West Implantologie” lettering" },
      caption: { de: "Am Standort", en: "On location" },
      aspect: "4/3",
      width: 1600,
      height: 1198,
    },
    {
      src: "/projects/mkg-koeln-west/gallery-04.webp",
      alt: { de: "Überweisungsformular im Corporate Design", en: "Referral form in the corporate design" },
      caption: { de: "Überweisungsformular", en: "Referral form" },
      aspect: "16/10",
      width: 2400,
      height: 1500,
    },
  ],
  featured: true,
  published: true,
  order: 1,
  backlog: [],
};

export default project;

import type { PortfolioProject } from "./types";

// Variari Food Boutique – Catering & Food Concept (2019–2020).
// Quelle: Projektordner "Variari_Food_Boutique". Laut Nimalan: Logo-Rebranding von ihm,
// Konzept der Website-Fotos als Creative Director (Fotograf:in nicht genannt), Handouts und Flyer.
const project: PortfolioProject = {
  slug: "variari",
  title: "Variari Food Boutique",
  tagline: { de: "Making taste visible.", en: "Making taste visible." },
  client: "Variari Food Boutique",
  liveUrl: "https://www.variari.com/",
  year: "2019–2020",
  category: { de: ["Rebranding", "Creative Direction", "Print"], en: ["Rebranding", "Creative direction", "Print"] },
  role: { de: ["Creative Director", "Logo-Rebranding", "Bildkonzept", "Print"], en: ["Creative director", "Logo rebrand", "Photo concept", "Print"] },
  services: {
    de: ["Rebranding", "Creative Direction", "Print Design"],
    en: ["Rebranding", "Creative Direction", "Print Design"],
  },
  summary: {
    de: "Rebranding des Logos und Creative Direction für die Website-Fotografie eines Catering- und Food-Konzepts, dazu Handouts und Flyer – dunkel, warm und mit goldenen Akzenten, damit die Gerichte selbst die Hauptrolle spielen.",
    en: "Logo rebrand and creative direction for the website photography of a catering and food concept, plus handouts and flyers — dark, warm and accented in gold, so the dishes themselves take centre stage.",
  },
  approach: {
    de: "Das Logo wurde zu einer reduzierten, schmalen Wortmarke in Gold auf fast schwarzem Grund. Für die Website entstand das Konzept der Fotos: Menschen am Tisch, Hände, geteilte Teller. Im Print setzt sich die Bildsprache mit goldenen Sechseck-Rahmen fort – in einem quadratischen Handout und einer Flyer-Serie zu Catering, individuellen Events und Fingerfood.",
    en: "The logo became a reduced, slender wordmark in gold on near-black. For the website, the photo concept followed: people at the table, hands, shared plates. In print, the visual language continues with gold hexagon frames — in a square handout and a flyer series on catering, individual events and finger food.",
  },
  coverImage: {
    src: "/projects/variari/cover.webp",
    alt: { de: "Variari-Wortmarke in Gold auf dunklem Grund", en: "Variari wordmark in gold on a dark background" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/variari/gallery-01.webp", alt: { de: "Handout-Seite mit neun Food-Fotos in goldenen Sechseck-Rahmen", en: "Handout page with nine food photos in gold hexagon frames" }, caption: { de: "Handout", en: "Handout" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/gallery-02.webp", alt: { de: "Zwei Handout-Seiten mit großformatiger Food-Fotografie", en: "Two handout pages with large-format food photography" }, caption: { de: "Handout 2020", en: "Handout 2020" }, aspect: "16/9", width: 1600, height: 900 },
    { src: "/projects/variari/gallery-03.webp", alt: { de: "Flyer-Serie: Titel, individuelle Events, Fingerfood", en: "Flyer series: cover, individual events, finger food" }, caption: { de: "Flyer-Serie", en: "Flyer series" }, aspect: "2133/1000", width: 2133, height: 1000 },
    { src: "/projects/variari/gallery-04.webp", alt: { de: "Drei Seiten des Variari-Handouts auf dunklem Grund", en: "Three pages of the Variari handout on a dark background" }, caption: { de: "Handout 2019", en: "Handout 2019" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/variari/gallery-05.webp", alt: { de: "Gäste greifen von einer Platte mit Fingerfood an einer festlich gedeckten Tafel", en: "Guests reaching for finger food from a platter at a festive table" }, caption: { de: "Website-Fotografie · Creative Direction", en: "Website photography · creative direction" }, aspect: "16/9", width: 1440, height: 810 },
  ],
  featured: true,
  published: true,
  order: 7,
  backlog: [],
};

export default project;

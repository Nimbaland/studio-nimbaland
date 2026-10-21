import type { PortfolioProject } from "./types";

// Variari Food Boutique – Catering & Food Concept (2019–2020).
// Quelle: Projektordner "Variari_Food_Boutique". Laut Nimalan: Logo-Rebranding von ihm,
// Konzept der Website-Fotos als Creative Director (Fotograf:in nicht genannt), Flyer.
// Handout-Bilder auf Wunsch entfernt (21.10.2026).
const project: PortfolioProject = {
  slug: "variari",
  title: "Variari Food Boutique",
  tagline: { de: "Making taste visible.", en: "Making taste visible." },
  client: "Variari Food Boutique",
  liveUrl: "https://www.variari.com/",
  year: "2019–2020",
  date: "2020-05",
  category: { de: ["Rebranding", "Creative Direction", "Print"], en: ["Rebranding", "Creative direction", "Print"] },
  role: { de: ["Creative Director", "Logo-Rebranding", "Bildkonzept", "Print"], en: ["Creative director", "Logo rebrand", "Photo concept", "Print"] },
  services: {
    de: ["Rebranding", "Creative Direction", "Print Design"],
    en: ["Rebranding", "Creative Direction", "Print Design"],
  },
  summary: {
    de: "Rebranding des Logos und Creative Direction für die Website-Fotografie eines Catering- und Food-Konzepts, dazu eine Flyer-Serie – dunkel, warm und mit goldenen Akzenten, damit die Gerichte selbst die Hauptrolle spielen.",
    en: "Logo rebrand and creative direction for the website photography of a catering and food concept, plus a flyer series — dark, warm and accented in gold, so the dishes themselves take centre stage.",
  },
  approach: {
    de: "Das Logo wurde zu einer reduzierten, schmalen Wortmarke in Gold auf fast schwarzem Grund. Für die Website entstand das Konzept der Fotos: Menschen am Tisch, Hände, geteilte Teller. Im Print setzt sich die Bildsprache fort – in einer quadratischen Flyer-Serie zu Catering, individuellen Events, Fingerfood, Seated und Buffet.",
    en: "The logo became a reduced, slender wordmark in gold on near-black. For the website, the photo concept followed: people at the table, hands, shared plates. In print, the visual language continues — in a square flyer series on catering, individual events, finger food, seated dinners and buffet.",
  },
  coverImage: {
    src: "/projects/variari/cover.webp",
    alt: { de: "Variari-Wortmarke in Gold auf dunklem Grund", en: "Variari wordmark in gold on a dark background" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    // Website-Fotografie (Creative Direction / Bildkonzept)
    { src: "/projects/variari/photo-01.webp", alt: { de: "Gäste greifen von einer Platte mit Fingerfood an einer festlich gedeckten Tafel", en: "Guests reaching for finger food from a platter at a festive table" }, caption: { de: "Website-Fotografie · Creative Direction", en: "Website photography · creative direction" }, aspect: "16/9", width: 1440, height: 810 },
    { src: "/projects/variari/photo-02.webp", alt: { de: "Cocktail und Wasser an der Bar, davor eine kleine Suppe", en: "Cocktail and water at the bar with a small soup" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-03.webp", alt: { de: "Cocktail mit Blüte und Oktopus-Häppchen auf der Bar", en: "Cocktail with a flower and an octopus bite on the bar" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-04.webp", alt: { de: "Orientalisch gedeckte Tafel von oben, Hände greifen zur Platte", en: "Oriental table from above, hands reaching for the platter" }, aspect: "16/9", width: 1440, height: 810 },
    { src: "/projects/variari/photo-05.webp", alt: { de: "Thunfisch mit Rote Bete vor einem grünen Cocktail", en: "Tuna with beetroot in front of a green cocktail" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-06.webp", alt: { de: "Häppchen auf einem Porzellanlöffel", en: "Bite on a porcelain spoon" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-07.webp", alt: { de: "Zwei Köchinnen in Variari-Kochjacken vor der Bar", en: "Two chefs in Variari jackets in front of the bar" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-08.webp", alt: { de: "Cocktail mit Kornblume und Löffel-Häppchen", en: "Cocktail with cornflower and spoon bite" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-09.webp", alt: { de: "Geschmortes Fleisch mit Radieschen und Kresse", en: "Braised meat with radish and cress" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-10.webp", alt: { de: "Buffet mit Burgern, Bowls und Gebäck", en: "Buffet with burgers, bowls and pastries" }, aspect: "16/9", width: 1440, height: 810 },
    { src: "/projects/variari/photo-11.webp", alt: { de: "Oktopus-Häppchen auf einem runden Tablett", en: "Octopus bites on a round tray" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/photo-12.webp", alt: { de: "Fingerfood auf einer Etagere", en: "Finger food on a tiered stand" }, aspect: "3/2", width: 2400, height: 1600 },
    { src: "/projects/variari/gallery-flyer.webp", alt: { de: "Flyer-Serie: Titel, individuelle Events, Fingerfood", en: "Flyer series: cover, individual events, finger food" }, caption: { de: "Flyer-Serie", en: "Flyer series" }, aspect: "2133/1000", width: 2133, height: 1000 },
  ],
  featured: true,
  published: true,
  order: 7,
  backlog: [],
};

export default project;

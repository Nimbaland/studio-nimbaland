import type { PortfolioProject } from "./types";

// LUMIQ – Abschlussprojekt der IHK-zertifizierten Weiterbildung „AI Content Creator“ bei SuperCode (Juli 2026).
// Teamprojekt von Bianca, Steffi & Nimba. Quelle: Prozessdokumentation „LUMIQ-Workflow“ (13 Folien),
// Logo (SVG), Kampagnenmotive (Story 9:16, Feed 1:1 und 4:5) und Reel/Story-Video (v2).
// Mockups: eigene Kompositionen aus den Kampagnenmotiven.
const project: PortfolioProject = {
  slug: "lumiq",
  title: "LUMIQ",
  tagline: { de: "Mental clarity, powered by plants.", en: "Mental clarity, powered by plants." },
  client: "Abschlussprojekt SuperCode · Team mit Bianca und Steffi",
  year: "2026",
  date: "2026-07",
  category: { de: ["AI Visual Engineering", "Branding", "Kampagne"], en: ["AI visual engineering", "Branding", "Campaign"] },
  role: { de: ["Konzept", "AI Visual Engineering", "Logo", "Kampagne"], en: ["Concept", "AI visual engineering", "Logo", "Campaign"] },
  services: {
    de: ["AI Visual Engineering", "Brand Identity", "Campaign Visuals"],
    en: ["AI Visual Engineering", "Brand Identity", "Campaign Visuals"],
  },
  summary: {
    de: "Eine komplette Supplement-Marke in 12 Stunden – von Name und Markenstory über Logo und Packaging bis zu Kampagnenbildern und Reel, entwickelt mit KI-Werkzeugen und von Hand verfeinert.",
    en: "A complete supplement brand in 12 hours – from name and brand story to logo, packaging, campaign images and a reel, developed with AI tools and refined by hand.",
  },
  challenge: {
    de: "Die Aufgabe: eine Marke für pflanzliche Supplements für Menschen, die sich für Biohacking und mentale Performance interessieren – inklusive Kampagne für Instagram. Und das mit KI so, dass Produkt, Etikett und Bildsprache über alle Motive hinweg konsistent bleiben.",
    en: "The brief: a brand for plant-based supplements for people interested in biohacking and mental performance – including an Instagram campaign. And to do it with AI so that product, label and imagery stay consistent across every motif.",
  },
  approach: {
    de: "Acht Phasen, vier Werkzeug-Gruppen: Markenname („Lumen“ + „IQ“) und Story mit ChatGPT, zwei Buyer Personas als Charakter-Referenz, ein Moodboard als Stil-Referenz für alle Bild-Prompts. Logo-Richtungen mit Nano Banana 2, danach als Vektor in Illustrator nachgebaut. Das Etikett mit GPT Image – dem einzigen Modell, das mehrere Textblöcke fehlerfrei setzte.",
    en: "Eight phases, four tool groups: brand name (“Lumen” + “IQ”) and story with ChatGPT, two buyer personas as character references, a moodboard as the style reference for every image prompt. Logo directions with Nano Banana 2, then rebuilt as vectors in Illustrator. The label with GPT Image – the only model that set several text blocks without errors.",
  },
  solution: {
    de: "Kampagnenbilder für Feed und Story und ein Reel, für das derselbe Prompt in Kling, Seedance und happyhorse verglichen wurde. Die wichtigste Erkenntnis: KI liefert die Richtung und spart Fotoshooting und Set-Design – Vektorarbeit, Typo-Prüfung und die Auswahl, was zur Marke passt, bleiben Handarbeit.",
    en: "Campaign images for feed and story, plus a reel for which the same prompt was compared in Kling, Seedance and happyhorse. The key learning: AI sets the direction and replaces a photo shoot and set design – vector work, type checks and deciding what fits the brand remain handcraft.",
  },
  coverImage: {
    src: "/projects/lumiq/cover.webp",
    alt: { de: "LUMIQ-Kampagne: zwei Instagram-Stories auf Smartphones und ein Feed-Post mit dem Kraftpapier-Beutel", en: "LUMIQ campaign: two Instagram stories on smartphones and a feed post with the kraft paper pouch" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/lumiq/reel-poster.webp", video: "/projects/lumiq/reel.mp4", span: "full", alt: { de: "Video: das LUMIQ-Reel auf einem Smartphone, daneben zwei Feed-Posts", en: "Video: the LUMIQ reel on a smartphone, next to two feed posts" }, caption: { de: "Reel / Story 9:16 · Image-to-Video", en: "Reel / story 9:16 · image-to-video" }, aspect: "16/9", width: 1600, height: 900 },
    { src: "/projects/lumiq/posts.webp", span: "full", alt: { de: "Zwei Feed-Posts im Format 1:1 und 4:5", en: "Two feed posts in 1:1 and 4:5" }, caption: { de: "Feed-Posts 1:1 und 4:5", en: "Feed posts 1:1 and 4:5" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/lumiq/workflow-03.webp", span: "full", alt: { de: "Zeitstrahl: acht Phasen in 12 Stunden", en: "Timeline: eight phases in 12 hours" }, caption: { de: "Workflow: acht Phasen, 12 Stunden", en: "Workflow: eight phases, 12 hours" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/lumiq/workflow-07.webp", span: "half", alt: { de: "Logo-Entwicklung: KI-Richtung und Vektor-Feinschliff", en: "Logo development: AI direction and vector refinement" }, caption: { de: "Logo: KI-Richtung, Vektor von Hand", en: "Logo: AI direction, vector by hand" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/lumiq/workflow-11.webp", span: "half", alt: { de: "Learnings: was nicht funktioniert hat", en: "Learnings: what didn't work" }, caption: { de: "Learnings aus den Fails", en: "Learnings from the fails" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/lumiq/workflow-13.webp", span: "full", alt: { de: "Fazit: größter Zeitgewinn durch KI, weiterhin manuell", en: "Conclusion: biggest time saving through AI, still manual" }, caption: { de: "Fazit", en: "Conclusion" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  document: {
    href: "/projects/lumiq/LUMIQ_Workflow_Prozessdokumentation.pdf",
    label: { de: "Prozessdokumentation als PDF", en: "Process documentation as PDF" },
  },
  featured: true,
  published: true,
  order: 3,
  backlog: ["Eigener Anteil im Team konkretisieren?", "Prozessdoku-PDF wurde aus der PPTX gerendert – ggf. Original-PDF mit Originalschriften nachliefern"],
};

export default project;

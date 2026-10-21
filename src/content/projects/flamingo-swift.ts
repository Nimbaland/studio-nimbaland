import type { PortfolioProject } from "./types";

// FlaminGo Swift – UX/UI-Case-Study einer Mobility-App (Sustainability Competition, SDG 9), Juni 2023.
// Quelle: Nimalans Case-Study-PDF "2024_FlaminGoSwift_App_Nimalan_Suntharalingam".
// Laut Nimalan: PDF unverändert lassen (komplette Präsentation) – nur Header-Bild neu.
const project: PortfolioProject = {
  slug: "flamingo-swift",
  title: "FlaminGo Swift",
  tagline: { de: "Unlock the road, share the load.", en: "Unlock the road, share the load." },
  client: "Sustainability Competition · SDG 9",
  year: "2023",
  date: "2023-06",
  category: { de: ["UX/UI", "App-Konzept"], en: ["UX/UI", "App concept"] },
  role: { de: ["Konzept", "UX Design", "UI Design"], en: ["Concept", "UX design", "UI design"] },
  services: {
    de: ["UX Design", "UI Design", "Concept"],
    en: ["UX Design", "UI Design", "Concept"],
  },
  summary: {
    de: "App-Konzept für einen Wettbewerb zu Industrie, Innovation und Infrastruktur (SDG 9): Carsharing und Lieferdienst in einer App, getragen von freiwilligen Fahrerinnen und Fahrern – für weniger Leerfahrten, weniger Verkehr und mehr Gemeinschaft.",
    en: "App concept for a competition on industry, innovation and infrastructure (SDG 9): car sharing and delivery in one app, powered by volunteer drivers — for fewer empty trips, less traffic and more community.",
  },
  challenge: {
    de: "Fahrzeuge stehen oder fahren halb leer, Pakete und Menschen haben oft dasselbe Ziel. Wie lässt sich beides so verbinden, dass Pendler, Studierende und Reisende einfach und sicher mitfahren oder etwas mitschicken können?",
    en: "Vehicles stand idle or travel half empty, while parcels and people often share the same destination. How can both be connected so commuters, students and travellers can easily and safely ride along or send something?",
  },
  approach: {
    de: "Ein Design-Thinking-Prozess in vier Phasen – Discover, Define, Develop, Deliver: Nutzerforschung und Interviews, Problem Statements und Hypothesen, eine Persona-Gruppe aus Pendlern, Studierenden und Reisenden, Wettbewerbsanalyse, Stylescape mit Schrift, Farben und Moods, User Flows und Informationsarchitektur.",
    en: "A four-phase design thinking process — discover, define, develop, deliver: user research and interviews, problem statements and hypotheses, a persona group of commuters, students and travellers, competitor analysis, a stylescape of type, colours and moods, user flows and information architecture.",
  },
  solution: {
    de: "Ein Hi-Fi-Prototyp mit Onboarding, „Book a ride“ und „Offer a ride“, Kurierversand für Kundinnen und Kunden sowie für DropOff-Partner – mit Paketgrößen, Messung per Kamera und Live-Status der Fahrt.",
    en: "A hi-fi prototype with onboarding, “Book a ride” and “Offer a ride”, courier delivery for customers and DropOff partners — with parcel sizes, camera measurement and live ride status.",
  },
  coverImage: {
    src: "/projects/flamingo-swift/cover.webp",
    alt: { de: "FlaminGo-Swift-Logo neben drei App-Screens: Offer a ride, Startseite, DropOff Partner", en: "FlaminGo Swift logo next to three app screens: offer a ride, home, DropOff partner" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/flamingo-swift/seg-00.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 1 von 16", en: "FlaminGo Swift case study, section 1 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-01.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 2 von 16", en: "FlaminGo Swift case study, section 2 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-02.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 3 von 16", en: "FlaminGo Swift case study, section 3 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-03.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 4 von 16", en: "FlaminGo Swift case study, section 4 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-04.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 5 von 16", en: "FlaminGo Swift case study, section 5 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-05.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 6 von 16", en: "FlaminGo Swift case study, section 6 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-06.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 7 von 16", en: "FlaminGo Swift case study, section 7 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-07.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 8 von 16", en: "FlaminGo Swift case study, section 8 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-08.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 9 von 16", en: "FlaminGo Swift case study, section 9 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-09.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 10 von 16", en: "FlaminGo Swift case study, section 10 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-10.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 11 von 16", en: "FlaminGo Swift case study, section 11 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-11.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 12 von 16", en: "FlaminGo Swift case study, section 12 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-12.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 13 von 16", en: "FlaminGo Swift case study, section 13 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-13.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 14 von 16", en: "FlaminGo Swift case study, section 14 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-14.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 15 von 16", en: "FlaminGo Swift case study, section 15 of 16" }, aspect: "1920/2400", width: 1920, height: 2400 },
    { src: "/projects/flamingo-swift/seg-15.webp", alt: { de: "Case Study FlaminGo Swift, Abschnitt 16 von 16", en: "FlaminGo Swift case study, section 16 of 16" }, aspect: "1920/1866", width: 1920, height: 1866 },
  ],
  galleryLayout: "stack",
  document: {
    href: "/projects/flamingo-swift/FlaminGoSwift_Case_Study_Nimalan_Suntharalingam.pdf",
    label: { de: "Case Study als PDF öffnen", en: "Open case study as PDF" },
  },
  featured: true,
  published: true,
  order: 10,
  backlog: ["Bildrechte der Stockfotos im Case prüfen"],
};

export default project;

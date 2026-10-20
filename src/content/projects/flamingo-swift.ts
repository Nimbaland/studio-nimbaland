import type { PortfolioProject } from "./types";

// FlaminGo Swift – UX/UI-Case-Study einer Mobility-App (Sustainability Competition, SDG 9), Juni 2023.
// Quelle: Nimalans Case-Study-PDF "2024_FlaminGoSwift_App_Nimalan_Suntharalingam".
const project: PortfolioProject = {
  slug: "flamingo-swift",
  title: "FlaminGo Swift",
  tagline: { de: "Unlock the road, share the load.", en: "Unlock the road, share the load." },
  client: "Sustainability Competition · SDG 9",
  year: "2023",
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
    alt: { de: "App-Startseite von FlaminGo Swift neben einem Straßenfoto", en: "FlaminGo Swift app home screen next to a road photo" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/flamingo-swift/gallery-01.webp", alt: { de: "Logo FlaminGo Swift mit Claim „Unlock the Road, Share the Load“", en: "FlaminGo Swift logo with claim “Unlock the Road, Share the Load”" }, caption: { de: "Marke", en: "Brand" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/flamingo-swift/gallery-02.webp", alt: { de: "Wettbewerbsaufgabe und Design-Prozess", en: "Competition brief and design process" }, caption: { de: "Aufgabe und Prozess", en: "Brief and process" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/flamingo-swift/gallery-03.webp", alt: { de: "Stylescape: Farbpalette der App", en: "Stylescape: app colour palette" }, caption: { de: "Stylescape, Farben", en: "Stylescape, colours" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/flamingo-swift/gallery-04.webp", alt: { de: "Persona Nils Nilsson", en: "Persona Nils Nilsson" }, caption: { de: "Persona", en: "Persona" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/flamingo-swift/gallery-05.webp", alt: { de: "Screens für den Kurierversand mit Paketgrößen und Kameramessung", en: "Courier screens with parcel sizes and camera measurement" }, caption: { de: "Kurierversand", en: "Courier delivery" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/flamingo-swift/gallery-06.webp", alt: { de: "App in der Hand und Startseite mit Book a ride", en: "App in hand and home screen with Book a ride" }, caption: { de: "Book a ride / Offer a ride", en: "Book a ride / Offer a ride" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  featured: true,
  published: true,
  order: 10,
  backlog: ["Bildrechte der Stockfotos im Case prüfen"],
};

export default project;

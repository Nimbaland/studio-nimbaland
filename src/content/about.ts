import type { Localized } from "@/i18n/config";

// Quelle: Lebenslauf von Nimalan (Stand 2026). Adresse und Telefonnummer bewusst NICHT auf der Website.

export type Station = { period: string; role: Localized<string>; company: string; points: Localized<string[]> };

export const experience: Station[] = [
  {
    period: "2018 – now",
    role: { de: "Freiberuflicher Creative Director & Brand Designer", en: "Freelance Creative Director & Brand Designer" },
    company: "Nimbaland Studio, Düsseldorf",
    points: {
      de: ["Markenentwicklung, Corporate Design und Kampagnen für 66 Kunden aus allen Branchen", "Digitale Auftritte von UX/UI über Figma-Prototypen bis zur Umsetzung mit React und Next.js", "KI-gestützte Workflows für Bild-, Video- und Kampagnenproduktion"],
      en: ["Brand development, corporate design and campaigns for 66 clients across all industries", "Digital experiences from UX/UI and Figma prototypes to builds in React and Next.js", "AI-assisted workflows for image, video and campaign production"],
    },
  },
  {
    period: "2024 – 2025",
    role: { de: "Brand & Design Manager", en: "Brand & Design Manager" },
    company: "Kratzert Baumanagement GmbH",
    points: {
      de: ["Aufbau des Corporate Designs und Rollout über alle Touchpoints", "Website-Relaunch mit Konzeption, Design und Redaktion"],
      en: ["Built the corporate design and rolled it out across all touchpoints", "Website relaunch including concept, design and editorial"],
    },
  },
  {
    period: "2021 – 2022",
    role: { de: "Senior Grafikdesigner Print & Digital", en: "Senior Graphic Designer Print & Digital" },
    company: "Savills",
    points: {
      de: ["Vermarktungsunterlagen, Exposés und Pitch-Präsentationen für 73 Immobilienprojekte"],
      en: ["Marketing materials, exposés and pitch presentations for 73 real estate projects"],
    },
  },
  {
    period: "2019 – 2021",
    role: { de: "Senior Art Director Print & Digital", en: "Senior Art Director Print & Digital" },
    company: "Colliers International",
    points: {
      de: ["Art Direction nationaler Vermarktungs- und Employer-Branding-Kampagnen", "Fachliche Führung von vier Designerinnen, Designern und Werkstudierenden", "Corporate-Design-Guidelines und Templates für sechs Standorte"],
      en: ["Art direction of national marketing and employer branding campaigns", "Led a team of four designers and working students", "Corporate design guidelines and templates for six offices"],
    },
  },
  {
    period: "2019",
    role: { de: "Art Director Digital", en: "Art Director Digital" },
    company: "C3 Creative Content and Code",
    points: {
      de: ["Art Direction für den Bosch Annual Report und das Würth-Monatsmagazin, in Print und Digital"],
      en: ["Art direction for the Bosch annual report and Würth's monthly magazine, in print and digital"],
    },
  },
  {
    period: "2016 – 2018",
    role: { de: "Art Director, Communication & Web Designer", en: "Art Director, Communication & Web Designer" },
    company: "Ratbacher · freiberuflich · MaritzCX",
    points: {
      de: ["Employer-Branding- und Kommunikationsmaterialien, Art Direction für Agentur- und Direktkunden, Web-Interfaces"],
      en: ["Employer branding and communication materials, art direction for agency and direct clients, web interfaces"],
    },
  },
];

export const education: { period: string; title: Localized<string>; school: string }[] = [
  { period: "IHK", title: { de: "Zertifizierter AI Visual Engineer", en: "Certified AI Visual Engineer" }, school: "SuperCode" },
  { period: "2023", title: { de: "Zertifizierter UX/UI Designer", en: "Certified UX/UI Designer" }, school: "SuperCode" },
  { period: "2022 – 2023", title: { de: "Zertifizierter Web Developer", en: "Certified Web Developer" }, school: "neuefische" },
  { period: "2013 – 2016", title: { de: "Kommunikationsdesigner, Abschluss 1,2", en: "Communication Designer, final grade 1.2 (A)" }, school: "HTK Akademie für Gestaltung" },
];

export const skills: { label: Localized<string>; items: Localized<string> }[] = [
  { label: { de: "Design & Konzeption", en: "Design & concept" }, items: { de: "Art Direction, Brand Design, Corporate Design, UX/UI, Prototyping, Typografie, Bildredaktion", en: "Art direction, brand design, corporate design, UX/UI, prototyping, typography, photo editing" } },
  { label: { de: "Software", en: "Software" }, items: { de: "Adobe Creative Cloud, Figma, FigJam, Miro", en: "Adobe Creative Cloud, Figma, FigJam, Miro" } },
  { label: { de: "Web & Technik", en: "Web & tech" }, items: { de: "HTML, CSS, JavaScript, React, Next.js, Git", en: "HTML, CSS, JavaScript, React, Next.js, Git" } },
  { label: { de: "KI", en: "AI" }, items: { de: "KI-gestützte Bild-, Video- und Content-Produktion, Prompt Engineering", en: "AI-assisted image, video and content production, prompt engineering" } },
  { label: { de: "Arbeitsweise", en: "Ways of working" }, items: { de: "Agil, Scrum, Jira, Teamlead, Stakeholder-Management", en: "Agile, Scrum, Jira, team lead, stakeholder management" } },
];

export const languages: Localized<string>[] = [
  { de: "Deutsch – verhandlungssicher", en: "German – fluent" },
  { de: "Englisch – verhandlungssicher", en: "English – fluent" },
  { de: "Tamil – verhandlungssicher", en: "Tamil – fluent" },
  { de: "Französisch – Grundkenntnisse", en: "French – basic" },
];

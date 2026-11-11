/**
 * UI-Texte Deutsch – Grundlage: Texte von Nimalan (20.10.2026), sprachlich überarbeitet am 11.11.2026.
 * Durchgehend Deutsch, Ich-Form, Ansprache „du“. Englisch nur bei etablierten Fachbegriffen
 * (z. B. Art Direction, Corporate Design, UX/UI) und offiziellen Job- und Zertifikatstiteln.
 */
const de = {
  meta: {
    siteName: "nimbaland.studio",
    defaultTitle: "nimbaland.studio – Markenauftritte, Websites und KI-Bildwelten aus Düsseldorf",
    defaultDescription:
      "Ich bin Nimba (Nimalan Suntharalingam), Creative Director und Designer mit Studio in Düsseldorf. Ich entwickle Markenauftritte, Websites und KI-gestützte Bildwelten für kleine Unternehmen, Praxen und Gastronomie.",
  },
  a11y: {
    skipToContent: "Zum Inhalt springen",
    mainNav: "Hauptnavigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    languageSwitch: "Sprache wählen",
    breadcrumb: "Brotkrumen-Navigation",
    externalLink: "öffnet in neuem Tab",
  },
  nav: {
    menu: "Menü",
    home: "Start",
    work: "Projekte",
    services: "Leistungen",
    about: "Über mich",
    contact: "Kontakt",
    cta: "Projekt anfragen",
    imprint: "Impressum",
    privacy: "Datenschutz",
    closeMenu: "Menü schließen",
  },

  /* ---------- 01 / Homepage ---------- */
  hero: {
    hello: "Hi, ich bin Nimba.",
    /** Headline: Text vor dem Akzentwort, Akzentwort (kursiv, unterstrichen), danach der Punkt. */
    headline: "Ich mache deine Marke",
    accent: "sichtbar",
    intro:
      "Mit Markenauftritten, Websites und KI‑gestützten Bildwelten – für kleine Unternehmen, Praxen und Gastronomie. Mein Studio sitzt in Düsseldorf.",
    servicesCta: "🔥 So kann ich dir helfen",
    workCta: "Projekte ansehen",
    recentWork: "Neuestes Projekt",
  },

  ticker: {
    label: "Aus meiner bisherigen Arbeit",
    puzzle: "Dein Logo hier?",
  },
  recognition: {
    eyebrow: "Typische Ausgangslagen",
    title: "Kommt dir das bekannt vor?",
    intro: "Die meisten Projekte beginnen nicht mit einem Briefing, sondern mit einem Gefühl: Da geht mehr.",
    proof: "So habe ich es gelöst",
    outro: "Wie das konkret aussieht, zeigen meine Projekte.",
  },
  work: {
    eyebrow: "Ausgewählte Projekte",
    sectionTitle: "Drei Projekte im Detail.",
    sectionIntro: [
      "Jeweils mit der Frage am Anfang, der Idee dahinter und der Entscheidung, die den Unterschied gemacht hat.",
    ],
    allWork: "Alle Projekte",
    viewProject: "Projekt ansehen",
    challenge: "Die Frage",
    idea: "Die Idee",
    decision: "Die Entscheidung",
    moreTitle: "Neugierig auf mehr?",
    moreBody: "In der Übersicht findest du alle Projekte – von Verpackung über Editorial Design bis zum App-Konzept.",
    scrollHint: "Scrollen oder Pfeile",
    prevProject: "Vorheriges Projekt",
    nextProject: "Nächstes Projekt",
    draftBadge: "Entwurf – nicht freigegeben",
    emptyTitle: "Die Projekte werden gerade aufbereitet.",
    emptyBody: "Gern zeige ich dir ausgewählte Projekte im persönlichen Gespräch oder schicke dir eine Mappe zu.",
    emptyCta: "Projekt anfragen",
  },
  approach: {
    eyebrow: "Vorgehen",
    dragHint: "Zum Bewegen ziehen",
  },
  expertise: {
    eyebrow: "Leistungen",
    sectionTitle: "Wobei ich dir helfen kann.",
    intro: "Was du davon brauchst, entscheidest du. Ich begleite einzelne Schritte oder das ganze Projekt – als feste Ansprechperson von der ersten Frage bis zum fertigen Design.",
    introMore: "",
    processTitle: "So arbeite ich",
    exampleLabel: "Projektbeispiel",
    focusLabel: "Schwerpunkt",
    ctaText: "Du willst wissen, was davon zu deinem Projekt passt?",
    cta: "Projekt anfragen",
    process: [
      { title: "Verstehen", body: "Markt, Zielgruppe und das, was dich ausmacht." },
      { title: "Schärfen", body: "Positionierung, Kernidee und Tonalität." },
      { title: "Gestalten", body: "Identität, Bildwelt und Interfaces." },
      { title: "Umsetzen", body: "Rollout, Website, Kampagne – bis ins Detail." },
    ],
  },
  marquee: {
    label: "Projekt starten – schreib mir",
    items: ["Du hast etwas Gutes?", "Lass es uns sichtbar machen", "KI-gestützte Bildwelten", "Projekt anfragen", "Marke · Website · Bildwelten"],
  },
  aboutPreview: {
    eyebrow: "Die Person dahinter",
    sectionTitle: "Hi, I'm Nimba.",
    lead: "Ich glaube nicht an Gestaltung nach Schema F.",
    body: [
      "Seit über zehn Jahren entwickle ich Marken, gestalte Kampagnen und bringe digitale Auftritte zum Leben. Meine Erfahrung reicht vom Brand & Design Management bei Kratzert über Senior Art Direction bei Colliers International und Design bei Savills bis zur Art Direction für Bosch und Würth. Seit 2018 führe ich außerdem mein eigenes Studio.",
      "Kunst, Mode und visuelle Kultur prägen meinen Blick. Generative KI nutze ich, um Ideen früher sichtbar zu machen und mehr Richtungen auszuprobieren. Was am Ende zu deiner Marke passt, entscheide ich mit dir – nicht die Maschine.",
    ],
    facts: [
      { value: "10+", label: "Jahre Design & Art Direction" },
      { value: "66", label: "Kund:innen seit 2018" },
      { value: "AI", label: "Zertifizierter AI Visual Engineer" },
    ],
    contactCta: "Projekt anfragen",
    cta: "Mehr über mich",
  },
  contactCta: {
    eyebrow: "Kontakt",
    title: "Erzähl mir, woran du arbeitest.",
    body: "Du brauchst kein fertiges Briefing. Ein paar Sätze reichen: Worum geht es, wo stehst du gerade, und gibt es einen Zeitrahmen?",
    prompt: "",
    stepsTitle: "So geht es weiter",
    steps: [
      "Du schreibst mir – per Formular oder E-Mail.",
      "Ich lese jede Nachricht selbst und antworte dir persönlich.",
      "Im ersten Gespräch klären wir Ziel, Umfang und Zeitrahmen.",
    ],
    button: "Projekt anfragen",
    availability: "Offen für ausgewählte Projekte und Kooperationen.",
  },

  /* ---------- 02 / About ---------- */
  about: {
    pageTitle: "Über mich.",
    name: "Nimalan Suntharalingam",
    role: "Creative Director & Brand Designer · Zertifizierter AI Visual Engineer",
    intro: "Ich bin Nimalan – die meisten nennen mich Nimba. Creative Director, Designer und Gründer von nimbaland.studio.",
    body: [
      "Gute Gestaltung beginnt für mich mit Fragen: Wofür steht eine Marke? Welche Geschichte erzählt sie? Was soll bei den Menschen hängen bleiben?",
      "Seit über zehn Jahren entwickle ich Marken, gestalte Kampagnen und bringe digitale Auftritte zum Leben. Meine Erfahrung reicht vom Brand & Design Management bei Kratzert über Senior Art Direction bei Colliers International und Design bei Savills bis zur Art Direction für Bosch und Würth. Seit 2018 führe ich außerdem mein eigenes Studio.",
    ],
    drivesTitle: "Was mich antreibt",
    drivesBody:
      "Neugier, Unabhängigkeit und der Anspruch, etwas Eigenständiges zu gestalten statt etwas Austauschbares.",
    studioNote: "",
    beyondTitle: "Abseits vom Bildschirm.",
    beyondBody: [
      "Kunst, Mode und visuelle Kultur prägen meinen Blick – deshalb denke ich Design nie nur in einer Disziplin. Ich arbeite am liebsten direkt mit den Menschen, die etwas bewegen wollen.",
    ],
    closing: "Studio in Düsseldorf. Projekte weit darüber hinaus.",
    cta: "Projekt anfragen",
    portraitAlt: "Porträt von Nimalan Suntharalingam",
  },

  /* ---------- 03 / Work ---------- */
  workPage: {
    pageTitle: "Projekte.",
    subtitle: "Ideen, die umgesetzt wurden.",
    intro: "Unterschiedliche Branchen. Unterschiedliche Herausforderungen. Ein gemeinsamer Anspruch: Gestaltung mit einer klaren Idee.",
  },
  caseStudy: {
    overview: "Überblick",
    client: "Kunde",
    year: "Jahr",
    role: "Rolle",
    services: "Leistungen",
    challenge: "Ausgangslage",
    approach: "Vorgehen",
    solution: "Lösung",
    outcomes: "Ergebnisse",
    gallery: "Projektbilder",
    nextProject: "Nächstes Projekt",
    backToWork: "Zurück zu allen Projekten",
    missingText: "Die ausführliche Projektbeschreibung folgt.",
  },

  /* ---------- 04 / Services ---------- */
  services: {
    eyebrow: "Leistungen",
    pageTitle: "So kann ich dir helfen.",
    intro: [
      "Ich begleite Projekte von der ersten Frage bis zum fertigen Design – strategisch, konzeptionell oder direkt in der Umsetzung. Du bekommst alles aus einer Hand.",
    ],
    deliverables: "Was dazugehört",
    closingTitle: "Eine gute Idee verdient eine gute Umsetzung.",
    closingBody:
      "Du brauchst Unterstützung für ein konkretes Projekt oder suchst einen kreativen Partner für eine langfristige Zusammenarbeit?",
    closingCta: "Projekt anfragen",
  },

  /* ---------- 05 / Contact ---------- */
  contact: {
    eyebrow: "Kontakt",
    pageTitle: "Lass uns etwas gestalten, das bleibt.",
    intro: [
      "Neue Marke, bestehender Auftritt oder digitale Idee: Erzähl mir, woran du arbeitest und was du erreichen möchtest. Ich antworte persönlich.",
    ],
    formTitle: "Ein gutes Gespräch ist ein guter Anfang.",
    meta: ["Studio in Düsseldorf", "Marke · Website · KI-Bildwelten"],
    emailLabel: "E-Mail",
    socialTitle: "Profile",
    form: {
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen / Marke",
      optional: "optional",
      projectType: "Worum geht es?",
      projectTypePlaceholder: "Bitte wählen",
      message: "Deine Nachricht",
      messageHint: "Mindestens 20 Zeichen.",
      messagePlaceholder: "Worum geht es? Wo stehst du gerade? Gibt es einen Zeitrahmen?",
      privacy: "Ich habe die Datenschutzhinweise gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden.",
      privacyLink: "Datenschutzhinweise",
      submit: "Anfrage senden",
      submitting: "Wird gesendet …",
      honeypot: "Dieses Feld bitte leer lassen",
      other: "Etwas anderes",
    },
    errors: {
      name: "Bitte gib deinen Namen an.",
      email: "Bitte gib eine gültige E-Mail-Adresse an, z. B. name@firma.de.",
      message: "Deine Nachricht ist zu kurz. Bitte schreib mindestens 20 Zeichen.",
      privacy: "Bitte bestätige die Datenschutzhinweise, damit ich deine Anfrage bearbeiten darf.",
      summary: "Bitte prüfe die markierten Felder.",
    },
    status: {
      success: "Anfrage gesendet. Danke – du hörst per E-Mail von mir.",
      notConfigured: "Das Formular ist noch nicht mit einem Postfach verbunden. Deine Nachricht wurde nicht gesendet.",
      failed: "Deine Anfrage konnte nicht gesendet werden. Bitte versuch es in ein paar Minuten noch einmal.",
      emailFallback: "Du erreichst mich auch direkt per E-Mail:",
    },
  },

  legal: {
    draftNotice: "Hinweis: Die Anbieterangaben sind freigegeben. Weitere Pflichtangaben (z. B. Verantwortlicher für Inhalte, ggf. USt-ID) werden vor dem Launch ergänzt.",
  },
  footer: {
    tagline: "Unabhängiges Designstudio",
    location: "Düsseldorf, Deutschland",
    rights: "Alle Rechte vorbehalten.",
    localTime: "Ortszeit:",
    pages: "Seiten",
    connect: "Profile",
  },
  notFound: {
    title: "Diese Seite gibt es nicht",
    body: "Der Link ist veraltet oder die Adresse enthält einen Tippfehler.",
    cta: "Zur Startseite",
  },
};

export default de;
export type Dictionary = typeof de;

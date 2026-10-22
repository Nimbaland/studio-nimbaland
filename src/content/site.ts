/**
 * Zentrale Studio-Angaben.
 * Alles, was `null` ist, fehlt noch und wird auf der Website als Platzhalter
 * bzw. gar nicht angezeigt. Nichts hier erfinden – nur freigegebene Angaben eintragen.
 */
export const site = {
  name: "nimbaland.studio",
  uiName: "nimbaland.studio",
  founder: "Nimalan Suntharalingam",
  city: "Düsseldorf",

  /** Basis-URL – Domain vor Launch bestätigen (.env NEXT_PUBLIC_SITE_URL). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  brand: {
    /**
     * Original-Logos aus der Illustrator-Datei als SVG ablegen und hier eintragen.
     * Solange `null`, zeigt die Website einen markierten Text-Platzhalter
     * (kein nachgebautes Logo).  → LOGO_ASSET_REQUIRED
     */
    // Original-Wortmarke (Asset_1). Die helle Variante ist dieselbe Datei mit weißer
    // statt schwarzer Schrift. Palette final freigegeben (21.10.2026).
    logoOnDark: "/brand/nimbaland-studio-logo-light.svg" as string | null,
    logoOnLight: "/brand/nimbaland-studio-logo-dark.svg" as string | null,
    /** Seitenverhältnis der Wortmarke laut viewBox (499.92 × 79). */
    logoRatio: 499.92 / 79,
    // Signet-Varianten (Asset_2: dunkel, Asset_5: Verlauf) – Asset_2 dient als Favicon.
    symbol: "/brand/studio-nimbaland-symbol-dark.svg" as string | null,
    symbolGradient: "/brand/studio-nimbaland-symbol-gradient.svg" as string | null,
  },

  contact: {
    /** Freigegebene Kontaktadresse (von Nimalan im Kontakttext angegeben, 20.10.2026). */
    email: "nimalan@posteo.de" as string | null,
    /** Studio-Adresse, von Nimalan freigegeben (21.10.2026). */
    address: { name: "nimbaland.studio", street: "Lindenstraße 68", city: "40233 Düsseldorf", country: "Deutschland" },
  },

  /** Social-Profile – von Nimalan bestätigt (21.10.2026). */
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nimbaland" },
    { label: "Instagram", url: "https://www.instagram.com/nimbaland.studios" },
  ] as { label: string; url: string }[],

  /**
   * Organische 3D-Textur im Hero (aus deinem Screenshot / Original-Rendering).
   * Bild (WebP/AVIF, transparent oder auf Schwarz) und optional ein kurzes Loop-Video.
   * Solange `null`, bleibt der Hero rein typografisch.  → ASSET_REQUIRED
   */
  heroVisual: {
    image: null as string | null, // z. B. "/brand/hero-texture.webp"
    video: null as string | null, // z. B. "/brand/hero-texture.mp4" (stumm, Loop)
  },

  /** Porträt für About-Seite. → ASSET_REQUIRED */
  portrait: "/brand/portrait.webp" as string | null, // Porträt in hoher Auflösung (1200×1774)

  /** "Recent Work" im Hero. Fällt auf das erste Featured-Projekt zurück, solange das Projekt noch fehlt. */
  recentWorkSlug: "tina-sood",

  /** Startseite „Work, up close“: Projekte mit Kurzgeschichte (story), in dieser Reihenfolge. */
  homeWork: ["frauenzimmer-wolfsburg", "tervica", "circle-up", "das-lebensbuch", "the-grid-bar"],

  /** Startseite „Sound familiar?“: Situationen von Kundinnen und Kunden, jeweils mit einem Projekt als Beleg. */
  recognition: [
    { slug: "mkg-koeln-west", de: "Du eröffnest etwas Neues – und brauchst vom Logo bis zur Website alles auf einmal.", en: "You're opening something new – and need everything at once, from logo to website." },
    { slug: "aurum-herbs", de: "Du hast mehrere Standorte und willst trotzdem wie eine Marke auftreten.", en: "You have several locations and still want to look like one brand." },
    { slug: "bales-smart-home", de: "Deine Arbeit ist gut – aber zu wenige Menschen wissen davon.", en: "Your work is good – but too few people know about it." },
    { slug: "tina-sood", de: "Menschen sollen dein Angebot auf einen Blick verstehen und dir vertrauen.", en: "People should understand your offer at a glance – and trust you." },
  ],
};

export const showDrafts =
  process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

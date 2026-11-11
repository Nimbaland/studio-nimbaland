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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://studio.nimbaland.com",

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
    email: "nimba@nimbaland.com" as string | null,
    /** Telefon und WhatsApp Business – von Nimalan freigegeben (11.11.2026). */
    phone: "+49 155 659 107 37",
    phoneHref: "tel:+4915565910737",
    whatsapp: "https://wa.me/4915565910737",
    /** Studio-Adresse, von Nimalan freigegeben (21.10.2026). */
    address: { name: "nimbaland.studio", street: "Lindenstraße 68", city: "40233 Düsseldorf", country: "Deutschland" },
  },

  /** Social-Profile – von Nimalan bestätigt (21.10.2026). */
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nimbaland" },
    { label: "Instagram", url: "https://www.instagram.com/nimbaland.studio" },
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
  recentWorkSlug: "lumiq",
  /**
   * Logo-Band am Ende der Startseite: Logos aus eigenen Kundenprojekten (bereits im Portfolio freigegeben),
   * einfarbig umgesetzt. w/h = Anzeigegröße in px (optisch angeglichen).
   */
  clients: [
    { slug: "herzhaft", name: "Herzhaft", src: "/clients/herzhaft.png", w: 40, h: 44 },
    { slug: "tervica", name: "Tervica", src: "/clients/tervica.png", w: 82, h: 41 },
    { slug: "circle-up", name: "Circle Up", src: "/clients/circle-up.png", w: 51, h: 44 },
    { slug: "mkg-koeln-west", name: "MKG Köln West", src: "/clients/mkg-koeln-west.png", w: 99, h: 34 },
    { slug: "das-lebensbuch", name: "Das Lebensbuch", src: "/clients/das-lebensbuch.png", w: 44, h: 44 },
    { slug: "aurum-herbs", name: "Aurum Herbs", src: "/clients/aurum-herbs.png", w: 109, h: 31 },
    { slug: "bales-smart-home", name: "Bales Smart Home", src: "/clients/bales-smart-home.png", w: 90, h: 38 },
    { slug: "the-grid-bar", name: "The Grid Bar", src: "/clients/the-grid-bar.png", w: 82, h: 41 },
    { slug: "physiofit-mobil", name: "Physiofit-Mobil", src: "/clients/physiofit-mobil.png", w: 48, h: 44 },
    { slug: "flamingo-swift", name: "Flamingo Swift", src: "/clients/flamingo-swift.png", w: 106, h: 32 },
  ],
  /** Stehen in „Selected work“ ganz vorn, unabhängig vom Datum. */
  pinnedWork: ["lumiq"] as string[],

  /** Startseite „Work, up close“: Projekte mit Kurzgeschichte (story), in dieser Reihenfolge. */
  homeWork: ["lumiq", "frauenzimmer-wolfsburg", "tervica", "circle-up", "das-lebensbuch", "the-grid-bar"],

  /** Startseite „Sound familiar?“: Situationen von Kundinnen und Kunden, jeweils mit einem Projekt als Beleg. */
  recognition: [
    { slug: "mkg-koeln-west", de: "Du eröffnest etwas Neues – und brauchst vom Logo bis zur Website alles auf einmal.", en: "You're opening something new – and need everything at once, from logo to website." },
    { slug: "aurum-herbs", de: "Du hast mehrere Standorte und willst trotzdem wie eine Marke auftreten.", en: "You have several locations and still want to look like one brand." },
    { slug: "bales-smart-home", de: "Deine Arbeit ist gut – aber zu wenige Menschen wissen davon.", en: "Your work is good – but too few people know about it." },
    { slug: "tina-sood", de: "Menschen sollen dein Angebot auf einen Blick verstehen und dir vertrauen.", en: "People should understand your offer at a glance – and trust you." },
  ],
};

/**
 * Kontaktformular nur zeigen, wenn es Nachrichten wirklich zustellen kann (CONTACT_WEBHOOK_URL gesetzt).
 * Sonst erscheint ein E-Mail-Block – so werden keine Daten erfasst, die nirgendwo ankommen.
 */
export const contactFormEnabled = Boolean(process.env.CONTACT_WEBHOOK_URL);

export const showDrafts =
  process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

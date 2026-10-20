/**
 * Zentrale Studio-Angaben.
 * Alles, was `null` ist, fehlt noch und wird auf der Website als Platzhalter
 * bzw. gar nicht angezeigt. Nichts hier erfinden – nur freigegebene Angaben eintragen.
 */
export const site = {
  name: "Studio.Nimbaland",
  uiName: "studio.nimbaland",
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
    // statt schwarzer Schrift – Farbvariante vor Launch bitte freigeben.
    logoOnDark: "/brand/studio-nimbaland-logo-light.svg" as string | null,
    logoOnLight: "/brand/studio-nimbaland-logo-dark.svg" as string | null,
    /** Seitenverhältnis der Wortmarke laut viewBox (498.39 × 79). */
    logoRatio: 498.39 / 79,
    // Signet-Varianten (Asset_2: dunkel, Asset_5: Verlauf) – Asset_2 dient als Favicon.
    symbol: "/brand/studio-nimbaland-symbol-dark.svg" as string | null,
    symbolGradient: "/brand/studio-nimbaland-symbol-gradient.svg" as string | null,
  },

  contact: {
    /** Freigegebene Kontaktadresse (von Nimalan im Kontakttext angegeben, 20.10.2026). */
    email: "nimalan@posteo.de" as string | null,
  },

  /**
   * Profile aus deinen bisherigen Angaben.
   * ⚠ Vor Launch bestätigen, dass diese auf der Website erscheinen sollen.
   */
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
  recentWorkSlug: "frauenzimmer-wolfsburg",
};

export const showDrafts =
  process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

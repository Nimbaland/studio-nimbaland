import localFont from "next/font/local";

/**
 * Schriften, self-hosted (SIL Open Font License, siehe ./licenses).
 * Rollen:
 *  - Playfair Display: Hero, Headlines (Regular), Akzente (Italic) – per @font-face in src/styles/fonts.css
 *  - Manrope: Navigation (Medium), Fließtext (Regular)
 *  - IBM Plex Mono: Eyebrows / Labels (Medium, Uppercase)
 */
export const manrope = localFont({
  src: "./Manrope-Variable.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "Helvetica Neue", "Arial", "sans-serif"],
});

export const plexMono = localFont({
  src: "./IBMPlexMono-Medium.woff2",
  weight: "500",
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const fontVariables = `${manrope.variable} ${plexMono.variable}`;

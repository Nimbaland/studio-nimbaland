import localFont from "next/font/local";

/**
 * Schriften, self-hosted (SIL Open Font License, siehe ./licenses) – identisch mit nimbaland.studio.
 *  - Playfair Display: Headlines (per @font-face in globals.css)
 *  - Manrope: Navigation und Fließtext
 *  - IBM Plex Mono: Labels
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

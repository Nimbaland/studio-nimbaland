import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  /**
   * nimbaland.spices läuft als eigene Next.js-App (Ordner /spices, eigenes Vercel-Projekt „nimbaland-spices“, basePath /spices)
   * und erscheint hier als Unterseite. SPICES_ORIGIN = Adresse des Spices-Projekts, z. B. https://nimbaland-spices.vercel.app.
   * Ohne SPICES_ORIGIN gibt es keine Weiterleitung und /spices bleibt 404 — die Live-Seite ändert sich also erst mit dieser Variable.
   */
  async rewrites() {
    const origin = process.env.SPICES_ORIGIN?.replace(/\/$/, "");
    if (!origin) return [];
    return [
      { source: "/spices", destination: `${origin}/spices` },
      { source: "/spices/:path*", destination: `${origin}/spices/:path*` },
    ];
  },
};

export default nextConfig;

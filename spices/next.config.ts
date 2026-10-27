import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Unterseite von nimbaland.studio: https://…/spices
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  // Liegt im Repo von nimbaland.studio: Turbopack soll nur diesen Ordner als Projektwurzel nutzen.
  turbopack: { root: path.resolve(__dirname) },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;

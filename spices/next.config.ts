import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Unterseite von nimbaland.studio: https://…/spices
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;

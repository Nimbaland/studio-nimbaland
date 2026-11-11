import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Produktion (studio.nimbaland.com) ist für Suchmaschinen und KI-Assistenten freigegeben.
 * Vorschau-Deployments bleiben gesperrt, damit keine doppelten Inhalte im Index landen.
 * Notbremse: SITE_INDEXABLE=false sperrt auch die Produktion.
 */
export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : process.env.SITE_INDEXABLE === "true";
  if (!production || process.env.SITE_INDEXABLE === "false") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

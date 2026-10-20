import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Bis zum Launch gesperrt. Mit SITE_INDEXABLE=true freigeben. */
export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_INDEXABLE !== "true") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}

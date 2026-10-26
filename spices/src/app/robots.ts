import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") + bp;
  if (process.env.SITE_INDEXABLE !== "true") return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/", disallow: [`${bp}/studio`, `${bp}/de/cart`, `${bp}/en/cart`] }], sitemap: `${base}/sitemap.xml` };
}

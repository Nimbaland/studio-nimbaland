import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getProducts, getRecipes } from "@/lib/content";

const base = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") + (process.env.NEXT_PUBLIC_BASE_PATH ?? "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const out: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const p of ["", "/shop", "/recipes", "/story", "/faq", "/datenschutz"]) out.push({ url: `${base}/${l}${p}` });
    for (const p of await getProducts(l)) out.push({ url: `${base}/${l}/shop/${p.slug}` });
    for (const r of await getRecipes(l)) if (r.testStatus === "approved") out.push({ url: `${base}/${l}/recipes/${r.slug}` });
  }
  return out;
}

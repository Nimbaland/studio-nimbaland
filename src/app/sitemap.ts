import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/i18n/config";
import { getProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/work", "/services", "/about", "/contact", ...getProjects().filter((p) => p.published).map((p) => `/work/${p.slug}`)];
  return paths.flatMap((path) =>
    locales.map((l) => ({
      url: `${site.url}/${l}${path}`,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${site.url}/${x}${path}`])) },
    })),
  );
}

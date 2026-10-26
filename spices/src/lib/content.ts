import "server-only";
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import localData from "@content/recipes.json";
import { apiVersion, dataset, projectId, sanityConfigured } from "@/sanity/env";
import type { Locale } from "@/i18n/config";
import type { Img, Product, Recipe } from "./types";
import { LOCAL_PRODUCTS } from "./local-products";
import { getChefs } from "./blends";
import { asset } from "@/lib/base";

/**
 * Datenzugriff. Mit Sanity-Projekt-ID lädt die Website aus dem CMS (privates Dataset, Lese-Token nur auf dem Server).
 * Ohne Projekt-ID nutzt sie die Startinhalte aus /content/recipes.json, damit Entwicklung und Vorschau sofort laufen.
 */

/** Ungeprüfte Rezepte nur in der Entwicklung oder auf einer ausdrücklich markierten Vorschau-Instanz zeigen. */
export const showDrafts = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

const client = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: "published", token: process.env.SANITY_API_READ_TOKEN })
  : null;
const builder = sanityConfigured ? createImageUrlBuilder({ projectId, dataset }) : null;

type SanityImage = { asset?: { _ref: string }; alt?: string; source?: Img["source"]; credit?: string; hotspot?: unknown; crop?: unknown };
function img(i: SanityImage | undefined, w = 1200): Img | undefined {
  if (!i?.asset || !builder) return undefined;
  return { src: builder.image(i).width(w).fit("max").auto("format").url(), alt: i.alt ?? "", source: i.source, credit: i.credit };
}

const RECIPE_FIELDS = `
  _id, language, "slug": slug.current, title, teaser, intro,
  "category": category->{ "key": key.current, "title": title[$lang], "intro": intro[$lang] },
  "tags": tags[]->{ "key": key.current, "title": title[$lang] },
  author, guestName, chefId, servings, prepMinutes, cookMinutes, timesVerified, ingredients, steps,
  "productSlug": product->slug.current, dosage, tip, allergenNote, image, testStatus, featured,
  "translationSlug": coalesce(translation->slug.current, *[_type == "recipe" && translation._ref == ^._id][0].slug.current),
  seo`;

type RawRecipe = {
  _id: string; language: Locale; slug: string; title: string; teaser: string; intro: string;
  category: Recipe["category"]; tags?: Recipe["tags"]; author?: Recipe["author"]; guestName?: string; chefId?: string;
  servings?: number; prepMinutes?: number; cookMinutes?: number; timesVerified?: boolean;
  ingredients?: Recipe["ingredients"]; steps?: string[]; productSlug?: string; dosage?: string; tip?: string; allergenNote?: string;
  image?: SanityImage; testStatus: Recipe["testStatus"]; featured?: boolean; translationSlug?: string; seo?: Recipe["seo"];
};
function fromSanity(r: RawRecipe): Recipe {
  return {
    id: r._id, lang: r.language, slug: r.slug, title: r.title, teaser: r.teaser, intro: r.intro,
    category: r.category, tags: r.tags ?? [], author: r.author ?? "nimba", guestName: r.guestName, chefId: r.chefId,
    servings: r.servings, prep: r.prepMinutes, cook: r.cookMinutes, timesVerified: !!r.timesVerified,
    ingredients: r.ingredients ?? [], steps: r.steps ?? [], productSlug: r.productSlug, dosage: r.dosage, tip: r.tip,
    allergenNote: r.allergenNote, image: img(r.image) ?? { src: asset("/img/dish-curry.jpg"), alt: "" },
    testStatus: r.testStatus, featured: !!r.featured, translationSlug: r.translationSlug, seo: r.seo,
  };
}

/* ---------- lokale Startinhalte ---------- */
type LocalRecipe = (typeof localData.recipes)[number] & { allergenNote?: { de: string; en: string } };
function fromLocal(r: LocalRecipe, lang: Locale): Recipe {
  const x = r[lang];
  const cat = localData.categories.find((c) => c.id === r.category)!;
  const tags = localData.tags as Record<string, { de: string; en: string }>;
  return {
    id: `${r.id}-${lang}`, lang, slug: lang === "de" ? r.id : r.slugEn, title: x.title, teaser: x.teaser, intro: x.intro,
    category: { key: cat.id, title: cat[lang], intro: lang === "de" ? cat.introDe : cat.introEn },
    tags: r.tags.map((k) => ({ key: k, title: tags[k][lang] })),
    author: r.author as Recipe["author"], chefId: getChefs().find((c) => c.recipes.includes(r.id))?.id, servings: r.servings ?? undefined, prep: r.prep ?? undefined, cook: r.cook ?? undefined,
    timesVerified: r.timesChecked,
    ingredients: x.ingredients.map((t) => (/:$/.test(t) ? { text: t.replace(/:$/, ""), isHeading: true } : { text: t })),
    steps: x.steps, productSlug: r.product ?? undefined, dosage: x.dosage, tip: x.tip, allergenNote: r.allergenNote?.[lang],
    image: { src: asset("/" + r.img), alt: x.title, source: r.imgSource as Img["source"], credit: r.imgCredit },
    testStatus: r.status === "approved" ? "approved" : "draft", featured: r.featured,
    translationSlug: lang === "de" ? r.slugEn : r.id,
  };
}

/* ---------- öffentliche Funktionen ---------- */
const visible = (r: Recipe) => showDrafts || r.testStatus === "approved";

export async function getRecipes(lang: Locale): Promise<Recipe[]> {
  if (client) {
    const rows = await client.fetch<RawRecipe[]>(`*[_type == "recipe" && language == $lang] | order(featured desc, title asc){${RECIPE_FIELDS}}`, { lang }, { next: { revalidate: 120, tags: ["recipe"] } });
    return rows.map(fromSanity).filter(visible);
  }
  return (localData.recipes as LocalRecipe[]).map((r) => fromLocal(r, lang)).filter(visible);
}

export async function getRecipe(lang: Locale, slug: string): Promise<{ recipe?: Recipe; redirectTo?: string }> {
  const all = await getRecipes(lang);
  const hit = all.find((r) => r.slug === slug);
  if (hit) return { recipe: hit };
  // Sprachwechsel mit dem Slug der anderen Sprache: auf die verknüpfte Übersetzung weiterleiten
  const other: Locale = lang === "de" ? "en" : "de";
  const source = (await getRecipes(other)).find((r) => r.slug === slug);
  if (source?.translationSlug && all.some((r) => r.slug === source.translationSlug)) return { redirectTo: source.translationSlug };
  return {};
}

export async function getCategories(lang: Locale) {
  if (client) {
    return client.fetch<{ key: string; title: string; intro?: string }[]>(`*[_type == "category"] | order(order asc){ "key": key.current, "title": title[$lang], "intro": intro[$lang] }`, { lang }, { next: { revalidate: 600 } });
  }
  return localData.categories.map((c) => ({ key: c.id, title: c[lang], intro: lang === "de" ? c.introDe : c.introEn }));
}

export async function getTags(lang: Locale) {
  if (client) return client.fetch<{ key: string; title: string }[]>(`*[_type == "tag"]{ "key": key.current, "title": title[$lang] }`, { lang }, { next: { revalidate: 600 } });
  const tags = localData.tags as Record<string, { de: string; en: string }>;
  return Object.entries(tags).map(([key, v]) => ({ key, title: v[lang] }));
}

type RawProduct = Omit<Product, "labelFront" | "labelBack" | "gallery"> & { labelFront?: SanityImage; labelBack?: SanityImage; gallery?: SanityImage[] };
export async function getProducts(lang: Locale): Promise<Product[]> {
  if (client) {
    const rows = await client.fetch<RawProduct[]>(`*[_type == "product"] | order(heat asc){
      "slug": slug.current, name, heat, "short": short[$lang], "description": description[$lang], "taste": taste[$lang], "usage": usage[$lang],
      "ingredients": ingredients[][$lang], "allergens": allergens[$lang], nutrition, nutritionBasis, "shopifyHandle": coalesce(shopifyHandle, slug.current),
      "bestBefore": bestBefore[$lang], "storage": storage[$lang], operator,
      "origin": { "ingredients": origin.ingredients[$lang], "blending": origin.blending[$lang], "filling": origin.filling[$lang] },
      "shipping": shipping[$lang], "releaseApproved": coalesce(releaseApproved, false), labelFront, labelBack, gallery }`, { lang }, { next: { revalidate: 120, tags: ["product"] } });
    return rows.map((p) => ({ ...p, labelFront: img(p.labelFront), labelBack: img(p.labelBack), gallery: (p.gallery ?? []).map((g) => img(g)).filter(Boolean) as Img[] }));
  }
  return LOCAL_PRODUCTS(lang);
}

/**
 * Redaktionelle Freigabe des Verkaufs. Preis, Füllmenge, Grundpreis und Verfügbarkeit prüft die Produktseite zusätzlich
 * je Variante direkt in Shopify. Nährwerte sind für Gewürzmischungen nicht verpflichtend (LMIV Anhang V Nr. 4).
 * Pflicht vor dem Kauf (Art. 14 LMIV): Bezeichnung, Zutaten, Allergene, Nettofüllmenge, Lebensmittelunternehmer (Name + Anschrift),
 * ggf. Aufbewahrung. MHD muss erst auf der Packung stehen.
 */
export function isSellable(p: Product): boolean {
  return p.releaseApproved && !!p.operator?.trim() && /\d/.test(p.operator) && !!p.allergens && !!p.shipping && !!p.storage
    && !!p.origin.ingredients && !!p.origin.blending && !!p.origin.filling;
}

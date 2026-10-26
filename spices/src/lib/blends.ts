import data from "@content/products.json";
import type { Locale } from "@/i18n/config";
import { asset } from "@/lib/base";

/**
 * Redaktionelle Inhalte zu den Mischungen (Zutaten-Lexikon, Dosierung, Herkunft, Gastkoch).
 * Keine Preise, Varianten oder Bestände: die kommen ausschließlich aus Shopify.
 * Bilder mit imgProvisional = true sind vorläufig und werden durch die finalen Zutatenfotos ersetzt.
 */
export type Ingredient = {
  id: string; order: number; latin: string; img: string | null; provisional: boolean;
  name: string; nameOther: string; about: string; aroma: string; role: string; tips: string[];
};
export type Dosage = { amount: string; when: string; adjust: string };
export type Chef = { id: string; name: string; nameConfirmed: boolean; portrait: string | null; workplace: string | null; style: string | null; intro: string | null; recipes: string[] };

type RawIng = (typeof data.ingredients)[number];
const byId = new Map<string, RawIng>(data.ingredients.map((i) => [i.id, i]));
const other = (l: Locale): Locale => (l === "de" ? "en" : "de");

export function getBlend(slug: string, locale: Locale) {
  const p = (data.products as Record<string, { ingredients: string[]; dosage: Record<Locale, Dosage> }>)[slug];
  if (!p) return null;
  const ingredients: Ingredient[] = p.ingredients.map((id, n) => {
    const i = byId.get(id)!;
    const roleOverride = (i as RawIng & { roleBySlug?: Record<string, Record<Locale, string>> }).roleBySlug?.[slug]?.[locale];
    return {
      id, order: n + 1, latin: i.latin, img: i.img ? asset("/" + i.img) : null, provisional: i.imgProvisional,
      name: i[locale].name, nameOther: i[other(locale)].name, about: i[locale].about, aroma: i[locale].aroma,
      role: roleOverride ?? i.role[locale], tips: i[locale].tips,
    };
  });
  return { ingredients, dosage: p.dosage[locale] };
}

export function getOrigin(locale: Locale) {
  const o = data.origin as { ingredients: Record<Locale, string>; blending: Record<Locale, string>; filling: Record<Locale, string>; address: string | null };
  return { ingredients: o.ingredients[locale], blending: o.blending[locale], filling: o.filling[locale], address: o.address };
}

export function getChefs(): Chef[] { return data.chefs as Chef[]; }
export function getChef(id: string): Chef | undefined { return getChefs().find((c) => c.id === id); }
/** Gastkoch-Seiten erst öffentlich, wenn die Schreibweise des Namens bestätigt ist. */
export const chefVisible = (c: Chef, drafts: boolean) => drafts || c.nameConfirmed;

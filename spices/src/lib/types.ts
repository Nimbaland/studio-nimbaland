import type { Locale } from "@/i18n/config";

export type Img = { src: string; alt: string; source?: "real" | "ai" | "stock"; credit?: string };
export type Ref = { key: string; title: string; intro?: string };
export type Heat = "mild" | "hot";

export type Recipe = {
  id: string;
  lang: Locale;
  slug: string;
  title: string;
  teaser: string;
  intro: string;
  category: Ref;
  tags: Ref[];
  author: "nimba" | "guest";
  guestName?: string;
  /** Verknüpfter Gastkoch (Seite /chefs/[id]) */
  chefId?: string;
  servings?: number;
  prep?: number;
  cook?: number;
  timesVerified: boolean;
  ingredients: { text: string; isHeading?: boolean }[];
  steps: string[];
  productSlug?: string;
  dosage?: string;
  tip?: string;
  allergenNote?: string;
  image: Img;
  testStatus: "draft" | "cooked" | "approved";
  featured: boolean;
  /** Slug der Übersetzung in der jeweils anderen Sprache */
  translationSlug?: string;
  seo?: { title?: string; description?: string };
};

export type Nutrition = Partial<Record<"energyKj" | "energyKcal" | "fat" | "saturates" | "carbs" | "sugars" | "fibre" | "protein" | "salt", number>>;

export type Product = {
  slug: string;
  /** Handle des Produkts in Shopify (Quelle für Varianten, Preise, Grundpreis, Bestand). Standard: slug */
  shopifyHandle?: string;
  name: string;
  heat: Heat;
  short: string;
  description: string;
  taste?: string;
  usage?: string;
  ingredients: string[];
  allergens?: string;
  /** Freiwillig; nur mit dokumentierter Grundlage (Analyse oder Berechnung) veröffentlichen. */
  nutrition?: Nutrition;
  nutritionBasis?: string;
  bestBefore?: string;
  storage?: string;
  /** Name und Anschrift des verantwortlichen Lebensmittelunternehmers (Art. 8, 9 Abs. 1 h LMIV). */
  operator?: string;
  origin: { ingredients?: string; blending?: string; filling?: string };
  shipping?: string;
  releaseApproved: boolean;
  labelFront?: Img;
  labelBack?: Img;
  gallery: Img[];
};

import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import Link from "next/link";
import { href } from "@/i18n/config";
import { getCategories, getProducts, getRecipes, getTags, showDrafts } from "@/lib/content";
import { chefVisible, getChefs } from "@/lib/blends";
import { Newsletter } from "@/components/Newsletter";
import { RecipeBrowser } from "@/components/interactive";
import { Arrow, PageHead } from "@/components/ui";
import { asset } from "@/lib/base";
import { newsletterConfigured } from "@/lib/newsletter";

export const revalidate = 120;

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t("rx.h1"), description: t("rx.lead"), alternates: { languages: { de: asset("/de/recipes"), en: asset("/en/recipes") } } };
}

export default async function Recipes({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const [recipes, products, categories, tags] = await Promise.all([getRecipes(locale), getProducts(locale), getCategories(locale), getTags(locale)]);
  const chefs = getChefs().filter((c) => chefVisible(c, showDrafts));
  return (
    <>
      <PageHead label={t("rx.label")} title={t("rx.h1")} lead={t("rx.lead")} />
      <div className="wrap" style={{ paddingBottom: "var(--sp-section)" }}>
        <RecipeBrowser locale={locale} recipes={recipes} products={products} categories={categories} tags={tags} />
        {chefs.map((c) => (
          <aside key={c.id} className="chef-teaser" aria-label={t("chef.label")}>
            <span className="label">{t("chef.label")}</span>
            <b>{c.name}</b>
            <span className="credit">{t("chef.recipes", { name: c.name })}: {recipes.filter((r) => r.chefId === c.id).length}</span>
            <Link className="btn ghost" href={href(locale, `/chefs/${c.id}`)}>{t("chef.cta")} <Arrow /></Link>
          </aside>
        ))}
      </div>
      <Newsletter locale={locale} connected={newsletterConfigured} />
    </>
  );
}

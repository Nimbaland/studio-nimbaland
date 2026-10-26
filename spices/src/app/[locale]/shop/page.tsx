import type { Metadata } from "next";
import Link from "next/link";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { getProducts, getRecipes } from "@/lib/content";
import { ProductCard } from "@/components/cards";
import { HeatTag, PageHead, Pending, Swatch } from "@/components/ui";
import { asset } from "@/lib/base";

export const revalidate = 120;

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t("shop.h1"), description: t("shop.lead"), alternates: { languages: { de: asset("/de/shop"), en: asset("/en/shop") } } };
}

export default async function Shop({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const [products, recipes] = await Promise.all([getProducts(locale), getRecipes(locale)]);
  const [a, b] = products;
  const chips = (list: string[], base: string[]) => (
    <span className="chips">{list.map((i) => <span key={i} className={`chip${base.includes(i) ? "" : " extra"}`}>{i}</span>)}</span>
  );
  const base = products.find((p) => p.heat === "mild")?.ingredients ?? [];
  const recs = (slug: string) => recipes.filter((r) => r.productSlug === slug).map((r, i) => <span key={r.id}>{i > 0 && ", "}<Link href={href(locale, `/recipes/${r.slug}`)}>{r.title}</Link></span>);
  const row = (label: string, x: React.ReactNode, y: React.ReactNode) => (<tr><th scope="row">{label}</th><td>{x}</td><td>{y}</td></tr>);
  const pend = <Pending>{t("cmp.pending")}</Pending>;
  return (
    <>
      <PageHead label={t("shop.label")} title={t("shop.h1")} lead={t("shop.lead")} />
      <div className="wrap" style={{ paddingBottom: "var(--sp-section)" }}>
        <div className="duo">{products.map((p) => <ProductCard key={p.slug} p={p} locale={locale} t={t} />)}</div>
        {a && b && (
          <div className="tablewrap">
            <table className="compare">
              <caption className="sr">{t("cmp.label")}</caption>
              <thead><tr><th scope="col"><span className="label">{t("cmp.label")}</span></th><th scope="col"><Swatch heat={a.heat} /> {a.name}</th><th scope="col"><Swatch heat={b.heat} /> {b.name}</th></tr></thead>
              <tbody>
                {row(t("cmp.heat"), <HeatTag heat={a.heat} t={t} />, <HeatTag heat={b.heat} t={t} />)}
                {row(t("cmp.chili"), a.heat === "hot" ? t("cmp.chili.yes") : t("cmp.chili.no"), b.heat === "hot" ? t("cmp.chili.yes") : t("cmp.chili.no"))}
                {row(t("cmp.base"), chips(a.ingredients, base), chips(b.ingredients, base))}
                {row(t("cmp.allergens"), a.allergens ?? t("pd.allergens"), b.allergens ?? t("pd.allergens"))}
                {row(t("cmp.size"), t("var.planned"), t("var.planned"))}
                {row(t("cmp.price"), pend, pend)}
                {row(t("cmp.recipes"), recs(a.slug), recs(b.slug))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { href, locales, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { getProducts, getRecipe, getRecipes, showDrafts } from "@/lib/content";
import { chefVisible, getChef } from "@/lib/blends";
import { RecipeCard } from "@/components/cards";
import { productKey } from "@/components/ui";
import { asset } from "@/lib/base";

export const revalidate = 120;
/** Unbekannte Slugs zulassen, damit der Sprachwechsel auf die verknüpfte Übersetzung weiterleiten kann. */
export const dynamicParams = true;

export async function generateStaticParams() {
  const out: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) for (const r of await getRecipes(locale)) out.push({ locale, slug: r.slug });
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const { recipe: r } = await getRecipe(locale, slug);
  if (!r) return {};
  const other = locale === "de" ? "en" : "de";
  return {
    title: r.seo?.title || r.title,
    description: r.seo?.description || r.teaser,
    alternates: { languages: { [locale]: asset(`/${locale}/recipes/${r.slug}`), ...(r.translationSlug ? { [other]: asset(`/${other}/recipes/${r.translationSlug}`) } : {}) } },
    openGraph: { images: [{ url: r.image.src, alt: r.image.alt }] },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const t = getT(locale);
  const { recipe: r, redirectTo } = await getRecipe(locale, slug);
  if (redirectTo) redirect(href(locale, `/recipes/${redirectTo}`));
  if (!r) notFound();
  const [products, all] = await Promise.all([getProducts(locale), getRecipes(locale)]);
  const p = products.find((x) => x.slug === r.productSlug);
  const more = all.filter((o) => o.category.key === r.category.key && o.id !== r.id).slice(0, 3);
  const c = r.chefId ? getChef(r.chefId) : undefined;
  const chef = c && chefVisible(c, showDrafts) ? c : undefined;
  const num = (v?: number) => <b>{v ?? "–"}</b>;
  return (
    <div className="wrap">
      <div className="crumb"><Link href={href(locale, "/recipes")}>{t("rx.back")}</Link> / {r.category.title}</div>
      <div className="rd-hero">
        <figure>
          <div className="rimg"><Image src={r.image.src} alt={r.image.alt || r.title} fill priority sizes="(min-width: 900px) 45vw, 100vw" /></div>
          <figcaption>{r.image.source === "ai" ? t("rx.img.ai") : r.image.credit || t("rx.img.real")}</figcaption>
        </figure>
        <div className="rd-copy">
          <div className="btnrow"><span className="label">{r.category.title}</span>{r.tags.map((tg) => <span key={tg.key} className="chip" style={{ fontSize: ".78rem" }}>{tg.title}</span>)}</div>
          <h1>{r.title}</h1>
          <p className="lead">{r.intro}</p>
          <p className="credit">{r.author === "guest"
            ? (chef ? <>{t("rx.guest")} · <Link href={href(locale, `/chefs/${chef.id}`)}>{chef.name}</Link></> : r.guestName ? `${t("rx.guest")} · ${r.guestName}` : t("rx.author.guest"))
            : t("rx.byNimba")}</p>
          <div className="facts-row">
            <div>{num(r.servings)}<span>{t("rx.serv")}</span></div>
            <div>{num(r.prep)}<span>{t("rx.prep")} (min)</span></div>
            <div>{num(r.cook)}<span>{t("rx.cook")} (min)</span></div>
          </div>
          {r.testStatus !== "approved" && <p className="note">{t("rx.draftnote")}</p>}
          {p ? (
            <div className={`blendbox ${productKey(p)}`}><div className="bb"><small>{t("rx.blend")}</small><b>{p.name}</b></div>
              <Link className="btn" href={href(locale, `/shop/${p.slug}`)}>{t(productKey(p) === "adv" ? "rx.blend.cta.adv" : "rx.blend.cta.cosy")}</Link></div>
          ) : (
            <div className="blendbox none"><div className="bb"><small>{t("rx.blend")}</small><span className="tbc">{t("rx.with.pending")}</span></div></div>
          )}
        </div>
      </div>
      <div className="rd-body">
        <div className="rd-side">
          <div><h2>{t("rx.h.ingr")}</h2><ul className="ingr">{r.ingredients.map((i, n) => <li key={n} className={i.isHeading ? "sub" : undefined}>{i.text}</li>)}</ul></div>
          {r.dosage && <div className="tipbox"><span className="label">{t("rx.h.dosage")}</span><p>{r.dosage}</p></div>}
          {r.allergenNote && <p className="note">{r.allergenNote}</p>}
        </div>
        <div>
          <h2>{t("rx.h.steps")}</h2>
          <ol className="steps">{r.steps.map((s, n) => <li key={n}><span>{s}</span></li>)}</ol>
          {r.tip && <div className="tipbox" style={{ marginTop: "2rem" }}><span className="label">{t("rx.h.tip")}</span><p>{r.tip}</p></div>}
        </div>
      </div>
      {more.length > 0 && (
        <div style={{ paddingBottom: "var(--sp-section)" }}>
          <div className="sechead"><span className="label">{t("rx.more")}</span></div>
          <div className="rgrid">{more.map((o) => <RecipeCard key={o.id} r={o} products={products} locale={locale} t={t} />)}</div>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { href, locales, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { getProducts, getRecipes, isSellable } from "@/lib/content";
import { RecipeCard } from "@/components/cards";
import { Gallery } from "@/components/interactive";
import { IngredientExplorer, VariantBuy, type VariantView } from "@/components/shop";
import { getBlend } from "@/lib/blends";
import { fmtMoney, getShopProduct, shopifyConfigured } from "@/lib/shopify";
import { showDrafts } from "@/lib/content";
import { Arrow, HeatTag, productKey } from "@/components/ui";
import { asset } from "@/lib/base";
import { salesOpen } from "@/lib/flags";

export const revalidate = 120;

export async function generateStaticParams() {
  const out: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) for (const p of await getProducts(locale)) out.push({ locale, slug: p.slug });
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = (await getProducts(locale)).find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} · Nimbo’s Kitchen`, description: p.description, alternates: { languages: { de: asset(`/de/shop/${slug}`), en: asset(`/en/shop/${slug}`) } } };
}

export default async function ProductPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const t = getT(locale);
  const [products, recipes] = await Promise.all([getProducts(locale), getRecipes(locale)]);
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const k = productKey(p);
  const other = products.find((x) => x.slug !== slug);
  const sell = isSellable(p);
  const recs = recipes.filter((r) => r.productSlug === p.slug).slice(0, 3);
  const images = [
    ...(p.labelFront ? [{ src: p.labelFront.src, alt: p.labelFront.alt, kind: "label" as const }] : []),
    ...(p.labelBack ? [{ src: p.labelBack.src, alt: p.labelBack.alt, kind: "label" as const }] : []),
    ...p.gallery.map((g) => ({ src: g.src, alt: g.alt, kind: "photo" as const })),
  ];
  const pending = <span className="tbc">{t("pd.o.pending")}</span>;
  const ok = <span className="ok">{t("pd.o.ok")}</span>;
  const n = p.nutrition;
  const blend = getBlend(p.slug, locale);
  const shop = salesOpen ? await getShopProduct(p.shopifyHandle ?? p.slug, locale) : null;
  const unitLabel = (u: string, v: number) => `${v === 1 ? "" : v + " "}${u.toLowerCase()}`;
  const variants: VariantView[] = (shop?.variants ?? []).map((v) => ({
    id: v.id,
    label: v.options.find((o) => /größe|size|menge|gewicht|weight/i.test(o.name))?.value ?? v.title,
    price: fmtMoney(v.price, locale),
    unit: v.unitPrice && v.unitPriceMeasurement ? `${fmtMoney(v.unitPrice, locale)} / ${unitLabel(v.unitPriceMeasurement.referenceUnit, v.unitPriceMeasurement.referenceValue)}` : null,
    available: v.availableForSale,
  }));
  const pend = (v?: string | null) => (v ? <span>{v}</span> : <span className="tbc">{t("legal.pending")}</span>);
  const nameList = blend ? blend.ingredients.map((i) => i.name.replace(/ \(.*\)$/, "")) : p.ingredients;

  return (
    <div className="wrap">
      <div className="crumb"><Link href={href(locale, "/shop")}>{t("pd.crumb")}</Link> / {p.name}</div>
      <div className="pd">
        {images.length > 0 && <Gallery heatKey={k} images={images} note={t("pd.gal.note")} label={t("pd.gal")} />}
        <div className="buy">
          <div className="lockup"><b>{t("p.brand")}</b> <span>{t("p.by")}</span></div>
          <h1>{p.name}</h1>
          <div className="btnrow"><HeatTag heat={p.heat} t={t} />{!sell && <span className="label">{t("pd.status")}</span>}</div>
          <p className="lead">{p.description}</p>
          {salesOpen ? (
            <VariantBuy locale={locale} name={p.name} variants={variants} sellable={sell && shopifyConfigured} />
          ) : (
            <div className="landingbox">
              <span className="badge">{t("pd.status")}</span>
              <h2>{t("landing.h")}</h2>
              <p>{t("landing.p")}</p>
              <div className="btnrow">
                <Link className={`btn ${k}`} href={href(locale, "/newsletter")}>{t("landing.cta")} <Arrow /></Link>
                <a className="btn ghost" href="#rezepte">{t("landing.recipes")}</a>
              </div>
              <p className="credit">{t("var.planned")}</p>
            </div>
          )}
          {salesOpen && <p className="credit">{sell && p.shipping ? p.shipping : t("pd.ship")}</p>}
        </div>
      </div>

      {blend && (
        <section className={`ingr-sec ${k}`} aria-labelledby="ingr-h">
          <span className="label">{t("ing.label")}</span>
          <h2 id="ingr-h">{t("ing.h2")}</h2>
          <p className="lead">{t("ing.lead")}</p>
          <IngredientExplorer locale={locale} items={blend.ingredients} blendName={p.name} heatKey={k} drafts={showDrafts} />
        </section>
      )}

      <div className="detail" style={{ marginBottom: "var(--sp-section)" }}>
        <div className="blk"><h2>{t("pd.h.taste")}</h2><div className="c"><p>{p.taste ?? t(k === "adv" ? "pd.taste.adv" : "pd.taste.cosy")}</p></div></div>
        {recs.length > 0 && (
          <div className="blk" id="rezepte"><h2>{t("pd.h.recipes")}</h2><div className="c">
            <div className="rgrid">{recs.map((r) => <RecipeCard key={r.id} r={r} products={products} locale={locale} t={t} />)}</div>
            <div><Link className="btn ghost" href={href(locale, "/recipes")}>{t("pd.recipes.cta")}</Link></div>
          </div></div>
        )}
        {blend && (
          <div className="blk"><h2>{t("dose.h")}</h2><div className="c dose">
            <span className="badge">{t("dose.badge")}</span>
            <h3>{t("dose.amount")}</h3><p>{blend.dosage.amount}</p>
            <h3>{t("dose.when")}</h3><p>{blend.dosage.when}</p>
            <h3>{t("dose.adjust")}</h3><p>{blend.dosage.adjust}</p>
            <p className="credit">{t("dose.note")}</p>
          </div></div>
        )}
        <div className="blk"><h2>{t("pd.h.origin")}</h2><div className="c"><div className="ledger">
          <div className="row"><span className="k">{t("pd.o.family")}</span><span>{t("pd.o.family.v")}</span>{ok}</div>
          <div className="row"><span className="k">{t("pd.o.ingr")}</span><span>{p.origin.ingredients ?? ""}</span>{p.origin.ingredients ? ok : pending}</div>
          <div className="row"><span className="k">{t("pd.o.blend")}</span><span>{p.origin.blending ?? ""}</span>{p.origin.blending ? ok : pending}</div>
          <div className="row"><span className="k">{t("pd.o.fill")}</span><span>{p.origin.filling ?? ""}</span>{p.origin.filling ? ok : pending}</div>
        </div></div></div>
        <div className="blk" id="produktinfo"><h2>{t("legal.h")}</h2><div className="c">
          <dl className="legal">
            <div><dt>{t("legal.name")}</dt><dd>{p.name} · {t("legal.name.v")}</dd></div>
            <div><dt>{t("legal.ingr")}</dt><dd>{nameList.join(", ")}.</dd></div>
            <div><dt>{t("legal.allergens")}</dt><dd>{p.allergens ?? t("legal.allergens.v")}</dd></div>
            <div><dt>{t("legal.net")}</dt><dd>{t("legal.net.v")}</dd></div>
            <div><dt>{t("legal.bbd")}</dt><dd>{p.bestBefore ?? t("legal.bbd.v")}</dd></div>
            <div><dt>{t("legal.lot")}</dt><dd>{t("legal.lot.v")}</dd></div>
            <div><dt>{t("legal.storage")}</dt><dd>{p.storage ?? t("pd.storage")}</dd></div>
            <div><dt>{t("legal.origin")}</dt><dd>{t("legal.origin.v")}</dd></div>
            <div><dt>{t("legal.operator")}</dt><dd style={{ whiteSpace: "pre-line" }}>{pend(p.operator)}</dd></div>
            <div><dt>{t("legal.nutri")}</dt><dd>
              {n && n.energyKj !== undefined ? (
                <>
                <table className="nutri"><caption className="sr">{t("legal.nutri")}</caption><thead><tr><th scope="col">{locale === "de" ? "Durchschnittliche Nährwerte" : "Typical values"}</th><th scope="col">100 g</th></tr></thead><tbody>
                  <tr><th>{locale === "de" ? "Energie" : "Energy"}</th><td>{n.energyKj} kJ / {n.energyKcal} kcal</td></tr>
                  <tr><th>{locale === "de" ? "Fett" : "Fat"}</th><td>{n.fat} g</td></tr>
                  <tr className="sub"><th>{locale === "de" ? "davon gesättigte Fettsäuren" : "of which saturates"}</th><td>{n.saturates} g</td></tr>
                  <tr><th>{locale === "de" ? "Kohlenhydrate" : "Carbohydrate"}</th><td>{n.carbs} g</td></tr>
                  <tr className="sub"><th>{locale === "de" ? "davon Zucker" : "of which sugars"}</th><td>{n.sugars} g</td></tr>
                  {n.fibre !== undefined && <tr><th>{locale === "de" ? "Ballaststoffe" : "Fibre"}</th><td>{n.fibre} g</td></tr>}
                  <tr><th>{locale === "de" ? "Eiweiß" : "Protein"}</th><td>{n.protein} g</td></tr>
                  <tr><th>{locale === "de" ? "Salz" : "Salt"}</th><td>{n.salt} g</td></tr>
                </tbody></table>
                {p.nutritionBasis && <p className="credit">{p.nutritionBasis}</p>}
                </>
              ) : t("legal.nutri.v")}
            </dd></div>
          </dl>
        </div></div>
        {other && (
          <div className="blk"><h2>{t("pd.h.other", { heat: t(other.heat === "hot" ? "p.heat.hot" : "p.heat.mild") })}</h2><div className="c">
            <p>{other.description}</p>
            <div><Link className={`btn ${productKey(other)}`} href={href(locale, `/shop/${other.slug}`)}>{t(productKey(other) === "adv" ? "pd.other.cta.adv" : "pd.other.cta.cosy")} <Arrow /></Link></div>
          </div></div>
        )}
      </div>
    </div>
  );
}

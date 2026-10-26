import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { getProducts, getRecipes, showDrafts } from "@/lib/content";
import { chefVisible, getChef } from "@/lib/blends";
import { RecipeCard } from "@/components/cards";
import { Arrow, SecLabel, productKey } from "@/components/ui";
import { asset } from "@/lib/base";

/** Gastkoch-Seite. Felder ohne bestätigte Angaben bleiben leer und zeigen „Angaben folgen“. Keine erfundene Biografie. */
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = getChef(slug);
  if (!c || !chefVisible(c, showDrafts)) return {};
  return { title: `${c.name} · ${getT(locale)("chef.label")}`, robots: c.nameConfirmed ? undefined : { index: false }, alternates: { languages: { de: asset(`/de/chefs/${slug}`), en: asset(`/en/chefs/${slug}`) } } };
}

export default async function ChefPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const t = getT(locale);
  const c = getChef(slug);
  if (!c || !chefVisible(c, showDrafts)) notFound();
  const [recipes, products] = await Promise.all([getRecipes(locale), getProducts(locale)]);
  const mine = recipes.filter((r) => r.chefId === c.id);
  const blends = products.filter((p) => mine.some((r) => r.productSlug === p.slug));
  const field = (label: string, v: string | null) => (
    <div className="row"><span className="k">{label}</span>{v ? <span>{v}</span> : <span className="tbc">{t("chef.pending")}</span>}</div>
  );
  return (
    <div className="wrap chefpage">
      <div className="crumb"><Link href={href(locale, "/recipes")}>{t("rx.back")}</Link> / {t("chef.label")}</div>
      <div className="chef-hero">
        <figure className="chef-portrait">
          {c.portrait ? <Image src={c.portrait} alt={c.name} fill sizes="(min-width: 900px) 30vw, 100vw" /> : <span className="ingr-ph big" aria-hidden="true">{c.name.slice(0, 1)}</span>}
        </figure>
        <div className="prose">
          <span className="label">{t("chef.label")}</span>
          <h1>{c.name}</h1>
          {!c.nameConfirmed && <p className="note">{t("chef.unconfirmed")}</p>}
          {c.intro ? <p className="lead">{c.intro}</p> : <p className="tbc">{t("chef.pending")}</p>}
          <div className="ledger">{field(t("chef.style"), c.style)}{field(t("chef.workplace"), c.workplace)}</div>
          {blends.length > 0 && (
            <div className="btnrow">{blends.map((p) => <Link key={p.slug} className={`btn ${productKey(p)}`} href={href(locale, `/shop/${p.slug}`)}>{p.name} <Arrow /></Link>)}</div>
          )}
        </div>
      </div>
      <section className="sec" aria-labelledby="chef-rx">
        <SecLabel n="01">{t("chef.label")}</SecLabel>
        <h2 id="chef-rx">{t("chef.recipes", { name: c.name })}</h2>
        <div className="rgrid">{mine.map((r) => <RecipeCard key={r.id} r={r} products={products} locale={locale} t={t} />)}</div>
      </section>
    </div>
  );
}

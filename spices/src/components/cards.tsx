import Link from "next/link";
import Image from "next/image";
import { href, type Locale } from "@/i18n/config";
import type { T } from "@/i18n/t";
import type { Product, Recipe } from "@/lib/types";
import { Arrow, HeatTag, Pending, Swatch, productKey } from "./ui";

export function ProductCard({ p, locale, t, picked }: { p: Product; locale: Locale; t: T; picked?: boolean }) {
  const k = productKey(p);
  const url = href(locale, `/shop/${p.slug}`);
  return (
    <article className={`pcard${picked ? " pick" : ""}`} data-id={p.slug}>
      <Link className={`pvis ${k}`} href={url} tabIndex={-1} aria-hidden="true">
        {p.labelFront && <Image src={p.labelFront.src} alt="" width={450} height={800} sizes="(min-width: 760px) 20vw, 40vw" />}
        <span className="soon">{t("p.soon")}</span>
      </Link>
      <div className="pbody">
        <span className="pbrand">{t("p.brand")} · {p.short}</span>
        <h3>{p.name}</h3>
        <div><HeatTag heat={p.heat} t={t} /></div>
        <p className="diff">{p.description}</p>
        <div className="btnrow">
          <Link className={`btn ${k}`} href={url}>{t(k === "adv" ? "p.adv.cta" : "p.cosy.cta")} <Arrow /></Link>
        </div>
      </div>
    </article>
  );
}

export function RecipeMeta({ r, products, t }: { r: Recipe; products: Product[]; t: T }) {
  const p = products.find((x) => x.slug === r.productSlug);
  const time = r.prep && r.cook ? t("rx.time", { n: r.prep + r.cook }) : t("rx.time.pending");
  const serv = r.servings ? t("rx.servings", { n: r.servings }) : t("rx.servings.pending");
  return (
    <div className="rmeta">
      <span className="blend">{p ? <><Swatch heat={p.heat} />{p.name}</> : <Pending>{t("rx.with.pending")}</Pending>}</span>
      <span>{time}</span>
      <span>{serv}</span>
    </div>
  );
}

export function RecipeCard({ r, products, locale, t }: { r: Recipe; products: Product[]; locale: Locale; t: T }) {
  const url = href(locale, `/recipes/${r.slug}`);
  return (
    <article className="rcard">
      <Link className="rimg" href={url} tabIndex={-1} aria-hidden="true">
        <Image src={r.image.src} alt="" fill sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 90vw" />
        <span className="cat">{r.category.title}</span>
        {r.testStatus !== "approved" && <span className="draftb">{t("rx.draft")}</span>}
      </Link>
      <h3><Link href={url}>{r.title}</Link></h3>
      <p className="teaser">{r.teaser}</p>
      <RecipeMeta r={r} products={products} t={t} />
      <Link className="go" href={url}>{t("rx.cta")} <Arrow /></Link>
    </article>
  );
}

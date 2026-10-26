"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import type { Product, Recipe } from "@/lib/types";
import { ProductCard, RecipeCard } from "./cards";
import { Arrow, productKey } from "./ui";
import { asset } from "@/lib/base";

/* ---------- Finder: Wie scharf isst du gern? ---------- */
export function Finder({ locale, products }: { locale: Locale; products: Product[] }) {
  const t = getT(locale);
  const [pick, setPick] = useState<"mild" | "both" | "hot" | null>(null);
  const ids = pick === "mild" ? ["mild"] : pick === "hot" ? ["hot"] : pick === "both" ? ["mild", "hot"] : [];
  const single = pick && pick !== "both" ? products.find((p) => p.heat === pick) : undefined;
  const opts = [
    { k: "mild" as const, label: t("finder.mild"), icon: asset("/img/mandala-gelb.svg") },
    { k: "both" as const, label: t("finder.both"), icon: asset("/img/mandala-orange.svg") },
    { k: "hot" as const, label: t("finder.hot"), icon: asset("/img/mandala-rot.svg") },
  ];
  return (
    <>
      <div className="finder" role="group" aria-labelledby="finder-q">
        <p className="finder-q" id="finder-q">{t("finder.q")}</p>
        <div className="seg">
          {opts.map((o) => (
            <button key={o.k} type="button" aria-pressed={pick === o.k} onClick={() => setPick(o.k)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="mini" src={o.icon} alt="" />{o.label}
            </button>
          ))}
        </div>
        <div className="finder-out" aria-live="polite">
          <span>{pick ? t(pick === "mild" ? "finder.r.mild" : pick === "hot" ? "finder.r.hot" : "finder.r.both") : t("finder.idle")}</span>
          {single && <Link className={`btn ${productKey(single)}`} href={href(locale, `/shop/${single.slug}`)}>{t(productKey(single) === "adv" ? "p.adv.cta" : "p.cosy.cta")} <Arrow /></Link>}
        </div>
      </div>
      <div className={`duo${pick ? " picking" : ""}`}>
        {products.map((p) => (
          <ProductCard key={p.slug} p={p} locale={locale} t={t} picked={ids.includes(p.heat)} />
        ))}
      </div>
    </>
  );
}

/* ---------- Der Unterschied ---------- */
export function DiffSwitch({ locale, base, chili }: { locale: Locale; base: string[]; chili: string }) {
  const t = getT(locale);
  const [hot, setHot] = useState(false);
  return (
    <div className="diffviz">
      <span className="label">{t("diff.label")}</span>
      <h3>{t("diff.h3")}</h3>
      <div className={`switch${hot ? " hot" : ""}`} role="group" aria-label={t("diff.aria")}>
        <span className="knob" aria-hidden="true" />
        <button type="button" aria-pressed={!hot} onClick={() => setHot(false)}>Cosy Mildness</button>
        <button type="button" id="ds-hot" aria-pressed={hot} onClick={() => setHot(true)}>Advanced Spiciness</button>
      </div>
      <div className={`chips diff${hot ? " hot" : ""}`}>
        {base.map((b) => <span key={b} className="chip">{b}</span>)}
        <span className="chip extra">{chili}</span>
      </div>
      <p className="lead" aria-live="polite">{t(hot ? "diff.note.hot" : "diff.note.mild")}</p>
    </div>
  );
}

/* ---------- Rezeptübersicht mit Kategorien und Filtern ---------- */
export function RecipeBrowser({ locale, recipes, products, categories, tags }: {
  locale: Locale; recipes: Recipe[]; products: Product[];
  categories: { key: string; title: string; intro?: string }[]; tags: { key: string; title: string }[];
}) {
  const t = getT(locale);
  const [cat, setCat] = useState("all");
  const [sel, setSel] = useState<string[]>([]);
  const list = useMemo(() => recipes.filter((r) => (cat === "all" || r.category.key === cat) && sel.every((k) => r.tags.some((tg) => tg.key === k))), [recipes, cat, sel]);
  const current = categories.find((c) => c.key === cat);
  return (
    <>
      <div className="tabs" role="group" aria-label={locale === "de" ? "Kategorie" : "Category"}>
        <button type="button" aria-pressed={cat === "all"} onClick={() => setCat("all")}>{t("rx.all")}</button>
        {categories.map((c) => <button key={c.key} type="button" aria-pressed={cat === c.key} onClick={() => setCat(c.key)}>{c.title}</button>)}
      </div>
      <p className="catintro">{current?.intro ?? ""}</p>
      <div className="filters" role="group" aria-label={t("rx.filter")}>
        <span className="label">{t("rx.filter")}</span>
        {tags.map((tg) => (
          <button key={tg.key} type="button" aria-pressed={sel.includes(tg.key)} onClick={() => setSel((s) => (s.includes(tg.key) ? s.filter((x) => x !== tg.key) : [...s, tg.key]))}>{tg.title}</button>
        ))}
      </div>
      <p className="label" aria-live="polite" style={{ marginBottom: "1rem" }}>{list.length === 1 ? t("rx.count1") : t("rx.count", { n: list.length })}</p>
      <div className="rgrid">
        {list.length ? list.map((r) => <RecipeCard key={r.id} r={r} products={products} locale={locale} t={t} />) : (
          <div style={{ gridColumn: "1/-1", display: "grid", gap: "1rem", justifyItems: "start" }}>
            <p>{t("rx.empty")}</p>
            <button className="btn ghost" type="button" onClick={() => { setCat("all"); setSel([]); }}>{t("rx.reset")}</button>
          </div>
        )}
      </div>
    </>
  );
}

/* ---------- Produktgalerie ---------- */
export function Gallery({ heatKey, images, note, label }: { heatKey: string; images: { src: string; alt: string; kind: "label" | "photo" }[]; note: string; label: string }) {
  const [i, setI] = useState(0);
  const cur = images[i];
  return (
    <div className="gallery">
      <div className={`gmain ${heatKey}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={cur.kind} src={cur.src} alt={cur.alt} />
      </div>
      <div className="thumbs" role="group" aria-label={label}>
        {images.map((im, n) => (
          <button key={im.src} type="button" aria-pressed={n === i} aria-label={im.alt} onClick={() => setI(n)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={im.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      <p className="credit">{note}</p>
    </div>
  );
}

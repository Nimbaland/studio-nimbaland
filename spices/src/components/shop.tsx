"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import type { Ingredient } from "@/lib/blends";
import { asset } from "@/lib/base";

/* =========================================================
   Warenkorb-Zustand: einzige Quelle ist der Shopify-Warenkorb (über /api/cart).
   ========================================================= */
export type Money = { amount: string; currencyCode: string };
export type CartLine = { id: string; quantity: number; cost: { totalAmount: Money }; merchandise: { id: string; title: string; product: { handle: string; title: string } } };
type CartState = { status: "loading" | "ready" | "not_connected" | "error"; cart: { totalQuantity: number; subtotal: Money; lines: CartLine[] } | null };

let state: CartState = { status: "loading", cart: null };
const subs = new Set<() => void>();
const set = (s: CartState) => { state = s; subs.forEach((f) => f()); };
let loaded = false;

async function load(locale: Locale) {
  try {
    const r = await fetch(asset(`/api/cart?locale=${locale}`), { cache: "no-store" });
    const j = await r.json();
    if (j.connected === false) return set({ status: "not_connected", cart: null });
    if (!r.ok) return set({ status: "error", cart: state.cart });
    set({ status: "ready", cart: j.cart });
  } catch { set({ status: "error", cart: state.cart }); }
}
export async function cartAction(body: Record<string, unknown>): Promise<"ok" | "not_connected" | "error"> {
  try {
    const r = await fetch(asset("/api/cart"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json().catch(() => ({}));
    if (r.status === 503 || j.connected === false) { set({ status: "not_connected", cart: null }); return "not_connected"; }
    if (!r.ok) return "error";
    set({ status: "ready", cart: j.cart });
    return "ok";
  } catch { return "error"; }
}
export function useCartState(locale: Locale): CartState {
  const s = useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, () => state, () => state);
  useEffect(() => { if (!loaded) { loaded = true; load(locale); } }, [locale]);
  return s;
}
export function useCartCount(locale: Locale) { return useCartState(locale).cart?.totalQuantity ?? 0; }

const fmt = (m: Money, locale: Locale) => Number(m.amount).toLocaleString(locale === "de" ? "de-DE" : "en-GB", { style: "currency", currency: m.currencyCode });

/* =========================================================
   Zutaten-Übersicht mit barrierearmem Dialog
   ========================================================= */
export function IngredientExplorer({ locale, items, blendName, heatKey, drafts }: { locale: Locale; items: Ingredient[]; blendName: string; heatKey: string; drafts: boolean }) {
  const t = getT(locale);
  const ref = useRef<HTMLDialogElement>(null);
  const [cur, setCur] = useState<Ingredient | null>(null);
  const titleId = useId();
  const open = (i: Ingredient) => {
    setCur(i);
    requestAnimationFrame(() => { const d = ref.current; if (!d) return; if (!d.open) d.showModal(); d.querySelector<HTMLButtonElement>(".dlg-close")?.focus(); const s = d.querySelector(".dlg-in"); if (s) s.scrollTop = 0; });
  };
  const close = () => ref.current?.close();
  return (
    <>
      <ol className={`ingr-grid ${heatKey}`} aria-label={t("ing.h2")}>
        {items.map((i) => (
          <li key={i.id}>
            <button type="button" className="ingr" onClick={() => open(i)} aria-haspopup="dialog">
              <span className="ingr-n" aria-hidden="true">{String(i.order).padStart(2, "0")}</span>
              <span className="ingr-img" data-provisional={i.provisional || undefined}>
                {drafts && i.provisional && <span className="prov sm">{i.img ? t("ing.prov") : t("ing.noimg")}</span>}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {i.img ? <img src={i.img} alt="" loading="lazy" /> : <span className="ingr-ph" aria-hidden="true">{i.name.slice(0, 1)}</span>}
              </span>
              <span className="ingr-name"><b>{i.name}</b><span lang={locale === "de" ? "en" : "de"}>{i.nameOther}</span></span>
              <span className="sr">{t("ing.order", { n: i.order })}</span>
            </button>
          </li>
        ))}
      </ol>
      <dialog ref={ref} className="ingr-dlg" aria-labelledby={titleId} onClick={(e) => { if (e.target === ref.current) close(); }} onClose={() => setCur(null)}>
        {cur && (
          <div className="dlg-in">
            <div className={`dlg-img ${heatKey}`} data-provisional={cur.provisional || undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {cur.img ? <img src={cur.img} alt={cur.name} /> : <span className="ingr-ph big" aria-hidden="true">{cur.name.slice(0, 1)}</span>}
              {cur.provisional && drafts && <span className="prov">{cur.img ? t("ing.prov") : t("ing.noimg")}</span>}
            </div>
            <div className="dlg-body">
              <p className="label">{t("ing.order", { n: cur.order })} · {blendName}</p>
              <h2 id={titleId}>{cur.name}</h2>
              <p className="dlg-sub"><span lang={locale === "de" ? "en" : "de"}>{cur.nameOther}</span> · <i>{cur.latin}</i></p>
              <h3>{t("ing.about")}</h3><p>{cur.about}</p>
              <h3>{t("ing.aroma")}</h3><p>{cur.aroma}</p>
              <h3>{t("ing.role", { name: blendName })}</h3><p>{cur.role}</p>
              <h3>{t("ing.tips")}</h3><ul>{cur.tips.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <button type="button" className="dlg-close" onClick={close}>
              <span aria-hidden="true">×</span><span className="sr">{t("ing.close")}</span>
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}

/* =========================================================
   Variantenwahl und Warenkorb (nur mit Shopify-Daten)
   ========================================================= */
export type VariantView = { id: string; label: string; price: string; unit: string | null; available: boolean };

export function VariantBuy({ locale, name, variants, sellable }: { locale: Locale; name: string; variants: VariantView[]; sellable: boolean }) {
  const t = getT(locale);
  const first = variants.find((v) => v.available && v.unit) ?? variants[0];
  const [sel, setSel] = useState(first?.id);
  const [q, setQ] = useState(1);
  const [st, setSt] = useState<"idle" | "busy" | "ok" | "error" | "not_connected">("idle");
  const v = variants.find((x) => x.id === sel);
  const canBuy = sellable && !!v && v.available && !!v.unit;
  const group = useId();

  if (!variants.length) {
    return (
      <div className="vbox">
        <div className="pricebox"><div className="big">{t("pd.price.pending")}</div><div className="credit">{t("var.planned")}</div></div>
        <p className="lockmsg">{t("buy.locked")}</p>
      </div>
    );
  }
  return (
    <div className="vbox">
      <fieldset className="variants">
        <legend className="label">{t("var.label")}</legend>
        {variants.map((x) => (
          <label key={x.id} className="vopt" data-off={!x.available || undefined}>
            <input type="radio" name={group} value={x.id} checked={sel === x.id} onChange={() => setSel(x.id)} />
            <span className="vname">{x.label}</span>
            <span className="vprice">{x.price}{!x.available && <> · {t("var.soldout")}</>}</span>
          </label>
        ))}
      </fieldset>
      {v && (
        <div className="pricebox" aria-live="polite">
          <div className="big">{v.price}</div>
          <div className="credit">{v.unit ? `${t("var.unit")}: ${v.unit}` : `${t("var.unit")}: ${t("legal.pending")}`} · {t("var.incl")}</div>
        </div>
      )}
      <div className="qtyrow">
        <div className="stepper" role="group" aria-label={t("pd.qty")}>
          <button type="button" aria-label={t("pd.qty.minus")} disabled={!canBuy} onClick={() => setQ((n) => Math.max(1, n - 1))}>−</button>
          <output aria-live="polite">{q}</output>
          <button type="button" aria-label={t("pd.qty.plus")} disabled={!canBuy} onClick={() => setQ((n) => Math.min(20, n + 1))}>+</button>
        </div>
        <button className="btn primary" type="button" disabled={!canBuy || st === "busy"} aria-describedby={canBuy ? undefined : "lockmsg"}
          onClick={async () => { if (!v) return; setSt("busy"); setSt(await cartAction({ action: "add", merchandiseId: v.id, quantity: q, locale }) === "ok" ? "ok" : "error"); }}>
          {st === "busy" ? t("buy.adding") : t("pd.add")}
        </button>
      </div>
      {!canBuy && <p className="lockmsg" id="lockmsg">{t("buy.locked")}</p>}
      <div className="toast" role="status">
        {st === "ok" && <>{q} × {name} ({v?.label}) · {t("buy.added")} <Link href={href(locale, "/cart")}>{t("buy.view")}</Link></>}
        {st === "error" && <span className="err">{t("buy.error")}</span>}
      </div>
    </div>
  );
}

export function CartView({ locale }: { locale: Locale }) {
  const t = getT(locale);
  const s = useCartState(locale);
  const [busy, setBusy] = useState<string | null>(null);
  const [err, setErr] = useState(false);
  const act = useCallback(async (body: Record<string, unknown>, id: string) => {
    setBusy(id); setErr(false);
    const r = await cartAction({ ...body, locale });
    setBusy(null); setErr(r === "error");
  }, [locale]);
  const lines = s.cart?.lines ?? [];
  return (
    <div className="wrap cartwrap">
      {s.status === "loading" && <p className="lead">…</p>}
      {s.status === "not_connected" && <p className="lockmsg">{t("cart.notconnected")} {t("buy.locked")}</p>}
      {s.status !== "loading" && s.status !== "not_connected" && (lines.length ? (
        <>
          <ul className="cartlist">
            {lines.map((l) => (
              <li key={l.id} className="citem" aria-busy={busy === l.id || undefined}>
                <div className={`pvis ${l.merchandise.product.handle.includes("advanced") ? "adv" : "cosy"}`} />
                <div className="cline">
                  <b>{l.merchandise.product.title}</b><span className="credit">{l.merchandise.title}</span>
                  <div className="stepper" role="group" aria-label={`${t("cart.qty")}: ${l.merchandise.product.title}`}>
                    <button type="button" aria-label={t("pd.qty.minus")} disabled={!!busy} onClick={() => act({ action: "update", lineId: l.id, quantity: l.quantity - 1 }, l.id)}>−</button>
                    <output>{l.quantity}</output>
                    <button type="button" aria-label={t("pd.qty.plus")} disabled={!!busy || l.quantity >= 20} onClick={() => act({ action: "update", lineId: l.id, quantity: l.quantity + 1 }, l.id)}>+</button>
                  </div>
                  <span>{fmt(l.cost.totalAmount, locale)}</span>
                  <button className="btn ghost sm" type="button" disabled={!!busy} onClick={() => act({ action: "remove", lineId: l.id }, l.id)}>{t("cart.remove")}</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="carttotal">
            <span>{t("cart.total")}</span><b>{s.cart && fmt(s.cart.subtotal, locale)}</b>
            <p className="credit">{t("var.incl")}. {t("cart.ship")}</p>
          </div>
          <a className="btn primary" href={asset(`/api/cart/checkout?locale=${locale}`)}>{t("cart.checkout")} <span aria-hidden="true">→</span></a>
          <p className="credit">{t("cart.checkout.note")}</p>
        </>
      ) : <p className="lead">{t("cart.empty")}</p>)}
      {(err || s.status === "error") && <p className="err" role="alert">{t("buy.error")}</p>}
      <Link className="btn ghost" href={href(locale) + "#finder"}>{t("cart.cta")}</Link>
    </div>
  );
}

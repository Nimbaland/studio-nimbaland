import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { addLines, createCart, getCart, removeLines, shopifyConfigured, updateLines, type ShopCart } from "@/lib/shopify";
import type { Locale } from "@/i18n/config";

/**
 * Warenkorb-Proxy zu Shopify. Die Warenkorb-ID liegt in einem httpOnly-Cookie, der Token bleibt auf dem Server.
 * Ohne Shopify-Konfiguration antwortet die Route mit 503 „not_connected“. Es gibt keinen Ersatz-Warenkorb.
 */
const COOKIE = "ns_cart";
const VARIANT = /^gid:\/\/shopify\/ProductVariant\/\d+$/;
const LINE = /^gid:\/\/shopify\/CartLine\/[\w-]+(\?.*)?$/;
export const dynamic = "force-dynamic";

const loc = (v: unknown): Locale => (v === "en" ? "en" : "de");
function out(cart: ShopCart | null) {
  return { connected: true, cart: cart && { totalQuantity: cart.totalQuantity, subtotal: cart.cost.subtotalAmount, lines: cart.lines } };
}
async function setCookie(id: string) {
  (await cookies()).set(COOKIE, id, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 14 });
}

export async function GET(req: Request) {
  if (!shopifyConfigured) return NextResponse.json({ connected: false, cart: null }, { status: 200 });
  const id = (await cookies()).get(COOKIE)?.value;
  if (!id) return NextResponse.json(out(null));
  try {
    const cart = await getCart(id, loc(new URL(req.url).searchParams.get("locale")));
    return NextResponse.json(out(cart));
  } catch (e) {
    console.error("[cart] get", e);
    return NextResponse.json({ connected: true, error: "cart_failed" }, { status: 502 });
  }
}

export async function POST(req: Request) {
  if (!shopifyConfigured) return NextResponse.json({ connected: false, error: "not_connected" }, { status: 503 });
  let body: { action?: string; merchandiseId?: string; lineId?: string; quantity?: number; locale?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }
  const locale = loc(body.locale);
  const qty = Math.max(0, Math.min(20, Math.floor(Number(body.quantity ?? 1))));
  const id = (await cookies()).get(COOKIE)?.value;
  try {
    let cart: ShopCart | null = null;
    if (body.action === "add") {
      if (!body.merchandiseId || !VARIANT.test(body.merchandiseId) || qty < 1) return NextResponse.json({ error: "bad_request" }, { status: 400 });
      const lines = [{ merchandiseId: body.merchandiseId, quantity: qty }];
      const existing = id ? await getCart(id, locale) : null;
      cart = existing ? await addLines(existing.id, lines, locale) : await createCart(lines, locale);
      await setCookie(cart.id);
    } else if (body.action === "update" || body.action === "remove") {
      if (!id || !body.lineId || !LINE.test(body.lineId)) return NextResponse.json({ error: "bad_request" }, { status: 400 });
      cart = body.action === "remove" || qty === 0 ? await removeLines(id, [body.lineId], locale) : await updateLines(id, [{ id: body.lineId, quantity: qty }], locale);
    } else return NextResponse.json({ error: "bad_request" }, { status: 400 });
    return NextResponse.json(out(cart));
  } catch (e) {
    console.error("[cart] post", e);
    return NextResponse.json({ connected: true, error: "cart_failed" }, { status: 502 });
  }
}

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getCart, shopifyConfigured } from "@/lib/shopify";
import { asset } from "@/lib/base";

/** Leitet zum Shopify-Checkout weiter. Bezahlung und Bestellung laufen ausschließlich dort. */
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "de";
  const back = new URL(asset(`/${locale}/cart`), url.origin);
  if (!shopifyConfigured) return NextResponse.redirect(back, 303);
  const id = (await cookies()).get("ns_cart")?.value;
  if (!id) return NextResponse.redirect(back, 303);
  try {
    const cart = await getCart(id, locale);
    if (!cart || cart.totalQuantity === 0) return NextResponse.redirect(back, 303);
    const target = new URL(cart.checkoutUrl);
    if (target.protocol !== "https:") return NextResponse.redirect(back, 303);
    target.searchParams.set("locale", locale);
    return NextResponse.redirect(target, 303);
  } catch (e) {
    console.error("[checkout]", e);
    back.searchParams.set("error", "checkout");
    return NextResponse.redirect(back, 303);
  }
}

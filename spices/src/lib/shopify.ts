import "server-only";
import type { Locale } from "@/i18n/config";

/**
 * Shopify ist die einzige Quelle für Produkte, Varianten, Preise, Grundpreise, Verfügbarkeit, Warenkorb und Bestellungen.
 * Diese Datei läuft nur auf dem Server. Der private Storefront-Token erscheint nie im Browser.
 * Ohne Konfiguration liefert sie `null`, und die Website zeigt ehrlich „noch nicht verbunden“.
 */
const domain = process.env.SHOPIFY_STORE_DOMAIN; // z. B. nimbaland-spices.myshopify.com
const token = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;
const version = process.env.SHOPIFY_API_VERSION || "2026-07";
export const shopifyConfigured = !!(domain && token);

export type Money = { amount: string; currencyCode: string };
export type ShopVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
  /** Grundpreis laut Shopify (PAngV: je 1 kg). Fehlt er, wird die Variante nicht verkauft. */
  unitPrice: Money | null;
  unitPriceMeasurement: { quantityValue: number; quantityUnit: string; referenceValue: number; referenceUnit: string } | null;
  options: { name: string; value: string }[];
};
export type ShopProduct = { id: string; handle: string; title: string; availableForSale: boolean; variants: ShopVariant[] };
export type CartLine = { id: string; quantity: number; cost: { totalAmount: Money }; merchandise: { id: string; title: string; product: { handle: string; title: string } } };
export type ShopCart = { id: string; checkoutUrl: string; totalQuantity: number; cost: { subtotalAmount: Money }; lines: CartLine[] };

async function sf<T>(query: string, variables: Record<string, unknown>, opts: { cache?: RequestCache; revalidate?: number; buyerIp?: string } = {}): Promise<T> {
  if (!shopifyConfigured) throw new Error("shopify_not_configured");
  const headers: Record<string, string> = { "Content-Type": "application/json", "Shopify-Storefront-Private-Token": token! };
  if (opts.buyerIp) headers["Shopify-Storefront-Buyer-IP"] = opts.buyerIp;
  const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
    method: "POST", headers, body: JSON.stringify({ query, variables }),
    ...(opts.cache ? { cache: opts.cache } : { next: { revalidate: opts.revalidate ?? 60, tags: ["shopify"] } }),
  });
  if (!res.ok) throw new Error(`shopify_http_${res.status}`);
  const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (json.errors?.length) throw new Error(`shopify_graphql: ${json.errors.map((e) => e.message).join("; ")}`);
  return json.data as T;
}

const lang = (l: Locale) => (l === "de" ? "DE" : "EN");

const PRODUCT_Q = /* GraphQL */ `
query P($handle: String!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) {
  product(handle: $handle) {
    id handle title availableForSale
    variants(first: 10) { nodes {
      id title availableForSale
      price { amount currencyCode }
      unitPrice { amount currencyCode }
      unitPriceMeasurement { quantityValue quantityUnit referenceValue referenceUnit }
      selectedOptions { name value }
    } }
  }
}`;

/** Produkt mit Varianten aus Shopify. `null` = nicht verbunden oder Produkt (noch) nicht angelegt. */
export async function getShopProduct(handle: string, locale: Locale): Promise<ShopProduct | null> {
  if (!shopifyConfigured) return null;
  try {
    type R = { product: (Omit<ShopProduct, "variants"> & { variants: { nodes: (Omit<ShopVariant, "options"> & { selectedOptions: ShopVariant["options"] })[] } }) | null };
    const d = await sf<R>(PRODUCT_Q, { handle, language: lang(locale), country: "DE" });
    if (!d.product) return null;
    return { ...d.product, variants: d.product.variants.nodes.map(({ selectedOptions, ...v }) => ({ ...v, options: selectedOptions })) };
  } catch (e) {
    console.error("[shopify] product", handle, e);
    return null;
  }
}

const CART_FIELDS = /* GraphQL */ `
  id checkoutUrl totalQuantity
  cost { subtotalAmount { amount currencyCode } }
  lines(first: 50) { nodes { id quantity cost { totalAmount { amount currencyCode } }
    merchandise { ... on ProductVariant { id title product { handle title } } } } }`;

type RawCart = Omit<ShopCart, "lines"> & { lines: { nodes: CartLine[] } };
const norm = (c: RawCart | null): ShopCart | null => (c ? { ...c, lines: c.lines.nodes } : null);
type UserErr = { message: string }[];
function check(errs: UserErr | undefined) { if (errs?.length) throw new Error(errs.map((e) => e.message).join("; ")); }

export async function getCart(id: string, locale: Locale): Promise<ShopCart | null> {
  const d = await sf<{ cart: RawCart | null }>(`query C($id: ID!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) { cart(id: $id) { ${CART_FIELDS} } }`, { id, language: lang(locale), country: "DE" }, { cache: "no-store" });
  return norm(d.cart);
}
export async function createCart(lines: { merchandiseId: string; quantity: number }[], locale: Locale): Promise<ShopCart> {
  const d = await sf<{ cartCreate: { cart: RawCart; userErrors: UserErr } }>(`mutation M($input: CartInput!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) { cartCreate(input: $input) { cart { ${CART_FIELDS} } userErrors { message } } }`,
    { input: { lines, buyerIdentity: { countryCode: "DE" } }, language: lang(locale), country: "DE" }, { cache: "no-store" });
  check(d.cartCreate.userErrors);
  return norm(d.cartCreate.cart)!;
}
export async function addLines(cartId: string, lines: { merchandiseId: string; quantity: number }[], locale: Locale): Promise<ShopCart> {
  const d = await sf<{ cartLinesAdd: { cart: RawCart; userErrors: UserErr } }>(`mutation M($cartId: ID!, $lines: [CartLineInput!]!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) { cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } userErrors { message } } }`,
    { cartId, lines, language: lang(locale), country: "DE" }, { cache: "no-store" });
  check(d.cartLinesAdd.userErrors);
  return norm(d.cartLinesAdd.cart)!;
}
export async function updateLines(cartId: string, lines: { id: string; quantity: number }[], locale: Locale): Promise<ShopCart> {
  const d = await sf<{ cartLinesUpdate: { cart: RawCart; userErrors: UserErr } }>(`mutation M($cartId: ID!, $lines: [CartLineUpdateInput!]!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) { cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } userErrors { message } } }`,
    { cartId, lines, language: lang(locale), country: "DE" }, { cache: "no-store" });
  check(d.cartLinesUpdate.userErrors);
  return norm(d.cartLinesUpdate.cart)!;
}
export async function removeLines(cartId: string, lineIds: string[], locale: Locale): Promise<ShopCart> {
  const d = await sf<{ cartLinesRemove: { cart: RawCart; userErrors: UserErr } }>(`mutation M($cartId: ID!, $lineIds: [ID!]!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) { cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${CART_FIELDS} } userErrors { message } } }`,
    { cartId, lineIds, language: lang(locale), country: "DE" }, { cache: "no-store" });
  check(d.cartLinesRemove.userErrors);
  return norm(d.cartLinesRemove.cart)!;
}

/* ---------- Admin API: nur für die Newsletter-Einwilligung ---------- */
const adminToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
export const shopifyAdminConfigured = !!(domain && adminToken);

export async function admin<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  if (!shopifyAdminConfigured) throw new Error("shopify_admin_not_configured");
  const res = await fetch(`https://${domain}/admin/api/${version}/graphql.json`, {
    method: "POST", cache: "no-store",
    headers: { "Content-Type": "application/json", "X-Shopify-Access-Token": adminToken! },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`shopify_admin_http_${res.status}`);
  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (json.errors) throw new Error("shopify_admin_graphql");
  return json.data as T;
}

/** Formatiert Shopify-Geldbeträge für die Anzeige. */
export function fmtMoney(m: Money, locale: Locale) {
  return Number(m.amount).toLocaleString(locale === "de" ? "de-DE" : "en-GB", { style: "currency", currency: m.currencyCode });
}

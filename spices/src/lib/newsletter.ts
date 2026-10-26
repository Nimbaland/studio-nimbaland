import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { admin, shopifyAdminConfigured } from "./shopify";

/**
 * Newsletter mit Double-Opt-in.
 * Shopify speichert Kontakt und Einwilligung (Kunden-E-Mail-Marketing). Weil Shopify die Bestätigungsmail
 * nicht per API auslöst, verschickt die Website sie selbst über Resend, mit signiertem Link (HMAC, 7 Tage gültig).
 * Fehlt eine dieser Konfigurationen, meldet die API „not_connected“ und es wird nichts gespeichert oder versendet.
 */
const secret = process.env.NEWSLETTER_SIGNING_SECRET;
const resendKey = process.env.RESEND_API_KEY;
const from = process.env.NEWSLETTER_FROM_EMAIL; // z. B. "Nimbo’s Kitchen <rezepte@nimbaland-spices.de>" (verifizierte Domain)
export const newsletterConfigured = shopifyAdminConfigured && !!secret && !!resendKey && !!from;
const MAX_AGE = 7 * 24 * 3600 * 1000;

const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64url");
const unb64 = (s: string) => Buffer.from(s, "base64url").toString("utf8");
const sign = (payload: string) => createHmac("sha256", secret!).update(payload).digest("base64url");

export function makeToken(email: string, locale: string) {
  const p = `${b64(email.toLowerCase())}.${Date.now()}.${locale === "en" ? "en" : "de"}`;
  return `${p}.${sign(p)}`;
}
export function readToken(tok: string): { email: string; locale: "de" | "en" } | null {
  if (!secret) return null;
  const parts = tok.split(".");
  if (parts.length !== 4) return null;
  const [e, ts, l, s] = parts;
  const expect = Buffer.from(sign(`${e}.${ts}.${l}`));
  const got = Buffer.from(s);
  if (expect.length !== got.length || !timingSafeEqual(expect, got)) return null;
  if (!(Date.now() - Number(ts) < MAX_AGE)) return null;
  return { email: unb64(e), locale: l === "en" ? "en" : "de" };
}

type Cust = { id: string; emailMarketingConsent: { marketingState: string } | null } | null;
async function findCustomer(email: string): Promise<Cust> {
  const d = await admin<{ customers: { nodes: NonNullable<Cust>[] } }>(
    `query F($q: String!) { customers(first: 1, query: $q) { nodes { id emailMarketingConsent { marketingState } } } }`,
    { q: `email:"${email.replace(/"/g, "")}"` });
  return d.customers.nodes[0] ?? null;
}

/** Legt den Kontakt als „ausstehend“ an. Gibt false zurück, wenn bereits bestätigt (dann keine weitere Mail). */
export async function registerPending(email: string, locale: string): Promise<boolean> {
  const c = await findCustomer(email);
  if (c?.emailMarketingConsent?.marketingState === "SUBSCRIBED") return false;
  if (!c) {
    const d = await admin<{ customerCreate: { userErrors: { message: string }[] } }>(
      `mutation C($input: CustomerInput!) { customerCreate(input: $input) { customer { id } userErrors { message } } }`,
      { input: { email, locale, tags: ["newsletter", `newsletter-${locale}`], emailMarketingConsent: { marketingState: "PENDING", marketingOptInLevel: "CONFIRMED_OPT_IN" } } });
    if (d.customerCreate.userErrors.length) throw new Error(d.customerCreate.userErrors.map((e) => e.message).join("; "));
  }
  return true;
}

export async function confirm(email: string): Promise<boolean> {
  const c = await findCustomer(email);
  if (!c) return false;
  const d = await admin<{ customerEmailMarketingConsentUpdate: { userErrors: { message: string }[] } }>(
    `mutation U($input: CustomerEmailMarketingConsentUpdateInput!) { customerEmailMarketingConsentUpdate(input: $input) { customer { id } userErrors { message } } }`,
    { input: { customerId: c.id, emailMarketingConsent: { marketingState: "SUBSCRIBED", marketingOptInLevel: "CONFIRMED_OPT_IN", consentUpdatedAt: new Date().toISOString() } } });
  if (d.customerEmailMarketingConsentUpdate.userErrors.length) throw new Error("consent_update_failed");
  return true;
}

export async function sendConfirmMail(email: string, link: string, locale: string) {
  const de = locale !== "en";
  const subject = de ? "Bitte bestätige deine Anmeldung bei Nimbo’s Kitchen" : "Please confirm your Nimbo’s Kitchen sign-up";
  const text = de
    ? `Hallo,\n\nbitte bestätige deine Anmeldung zum Newsletter von nimbaland.spices (Nimbo’s Kitchen):\n${link}\n\nDer Link ist 7 Tage gültig. Wenn du dich nicht angemeldet hast, ignoriere diese E-Mail einfach. Ohne Bestätigung wirst du nicht angemeldet.`
    : `Hello,\n\nplease confirm your sign-up to the nimbaland.spices newsletter (Nimbo’s Kitchen):\n${link}\n\nThe link is valid for 7 days. If you didn’t sign up, simply ignore this email. Without confirmation you won’t be subscribed.`;
  const html = `<p>${text.split("\n").filter(Boolean).map((l) => (l === link ? `<a href="${link}">${de ? "Anmeldung bestätigen" : "Confirm sign-up"}</a>` : l)).join("</p><p>")}</p>`;
  const res = await fetch(process.env.RESEND_API_URL || "https://api.resend.com/emails", {
    method: "POST", cache: "no-store",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [email], subject, text, html }),
  });
  if (!res.ok) throw new Error(`resend_http_${res.status}`);
}

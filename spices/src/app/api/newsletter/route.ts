import { NextResponse } from "next/server";
import { makeToken, newsletterConfigured, registerPending, sendConfirmMail } from "@/lib/newsletter";
import { asset } from "@/lib/base";

export const dynamic = "force-dynamic";
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let b: { email?: string; consent?: boolean; locale?: string; website?: string };
  try { b = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }
  const email = String(b.email ?? "").trim().toLowerCase();
  const locale = b.locale === "en" ? "en" : "de";
  if (!EMAIL.test(email) || email.length > 254) return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  if (b.consent !== true) return NextResponse.json({ error: "consent_required" }, { status: 400 });
  // Honeypot: Bots füllen das versteckte Feld aus. Antwort ohne Wirkung.
  if (b.website) return NextResponse.json({ status: "pending" }, { status: 202 });
  if (!newsletterConfigured) return NextResponse.json({ error: "not_connected" }, { status: 503 });
  try {
    const needsMail = await registerPending(email, locale);
    if (needsMail) {
      const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin;
      await sendConfirmMail(email, `${origin}${asset("/api/newsletter/confirm")}?t=${encodeURIComponent(makeToken(email, locale))}`, locale);
    }
    // Gleiche Antwort für neue und bestehende Adressen, damit niemand fremde Adressen abfragen kann.
    return NextResponse.json({ status: "pending" }, { status: 202 });
  } catch (e) {
    console.error("[newsletter]", e);
    return NextResponse.json({ error: "failed" }, { status: 502 });
  }
}

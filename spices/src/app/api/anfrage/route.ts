import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const FORMATS = { course: "Kochkurs", supper: "Supper Club" } as const;

/**
 * Anfragen für Kochkurs und Supper Club.
 * Nutzt denselben Kontaktweg wie nimbaland.studio: JSON-POST an CONTACT_WEBHOOK_URL (z. B. Formspree, Make, Zapier).
 * Ohne Endpunkt antwortet die Route mit 503 „not_configured“, speichert nichts und versendet nichts.
 * Das Formular bietet dann ehrlich eine vorbereitete E-Mail als Ausweg an.
 */
export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }

  // Spam-Schutz wie im Studio-Formular: Honeypot gefüllt oder in unter 3 Sekunden abgeschickt → still verwerfen.
  if (String(b.website ?? "").length > 0 || Number(b.elapsed ?? 0) < 3000) return NextResponse.json({ ok: true });

  const format = b.format === "supper" ? "supper" : b.format === "course" ? "course" : null;
  const name = String(b.name ?? "").trim().slice(0, 200);
  const email = String(b.email ?? "").trim().slice(0, 254);
  const venue = b.venue === "company" ? "Im Unternehmen" : b.venue === "home" ? "Bei den Gästen zu Hause" : null;
  const city = String(b.city ?? "").trim().slice(0, 120);
  const size = Number(b.size);
  const date = String(b.date ?? "").trim().slice(0, 300);
  const diet = String(b.diet ?? "").trim().slice(0, 1000);
  const locale = b.locale === "en" ? "en" : "de";

  if (!format || !venue || !city || !name || !EMAIL.test(email) || !Number.isInteger(size) || size < 4 || size > 8 || !date) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }
  // Angaben zu Allergien sind Gesundheitsdaten: nur mit ausdrücklicher Einwilligung annehmen.
  if (diet && b.dietConsent !== true) return NextResponse.json({ error: "consent_required" }, { status: 422 });

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name, email,
        projectType: `${FORMATS[format]} (${size} Personen)`,
        message: `${FORMATS[format]} · ${size} Personen\nWo: ${venue}, ${city}\nWunschtermin: ${date}\nErnährung/Allergien: ${diet || "keine Angabe"}${diet ? " (Einwilligung erteilt)" : ""}`,
        format: FORMATS[format], venue, city, groupSize: size, preferredDate: date, dietaryNotes: diet || null, dietConsent: diet ? true : null,
        locale, source: "nimbaland.spices · Kochkurse & Supper Club", receivedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) return NextResponse.json({ error: "upstream" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}

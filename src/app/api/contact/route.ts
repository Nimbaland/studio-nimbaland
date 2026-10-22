import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Nimmt Anfragen an und leitet sie an CONTACT_WEBHOOK_URL weiter (JSON-POST).
 * Geeignet z. B. für Formspree, Make, Zapier oder einen eigenen Mail-Endpunkt.
 * Ohne konfigurierten Endpunkt: 503 – das Formular zeigt dann einen ehrlichen Hinweis.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Spam-Schutz: Honeypot gefüllt oder in unter 3 Sekunden abgeschickt → still verwerfen
  const elapsed = Number(body.elapsed ?? 0);
  if (String(body.website ?? "").length > 0 || elapsed < 3000) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 200);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const company = String(body.company ?? "").trim().slice(0, 200);
  const projectType = String(body.projectType ?? "").trim().slice(0, 100);

  if (!name || !EMAIL.test(email) || message.length < 20 || body.privacy !== "yes") {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, company, projectType, message, source: "nimbaland.studio", receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) return NextResponse.json({ error: "upstream" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}

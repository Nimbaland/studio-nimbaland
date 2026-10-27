"use client";

import { useId, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import Link from "next/link";
import { href } from "@/i18n/config";
import { asset } from "@/lib/base";

/** Newsletter-Anmeldung mit Double-Opt-in. Zeigt Erfolg nur, wenn der Server die Anmeldung wirklich angenommen hat. */
export function Newsletter({ locale, connected }: { locale: Locale; connected: boolean }) {
  const t = getT(locale);
  const id = useId();
  const [st, setSt] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setSt("error"); setMsg(t("nl.err.email")); return; }
    if (!f.get("consent")) { setSt("error"); setMsg(t("nl.err.consent")); return; }
    setSt("loading"); setMsg("");
    try {
      const r = await fetch(asset("/api/newsletter"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, consent: true, locale, website: f.get("website") || "" }) });
      const j = await r.json().catch(() => ({}));
      if (r.status === 202) { setSt("success"); setMsg(t("nl.success")); return; }
      setSt("error");
      setMsg(j.error === "not_connected" ? t("nl.err.notconnected") : j.error === "invalid_email" ? t("nl.err.email") : j.error === "consent_required" ? t("nl.err.consent") : t("nl.err.generic"));
    } catch { setSt("error"); setMsg(t("nl.err.generic")); }
  }
  return (
    <section className="nl" id="newsletter" aria-labelledby={`${id}-h`}>
      <div className="wrap nl-in">
        <div>
          <h2 id={`${id}-h`}>{t("nl.h")}</h2>
          <p className="lead">{t("nl.lead")}</p>
        </div>
        {!connected ? (
          <p className="nl-ok" role="status">{t("nl.soon")}</p>
        ) : st === "success" ? (
          <p className="nl-ok" role="status">{msg}</p>
        ) : (
          <form className="nl-form" onSubmit={submit} noValidate aria-busy={st === "loading" || undefined}>
            <label htmlFor={`${id}-e`} className="label">{t("nl.email")}</label>
            <div className="nl-row">
              <input id={`${id}-e`} name="email" type="email" autoComplete="email" inputMode="email" required placeholder={t("nl.placeholder")}
                aria-invalid={st === "error" && msg === t("nl.err.email") ? true : undefined} aria-describedby={`${id}-m`} />
              <button className="btn primary" type="submit" disabled={st === "loading"}>{st === "loading" ? t("nl.loading") : t("nl.btn")}</button>
            </div>
            <label className="nl-consent"><input type="checkbox" name="consent" required /> <span>{t("nl.consent")}</span></label>
            <div className="hp" aria-hidden="true"><label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            <p className="credit">{t("nl.privacy")} <Link href={href(locale, "/datenschutz")}>{t("nl.privacy.link")}</Link>.</p>
            <p id={`${id}-m`} className={st === "error" ? "err" : "sr"} role={st === "error" ? "alert" : undefined}>{st === "error" ? msg : ""}</p>
          </form>
        )}
      </div>
    </section>
  );
}

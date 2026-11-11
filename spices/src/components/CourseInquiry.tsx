"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { asset } from "@/lib/base";
import { phone, phoneHref, whatsappHref } from "@/lib/contact";

type Format = "course" | "supper";
type Field = "name" | "email" | "size" | "date" | "consent";
type Status = "idle" | "sending" | "success" | "offline" | "failed";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SIZES = [4, 5, 6, 7, 8];

/** Liest das Format aus ?format=… (Buttons auf Startseite und Unterseite). */
export const formatFromParam = (v: string | null): Format => (v === "supper" || v === "supper-club" ? "supper" : "course");

/**
 * Anfrageformular für Kochkurs und Supper Club.
 * Erfolg erscheint nur, wenn der Server die Anfrage wirklich weitergeleitet hat.
 * Ohne verbundenen Kontaktweg öffnet es eine vorbereitete E-Mail an die Adresse aus dem Impressum.
 */
export function CourseInquiry({ locale, fallbackEmail }: { locale: Locale; fallbackEmail: string }) {
  const t = getT(locale);
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;
  const params = useSearchParams();
  const [format, setFormat] = useState<Format>(() => formatFromParam(params?.get("format") ?? null));
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [diet, setDiet] = useState("");
  const [sent, setSent] = useState<{ name: string; mailto: string; waText: string } | null>(null);
  const started = useRef(Date.now());
  const summary = useRef<HTMLDivElement>(null);
  const result = useRef<HTMLDivElement>(null);

  // Buttons „Kochkurs anfragen“ / „Supper Club anfragen“ setzen das Format über die URL.
  useEffect(() => { const p = params?.get("format"); if (p) setFormat(formatFromParam(p)); }, [params]);
  useEffect(() => { if (status === "success" || status === "offline") result.current?.focus(); }, [status]);

  const fmtName = (f: Format) => t(f === "course" ? "kc.form.format.course" : "kc.form.format.supper");
  const fmtInline = (f: Format) => (locale === "en" ? fmtName(f).toLowerCase() : fmtName(f));

  function validate(d: FormData) {
    const e: Partial<Record<Field, string>> = {};
    if (!String(d.get("name") ?? "").trim()) e.name = t("kc.form.err.name");
    if (!EMAIL.test(String(d.get("email") ?? "").trim())) e.email = t("kc.form.err.email");
    const s = Number(d.get("size"));
    if (!SIZES.includes(s)) e.size = t("kc.form.err.size");
    if (!String(d.get("date") ?? "").trim()) e.date = t("kc.form.err.date");
    if (String(d.get("diet") ?? "").trim() && !d.get("consent")) e.consent = t("kc.form.err.consent");
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const d = new FormData(ev.currentTarget);
    const found = validate(d);
    setErrors(found);
    if (Object.keys(found).length) { setStatus("idle"); requestAnimationFrame(() => summary.current?.focus()); return; }

    const v = {
      name: String(d.get("name")).trim(), email: String(d.get("email")).trim(), size: Number(d.get("size")),
      date: String(d.get("date")).trim(), diet: String(d.get("diet") ?? "").trim(),
    };
    const mailto = `mailto:${fallbackEmail}?subject=${encodeURIComponent(t("kc.mail.subject", { format: fmtName(format) }))}&body=${encodeURIComponent(
      t("kc.mail.body", { format: fmtInline(format), name: v.name, email: v.email, size: v.size, date: v.date, diet: v.diet || t("kc.mail.none") }).replace(/\{name\}/g, v.name))}`;
    const waText = t("kc.mail.body", { format: fmtInline(format), name: v.name, email: v.email, size: v.size, date: v.date, diet: v.diet || t("kc.mail.none") }).replace(/\{name\}/g, v.name);
    setSent({ name: v.name, mailto, waText });
    setStatus("sending");
    try {
      const r = await fetch(asset("/api/anfrage"), {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, format, dietConsent: v.diet ? true : undefined, locale, website: d.get("website") || "", elapsed: Date.now() - started.current }),
      });
      if (r.ok) { setStatus("success"); return; }
      const j = await r.json().catch(() => ({}));
      setStatus(j.error === "not_configured" ? "offline" : "failed");
    } catch { setStatus("failed"); }
  }

  if (status === "success" && sent) {
    return (
      <div className="kc-result ok" ref={result} tabIndex={-1} role="status">
        <h3>{t("kc.form.ok.h", { name: sent.name })}</h3>
        <p>{t("kc.form.ok.p", { format: fmtInline(format) })}</p>
        <button className="btn ghost" type="button" onClick={() => { setStatus("idle"); setSent(null); setDiet(""); started.current = Date.now(); }}>{t("kc.form.ok.again")}</button>
      </div>
    );
  }
  if (status === "offline" && sent) {
    return (
      <div className="kc-result" ref={result} tabIndex={-1} role="status">
        <h3>{t("kc.form.offline.h")}</h3>
        <p>{t("kc.form.offline.p")}</p>
        <div className="btnrow">
          <a className="btn primary" href={sent.mailto}>{t("kc.form.offline.cta")} <span className="arr" aria-hidden="true">→</span></a>
          <a className="btn ghost" href={whatsappHref(sent.waText)} target="_blank" rel="noopener noreferrer">{t("kc.form.offline.wa")} ↗</a>
        </div>
        <p className="credit">{t("kc.form.offline.or")} <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a> · <a href={phoneHref}>{phone}</a></p>
      </div>
    );
  }

  const errCount = Object.keys(errors).length;
  const desc = (f: Field, hint?: string) => [hint, errors[f] ? id(`${f}-e`) : null].filter(Boolean).join(" ") || undefined;
  return (
    <form className="kc-form" onSubmit={onSubmit} noValidate aria-busy={status === "sending" || undefined}>
      <div ref={summary} tabIndex={-1} className={errCount ? "kc-summary" : "sr"} role={errCount ? "alert" : undefined}>
        {errCount ? t("kc.form.err.summary") : ""}
      </div>

      <fieldset className="variants kc-formats">
        <legend className="label">{t("kc.form.format")}</legend>
        {(["course", "supper"] as const).map((f) => (
          <label key={f} className="vopt">
            <input type="radio" name="format" value={f} checked={format === f} onChange={() => setFormat(f)} />
            <span className="vname">{fmtName(f)}</span>
            <span className="kc-fdesc">{t(f === "course" ? "kc.form.format.course.d" : "kc.form.format.supper.d")}</span>
          </label>
        ))}
      </fieldset>

      <div className="kc-row">
        <div className="kc-field">
          <label htmlFor={id("name")}>{t("kc.form.name")} <span className="kc-req" aria-hidden="true">*</span></label>
          <input id={id("name")} name="name" autoComplete="name" required aria-invalid={errors.name ? true : undefined} aria-describedby={desc("name")} />
          {errors.name && <p className="err" id={id("name-e")}>{errors.name}</p>}
        </div>
        <div className="kc-field">
          <label htmlFor={id("email")}>{t("kc.form.email")} <span className="kc-req" aria-hidden="true">*</span></label>
          <input id={id("email")} name="email" type="email" inputMode="email" autoComplete="email" required aria-invalid={errors.email ? true : undefined} aria-describedby={desc("email")} />
          {errors.email && <p className="err" id={id("email-e")}>{errors.email}</p>}
        </div>
      </div>

      <div className="kc-row">
        <div className="kc-field">
          <label htmlFor={id("size")}>{t("kc.form.size")} <span className="kc-req" aria-hidden="true">*</span></label>
          <select id={id("size")} name="size" defaultValue="4" required aria-invalid={errors.size ? true : undefined} aria-describedby={desc("size")}>
            {SIZES.map((n) => <option key={n} value={n}>{t("kc.form.size.opt", { n })}</option>)}
          </select>
          {errors.size && <p className="err" id={id("size-e")}>{errors.size}</p>}
        </div>
        <div className="kc-field">
          <label htmlFor={id("date")}>{t("kc.form.date")} <span className="kc-req" aria-hidden="true">*</span></label>
          <input id={id("date")} name="date" required placeholder={t("kc.form.date.ph")} aria-invalid={errors.date ? true : undefined} aria-describedby={desc("date", id("date-h"))} />
          <p className="credit" id={id("date-h")}>{t("kc.form.date.hint")}</p>
          {errors.date && <p className="err" id={id("date-e")}>{errors.date}</p>}
        </div>
      </div>

      <div className="kc-field">
        <label htmlFor={id("diet")}>{t("kc.form.diet")}</label>
        <textarea id={id("diet")} name="diet" rows={3} value={diet} onChange={(e) => setDiet(e.target.value)} aria-describedby={id("diet-h")} />
        <p className="credit" id={id("diet-h")}>{t("kc.form.diet.hint")}</p>
      </div>
      {diet.trim() && (
        <div className="kc-field">
          <label className="kc-consent">
            <input type="checkbox" name="consent" aria-invalid={errors.consent ? true : undefined} aria-describedby={errors.consent ? id("consent-e") : undefined} />
            <span>{t("kc.form.consent")}</span>
          </label>
          {errors.consent && <p className="err" id={id("consent-e")}>{errors.consent}</p>}
        </div>
      )}

      <div className="hp" aria-hidden="true"><label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <p className="credit">{t("kc.form.privacy")} <Link href={href(locale, "/datenschutz")}>{t("kc.form.privacy.link")}</Link>. <span aria-hidden="true">*</span> {t("kc.form.required")}</p>
      {status === "failed" && <p className="err" role="alert">{t("kc.form.err.generic", { email: fallbackEmail })} {sent && <a href={sent.mailto}>{t("kc.form.offline.cta")}</a>}</p>}
      <div><button className="btn primary" type="submit" disabled={status === "sending"}>{status === "sending" ? t("kc.form.sending") : t("kc.form.submit")}</button></div>
    </form>
  );
}

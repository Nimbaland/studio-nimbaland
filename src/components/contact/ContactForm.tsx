"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { StatusMessage } from "@/components/ui/StatusMessage";

type Errors = Partial<Record<"name" | "email" | "message" | "privacy", string>>;
type Status = "idle" | "sending" | "success" | "notConfigured" | "failed";

type Props = {
  dict: Dictionary["contact"];
  serviceOptions: string[];
  privacyHref: string;
  fallbackEmail: string | null;
  /** Präfix für Feld-IDs, falls das Formular mehrfach im Dokument vorkommt. */
  idPrefix?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Kontaktformular mit Validierung, Honeypot gegen Spam und echtem Versand über /api/contact.
 * Ist kein Endpunkt konfiguriert, meldet das Formular das ehrlich – kein vorgetäuschter Versand.
 */
export function ContactForm({ dict, serviceOptions, privacyHref, fallbackEmail, idPrefix = "" }: Props) {
  const id = (name: string) => `${idPrefix}${name}`;
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(Date.now());

  function validate(data: FormData): Errors {
    const e: Errors = {};
    if (!String(data.get("name") ?? "").trim()) e.name = dict.errors.name;
    if (!EMAIL.test(String(data.get("email") ?? "").trim())) e.email = dict.errors.email;
    if (String(data.get("message") ?? "").trim().length < 20) e.message = dict.errors.message;
    if (!data.get("privacy")) e.privacy = dict.errors.privacy;
    return e;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(data.entries()),
          elapsed: Date.now() - startedAt.current,
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else if (res.status === 503) {
        setStatus("notConfigured");
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    }
  }

  const errorCount = Object.keys(errors).length;
  const f = dict.form;

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div ref={summaryRef} tabIndex={-1} className="outline-none">
        {errorCount > 0 && <StatusMessage tone="error">{dict.errors.summary}</StatusMessage>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id={id("name")} label={f.name} error={errors.name}>
          {(a) => <input {...a} name="name" type="text" autoComplete="name" required className="field__input" />}
        </FormField>
        <FormField id={id("email")} label={f.email} error={errors.email}>
          {(a) => <input {...a} name="email" type="email" autoComplete="email" required className="field__input" />}
        </FormField>
      </div>

      <FormField id={id("company")} label={f.company} optionalLabel={f.optional}>
        {(a) => <input {...a} name="company" type="text" autoComplete="organization" className="field__input" />}
      </FormField>

      <fieldset className="field">
        <legend className="field__label mb-3">
          {f.projectType} <span className="t-muted font-normal">({f.optional})</span>
        </legend>
        <div className="pills">
          {[...serviceOptions, f.other].map((o, i) => (
            <label key={o} className="pill">
              <input type="radio" name="projectType" value={i === serviceOptions.length ? "other" : o} className="pill__input" />
              <span className="pill__label" lang={i === serviceOptions.length ? undefined : "en"}>{o}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <FormField id={id("message")} label={f.message} hint={f.messageHint} error={errors.message}>
        {(a) => <textarea {...a} name="message" required minLength={20} rows={6} placeholder={f.messagePlaceholder} className="field__input" />}
      </FormField>

      {/* Honeypot: für Menschen unsichtbar, Bots füllen es aus */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>{f.honeypot}</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <div className="flex gap-3">
          <input
            id={id("privacy")}
            name="privacy"
            type="checkbox"
            value="yes"
            aria-invalid={errors.privacy ? true : undefined}
            aria-describedby={errors.privacy ? id("privacy-error") : undefined}
            className="mt-1 h-5 w-5 flex-none accent-current"
          />
          <label htmlFor={id("privacy")} className="text-[0.9375rem]">
            {f.privacy}{" "}
            <Link href={privacyHref} className="text-link">{f.privacyLink}</Link>
          </label>
        </div>
        {errors.privacy && <span id={id("privacy-error")} className="field__error">{errors.privacy}</span>}
      </div>

      <div>
        <Button type="submit" loading={status === "sending"} loadingLabel={f.submitting}>{f.submit}</Button>
      </div>

      <div aria-live="polite">
        {status === "success" && <StatusMessage tone="success">{dict.status.success}</StatusMessage>}
        {(status === "notConfigured" || status === "failed") && (
          <StatusMessage tone="error">
            <p>{status === "notConfigured" ? dict.status.notConfigured : dict.status.failed}</p>
            {fallbackEmail && (
              <p className="mt-2">
                {dict.status.emailFallback} <a href={`mailto:${fallbackEmail}`} className="text-link">{fallbackEmail}</a>
              </p>
            )}
          </StatusMessage>
        )}
      </div>
    </form>
  );
}

import type { Dictionary } from "@/i18n/dictionaries/de";
import { ArrowUpRight } from "@/components/ui/Icons";

/** Ersatz für das Kontaktformular, solange es keinen Zustelldienst gibt: direkter E-Mail-Weg, keine Datenerfassung. */
export function MailFallback({ dict, email }: { dict: Dictionary["contact"]; email: string }) {
  const href = `mailto:${email}?subject=${encodeURIComponent(dict.mailSubject)}`;
  return (
    <div className="mail-fallback">
      <p className="t-h3">{dict.mailTitle}</p>
      <p className="t-lead t-muted mt-4 measure">{dict.mailBody}</p>
      <p className="mt-8">
        <a href={href} className="btn btn--primary">
          {dict.mailCta} <ArrowUpRight size={16} />
        </a>
      </p>
      <p className="mt-6"><a href={`mailto:${email}`} className="text-link link-standalone">{email}</a></p>
    </div>
  );
}

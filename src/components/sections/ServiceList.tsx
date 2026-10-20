import { t, type Locale } from "@/i18n/config";
import type { Service } from "@/content/services";

type Props = {
  services: Service[];
  locale: Locale;
  /** "home": nummeriert mit Kurztext · "detailed": Services-Seite mit Leistungsliste */
  variant?: "home" | "detailed";
  deliverablesLabel?: string;
  headingLevel?: "h2" | "h3";
};

/** Leistungen als Regel-Liste: Titel links, Text rechts. */
export function ServiceList({ services, locale, variant = "home", deliverablesLabel, headingLevel: H = "h3" }: Props) {
  const home = variant === "home";
  return (
    <ol className="rule-list">
      {services.map((s, i) => (
        <li key={s.id} id={s.id} className="grid-site gap-y-4 py-8 lg:py-12">
          <div className="col-span-full flex gap-5 lg:col-span-5">
            {home && (
              <span className="t-label t-muted pt-2 tabular-nums" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            )}
            <H className="t-h3" lang="en">{home ? s.homeTitle : s.title}</H>
          </div>
          <div className="col-span-full lg:col-span-6 lg:col-start-7">
            <p className={home ? "measure" : "t-lead measure"}>{t(home ? s.homeSummary : s.description, locale)}</p>
            {!home && (
              <p className="mt-5 measure">
                <span className="t-label t-muted mr-2">{deliverablesLabel}:</span>
                <span lang="en">{s.deliverables.join(", ")}</span>
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

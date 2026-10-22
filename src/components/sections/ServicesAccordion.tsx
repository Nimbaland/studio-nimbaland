"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { t, type Locale } from "@/i18n/config";
import type { Service } from "@/content/services";

export type ServiceExample = { href: string; title: string; src: string; alt: string };

type Props = {
  services: Service[];
  locale: Locale;
  deliverablesLabel: string;
  examples: Record<string, ServiceExample[]>;
  exampleLabel: string;
  focusLabel?: string;
};

/**
 * Leistungen als aufklappbare Zeilen. Offenes Panel nach Vorlage:
 * große Nummer + "// TITEL", links die Leistungen als große "/ ITEM"-Liste,
 * rechts ein Projektbeispiel, darunter die Beschreibung in Mono-Versalien.
 */
export function ServicesAccordion({ services, locale, deliverablesLabel, examples, exampleLabel, focusLabel }: Props) {
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <ol className="accordion">
      {services.map((s, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const btnId = `${base}-btn-${i}`;
        const ex = examples[s.id] ?? [];
        return (
          <li key={s.id} className={`accordion__item${isOpen ? " is-open" : ""}${s.featured ? " is-featured" : ""}`}>
            <h3 className="m-0">
              <button id={btnId} type="button" className="accordion__trigger" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span className="accordion__num t-label t-muted tabular-nums">00-{i + 1}</span>
                <span className="accordion__title" lang="en">{s.homeTitle}{s.featured && focusLabel && <span className="accordion__badge">{focusLabel}</span>}</span>
                <span className="accordion__icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="accordion__panel" inert={!isOpen}>
              <div className="accordion__inner">
                <div className="svc">
                  <div className="svc__body">
                    <ul className="svc__list" aria-label={deliverablesLabel} lang="en">
                      {s.deliverables.map((d) => (
                        <li key={d}><span className="svc__slash">/</span>{d}</li>
                      ))}
                    </ul>

                    {ex.length > 0 && (
                      <div className="svc__examples">
                        {ex.map((e, k) => (
                          <Link key={e.href} href={e.href} className={`svc__example${k > 0 ? " svc__example--small" : ""}`} tabIndex={isOpen ? 0 : -1}>
                            <span className="svc__media">
                              <Image src={e.src} alt={e.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                            </span>
                            <span className="svc__caption">
                              <span className="t-label t-muted">{exampleLabel}</span>
                              <span className="svc__caption-title">{e.title} <span aria-hidden="true">↗</span></span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="svc__desc">{t(s.description, locale)}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

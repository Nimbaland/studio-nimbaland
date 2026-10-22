"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";

export type RecognitionItem = { href: string; text: string; project: string; src: string | null };

/**
 * „Sound familiar?“ – Situationen, in denen sich Besucher wiederfinden.
 * Jede Zeile führt zu einem Projekt als Beleg. Auf großen Screens steht rechts
 * ein fester (sticky) Bildrahmen, der beim Hovern/Fokussieren weich zum passenden
 * Projekt überblendet – nichts springt, nichts verdeckt den Text.
 * Auf Touch/kleinen Screens steht ein kleines Vorschaubild in der Zeile.
 */
export function Recognition({ items, proofLabel, label }: { items: RecognitionItem[]; proofLabel: string; label: string }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="recog">
      <ol aria-label={label}>
        {items.map((it, i) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className={`recog__row${active === i ? " is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="recog__num tabular-nums" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="recog__text">{it.text}</span>
              <span className="recog__proof">
                {it.src && (
                  <span className="recog__thumb" aria-hidden="true">
                    <Image src={it.src} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                )}
                <span>
                  <span className="t-label recog__proof-label">{proofLabel}</span>
                  <span className="recog__project">{it.project} <ArrowUpRight size={14} className="inline-block" /></span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <div className="recog__aside" aria-hidden="true">
        <Link href={current.href} tabIndex={-1} className="recog__preview">
          {items.map((it, i) => it.src && (
            <span key={it.href} className={`recog__img${active === i ? " is-active" : ""}`}>
              <Image src={it.src} alt="" fill sizes="(min-width: 1100px) 32vw, 1px" className="object-cover" />
            </span>
          ))}
          <span className="recog__caption">
            <span className="tabular-nums">{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <span>{current.project} ↗</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

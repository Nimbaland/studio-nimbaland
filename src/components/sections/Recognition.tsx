"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";

export type RecognitionItem = { href: string; text: string; project: string; src: string | null };

/**
 * „Sound familiar?“ – Situationen, in denen sich Besucher wiederfinden.
 * Jede Zeile führt zu einem Projekt als Beleg. Auf Geräten mit Maus folgt das
 * Projektbild dem Zeiger (öffnet sich per clip-path); auf Touch steht ein kleines Vorschaubild in der Zeile.
 */
export function Recognition({ items, proofLabel, label }: { items: RecognitionItem[]; proofLabel: string; label: string }) {
  const [active, setActive] = useState<number | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const w = wrap.current, b = box.current;
    if (!w || !b) return;
    const r = w.getBoundingClientRect();
    b.style.transform = `translate(${e.clientX - r.left + 28}px, ${e.clientY - r.top}px) translate(0, -50%)`;
  }

  return (
    <div ref={wrap} className="recog" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
      <ol aria-label={label}>
        {items.map((it, i) => (
          <li key={it.href}>
            <Link href={it.href} className={`recog__row${active === i ? " is-active" : ""}`} onMouseEnter={() => setActive(i)}>
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
      <div ref={box} className={`recog__preview${active !== null ? " is-visible" : ""}`} aria-hidden="true">
        {items.map((it, i) => it.src && (
          <span key={it.href} className={`recog__img${active === i ? " is-active" : ""}`}>
            <Image src={it.src} alt="" fill sizes="380px" className="object-cover" />
          </span>
        ))}
      </div>
    </div>
  );
}

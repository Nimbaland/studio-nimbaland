"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type PreviewItem = { href: string; title: string; meta: string; year?: string; src: string | null; alt: string };

/**
 * Projektindex nach Referenz ("Awards"-Liste): Beim Überfahren einer Zeile folgt
 * das Titelbild dem Mauszeiger und öffnet sich per clip-path. Auf Touch nur die Liste.
 */
export function HoverPreview({ items, label }: { items: PreviewItem[]; label: string }) {
  const [active, setActive] = useState<number | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const w = wrap.current, b = box.current;
    if (!w || !b) return;
    const r = w.getBoundingClientRect();
    b.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px) translate(-50%, -50%)`;
  }

  return (
    <div ref={wrap} className="hover-index" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
      <ul aria-label={label}>
        {items.map((it, i) => (
          <li key={it.href}>
            <Link href={it.href} className={`hover-index__row${active === i ? " is-active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(null)}>
              <span className="t-label t-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="hover-index__title">{it.title}</span>
              <span className="hover-index__meta t-label t-muted">{it.meta}</span>
              <span className="hover-index__year t-label t-muted">{it.year}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div ref={box} className={`hover-index__preview${active !== null ? " is-visible" : ""}`} aria-hidden="true">
        {items.map((it, i) => it.src && (
          <span key={it.href} className={`hover-index__img${active === i ? " is-active" : ""}`}>
            <Image src={it.src} alt="" fill sizes="420px" className="object-cover" />
          </span>
        ))}
      </div>
    </div>
  );
}

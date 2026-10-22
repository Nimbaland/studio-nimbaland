"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-Reveals nach Referenz: Headlines gleiten herein, Bilder öffnen sich per clip-path
 * und zoomen leicht heraus. Wird automatisch auf passende Elemente in <main> angewendet.
 * Ohne JavaScript oder bei "reduzierter Bewegung" bleibt alles sofort sichtbar.
 */
const TEXT = "main :is(.t-display, .t-h1, .t-h2, .t-lead, .svc__desc, .story__step, .fact, .next-steps li):not(.hero *)";
const MEDIA = "main :is(.project-card__media, .media-figure, .svc__media, .portrait-frame, .slide__media):not(.hero *)";

export function Reveals() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");
    const els: Element[] = [];
    document.querySelectorAll(TEXT).forEach((el) => { if (!el.hasAttribute("data-reveal")) { el.setAttribute("data-reveal", "text"); els.push(el); } });
    document.querySelectorAll(MEDIA).forEach((el) => { if (!el.hasAttribute("data-reveal")) { el.setAttribute("data-reveal", "media"); els.push(el); } });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => {
      // Bereits sichtbare Elemente sofort zeigen (kein Flackern beim Laden)
      const r = el.getBoundingClientRect();
      // sichtbar oder schon darüber gescrollt (z. B. Zurück-Navigation) → sofort zeigen
      if (r.top < window.innerHeight * 0.92) el.classList.add("is-in");
      else io.observe(el);
    });
    // Sicherheitsnetz: nach 4 s alles zeigen
    const t = window.setTimeout(() => document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in")), 4000);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, [pathname]);
  return null;
}

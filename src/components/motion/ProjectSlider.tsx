"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  count: number;
  children: ReactNode;
  hint: string;
  prevLabel: string;
  nextLabel: string;
};

/**
 * Horizontaler Projekt-Slider.
 * Desktop: Die Sektion wird beim Scrollen fixiert und die Karten laufen seitlich durch (GSAP ScrollTrigger).
 * Mobil / reduzierte Bewegung / ohne JS: natives seitliches Wischen mit Scroll-Snap.
 * Der Zähler (01 / 04) folgt der aktuellen Karte.
 */
export function ProjectSlider({ count, children, hint, prevLabel, nextLabel }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(1);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      section.classList.add("is-pinned");
      const distance = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (st) => setIndex(Math.min(count, Math.floor(st.progress * count) + 1)),
        },
      });
      stRef.current = tween.scrollTrigger ?? null;
      return () => {
        stRef.current = null;
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
        section.classList.remove("is-pinned");
      };
    });

    // Mobil: Zähler aus der Wisch-Position
    const onScroll = () => {
      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + 16;
      setIndex(Math.min(count, Math.round(track.scrollLeft / step) + 1));
    };
    track.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      mm.revert();
      track.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  /** Pfeile: eine Karte vor/zurück – im fixierten Modus über die Scroll-Position, sonst seitlich. */
  function go(dir: -1 | 1) {
    const target = Math.min(count, Math.max(1, index + dir));
    const st = stRef.current;
    if (st) {
      const y = st.start + ((st.end - st.start) * (target - 1 + 0.02)) / count;
      const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
      if (lenis) lenis.scrollTo(y, { duration: 1.1 });
      else window.scrollTo({ top: y, behavior: "smooth" });
      return;
    }
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (track && first) track.scrollBy({ left: dir * (first.offsetWidth + 16), behavior: "smooth" });
  }

  return (
    <div ref={sectionRef} className="slider">
      <div className="slider__bar container-site">
        <p className="t-label tabular-nums" aria-hidden="true">
          {String(index).padStart(2, "0")} <span className="t-muted">/ {String(count).padStart(2, "0")}</span>
        </p>
        <div className="slider__nav">
          <p className="t-label t-muted hidden md:block" lang="en">{hint}</p>
          <button type="button" className="slider__arrow" onClick={() => go(-1)} disabled={index <= 1} aria-label={prevLabel}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" className="slider__arrow" onClick={() => go(1)} disabled={index >= count} aria-label={nextLabel}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <ul ref={trackRef} className="slider__track">
        {children}
      </ul>
    </div>
  );
}

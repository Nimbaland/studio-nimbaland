"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  count: number;
  children: ReactNode;
  hint: string;
};

/**
 * Horizontaler Projekt-Slider.
 * Desktop: Die Sektion wird beim Scrollen fixiert und die Karten laufen seitlich durch (GSAP ScrollTrigger).
 * Mobil / reduzierte Bewegung / ohne JS: natives seitliches Wischen mit Scroll-Snap.
 * Der Zähler (01 / 04) folgt der aktuellen Karte.
 */
export function ProjectSlider({ count, children, hint }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(1);

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
      return () => {
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

  return (
    <div ref={sectionRef} className="slider">
      <div className="slider__bar container-site">
        <p className="t-label tabular-nums" aria-hidden="true">
          {String(index).padStart(2, "0")} <span className="t-muted">/ {String(count).padStart(2, "0")}</span>
        </p>
        <p className="t-label t-muted" lang="en">{hint}</p>
      </div>
      <ul ref={trackRef} className="slider__track">
        {children}
      </ul>
    </div>
  );
}

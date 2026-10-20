"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ladeanimation: Prozentzähler 0 → 100, danach gleitet die Fläche nach oben.
 * Läuft einmal pro Sitzung. Sichtbar nur, wenn das Inline-Skript im <head>
 * die Klasse "has-preloader" gesetzt hat (also nie ohne JavaScript und nie bei
 * reduzierter Bewegung). Das Inline-Skript entfernt sie nach 4 s auch selbst –
 * die Seite bleibt so nie hinter der Fläche hängen.
 */
export function Preloader({ label }: { label: string }) {
  const [value, setValue] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("has-preloader")) return;

    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * 100));
      if (t < 1) raf.current = requestAnimationFrame(step);
      else {
        setLeaving(true);
        window.setTimeout(() => {
          root.classList.remove("has-preloader");
          try { sessionStorage.setItem("snb-preloaded", "1"); } catch {}
        }, 700);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className={`preloader${leaving ? " is-leaving" : ""}`} aria-hidden="true">
      {/* Original-Wortmarke statt Text */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/studio-nimbaland-logo-light.svg" alt="" className="preloader__logo" width={202} height={32} />
      <span className="sr-only">{label}</span>
      <span className="preloader__count tabular-nums">
        {value}
        <span className="stop">%</span>
      </span>
    </div>
  );
}

/** Inline-Skript für den <head>: entscheidet vor dem ersten Paint, ob der Preloader läuft. */
export const preloaderBootScript = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(sessionStorage.getItem('snb-preloaded'))return;d.classList.add('has-preloader');setTimeout(function(){d.classList.remove('has-preloader')},4000);}catch(e){}})();`;

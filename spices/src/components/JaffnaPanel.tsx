"use client";

import { useEffect, useRef, useState } from "react";
import { JAFFNA_PATH } from "./jaffna-path";
import { asset } from "@/lib/base";

/** Jaffna-Illustration auf orange-gelbem Verlauf. Die Kontur zeichnet sich beim Hineinscrollen. */
export function JaffnaPanel({ name, sub, credit, alt }: { name: string; sub: string; credit: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [draw, setDraw] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setDraw(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`jpanel${draw ? " draw" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="jmandala" src={asset("/img/mandala-rot.svg")} alt="" aria-hidden="true" />
      <div className="jart">
        <svg className="jaffna" viewBox="-3 -3 102.58 57.82" preserveAspectRatio="xMidYMid meet" role="img" aria-label={alt}>
          <path pathLength={1} d={JAFFNA_PATH} />
        </svg>
      </div>
      <div className="jcap">
        <div><b>{name}</b><span>{sub}</span></div>
        <small>{credit}</small>
      </div>
    </div>
  );
}

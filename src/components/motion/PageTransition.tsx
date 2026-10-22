"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Seitenübergang nach Referenz: Ein Panel in Signalfarbe schiebt sich von unten über die Seite,
 * die neue Seite lädt darunter, dann gleitet das Panel nach oben weg.
 * Greift nur bei internen Links; bei "reduzierter Bewegung" normale Navigation.
 */
export function PageTransition({ label }: { label: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const pending = useRef<string | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // Anker / gleiche Seite
      e.preventDefault();
      pending.current = url.pathname + url.search + url.hash;
      setPhase("cover");
      window.setTimeout(() => { if (pending.current) router.push(pending.current); }, 520);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    if (phase !== "cover" || !pending.current) return;
    if (pending.current.split(/[?#]/)[0] === pathname) {
      pending.current = null;
      window.scrollTo(0, 0);
      const t = window.setTimeout(() => setPhase("reveal"), 120);
      const t2 = window.setTimeout(() => setPhase("idle"), 900);
      return () => { window.clearTimeout(t); window.clearTimeout(t2); };
    }
  }, [pathname, phase]);

  return (
    <div className={`page-transition is-${phase}`} aria-hidden="true">
      {/* Original-Wortmarke (helle Variante, Punkt bleibt in Lime sichtbar) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/nimbaland-studio-logo-light.svg" alt={label} className="page-transition__label" width={500} height={79} />
    </div>
  );
}

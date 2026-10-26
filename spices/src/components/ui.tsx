import Link from "next/link";
import type { ReactNode } from "react";
import { JAFFNA_PATH } from "./jaffna-path";
import type { Heat, Product } from "@/lib/types";
import type { T } from "@/i18n/t";

export const productKey = (p: Pick<Product, "heat">) => (p.heat === "hot" ? "adv" : "cosy");

export function Arrow() {
  return <span className="arr" aria-hidden="true">→</span>;
}

export function SecLabel({ n, children }: { n?: string; children: ReactNode }) {
  return (
    <span className="label">
      {n && <span className="n">{n} /</span>} {children}
    </span>
  );
}

export function HeatTag({ heat, t }: { heat: Heat; t: T }) {
  return (
    <span className={`heat ${heat}`}>
      {heat === "hot" ? (
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1c1 2 4 3 4 7a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-4 0-6z" fill="currentColor" /></svg>
      ) : (
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13C3 6 8 3 14 2c0 6-3 11-10 11zM3 13l6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      )}
      {t(heat === "hot" ? "p.heat.hot" : "p.heat.mild")}
    </span>
  );
}

export function Swatch({ heat }: { heat: Heat }) {
  return <span className={`swatch ${heat === "hot" ? "adv" : "cosy"}`} aria-hidden="true" />;
}

/** Abschnittstrenner: Haarlinie, Ausschnitt der Jaffna-Kontur, Signalpunkte. */
export function Divider() {
  return (
    <div className="wrap" aria-hidden="true">
      <div className="divider">
        <i />
        <svg viewBox="-3 -3 102.58 57.82"><path d={JAFFNA_PATH} fill="none" stroke="currentColor" strokeWidth="2.4" vectorEffect="non-scaling-stroke" /></svg>
        <i />
      </div>
    </div>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  const row = items.map((w, i) => <span key={i}>{w}</span>);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{row}{items.map((w, i) => <span key={`b${i}`}>{w}</span>)}</div>
    </div>
  );
}

export function PageHead({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <div className="wrap pagehead">
      <span className="label">{label}</span>
      <h1>{title}</h1>
      {lead && <p className="lead measure">{lead}</p>}
    </div>
  );
}

export function Btn({ href, variant = "primary", children }: { href: string; variant?: string; children: ReactNode }) {
  return <Link className={`btn ${variant}`} href={href}>{children}</Link>;
}

export function Pending({ children }: { children: ReactNode }) {
  return <span className="tbc">{children}</span>;
}

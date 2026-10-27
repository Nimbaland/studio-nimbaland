"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { href, locales, localeLabels, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { BrandMark } from "./BrandMark";
import { BASE_PATH } from "@/lib/base";
import { salesOpen } from "@/lib/flags";
import { useCartCount } from "./shop";

/** Header in der Grammatik von nimbaland.studio: Graphit, Mono-Navigation in Klammern, DE/EN, Warenkorb. */
export function Header({ locale }: { locale: Locale }) {
  const t = getT(locale);
  const pathname = usePathname() ?? `/${locale}`;
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const items = [
    { path: "/shop", label: t("nav.shop") },
    { path: "/recipes", label: t("nav.recipes") },
    { path: "/story", label: t("nav.story") },
  ];
  const isCurrent = (p: string) => pathname === href(locale, p) || pathname.startsWith(href(locale, p) + "/");
  const rest = pathname.replace(/^\/(de|en)(?=\/|$)/, "");

  useEffect(() => setOpen(false), [pathname]);

  // Seiten mit eigenen Übersetzungs-Slugs (Rezepte) melden ihr Gegenstück per <link rel="alternate" hreflang>.
  const [alt, setAlt] = useState<Partial<Record<Locale, string>>>({});
  useEffect(() => {
    const read = () => {
      const m: Partial<Record<Locale, string>> = {};
      document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((l) => {
        const lang = l.getAttribute("hreflang") as Locale;
        if ((locales as readonly string[]).includes(lang)) { const p = new URL(l.href).pathname; m[lang] = BASE_PATH && p.startsWith(BASE_PATH + "/") ? p.slice(BASE_PATH.length) : p; }
      });
      setAlt(m);
    };
    read();
    const id = window.setTimeout(read, 400);
    return () => window.clearTimeout(id);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site">
      <div className="wrap">
        <BrandMark href={href(locale)} label={`nimbaland.spices – ${locale === "de" ? "Startseite" : "Home"}`} />
        <button ref={toggleRef} className="menubtn" type="button" aria-expanded={open} aria-controls="mainnav" onClick={() => setOpen((v) => !v)}>
          {open ? t("nav.close") : t("nav.menu")}
        </button>
        <nav className={`main${open ? " open" : ""}`} id="mainnav" aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}>
          {items.map((i) => (
            <Link key={i.path} href={href(locale, i.path)} aria-current={isCurrent(i.path) ? "page" : undefined}>[{i.label}]</Link>
          ))}
        </nav>
        <nav className="lang" aria-label={t("nav.lang")}>
          {locales.map((l) => (
            <Link key={l} href={alt[l] ?? `/${l}${rest}`} hrefLang={l} lang={l} aria-current={l === locale ? "true" : undefined}>
              <span aria-hidden="true">{localeLabels[l].short}</span>
              <span className="sr">{localeLabels[l].long}</span>
            </Link>
          ))}
        </nav>
        {salesOpen ? <CartLink locale={locale} /> : (
          <Link className="hdr-cta" href={href(locale, "/newsletter")}>
            <span className="txt">[{t("nav.notify")}]</span>
          </Link>
        )}
      </div>
    </header>
  );
}

function CartLink({ locale }: { locale: Locale }) {
  const t = getT(locale);
  const count = useCartCount(locale);
  return (
    <Link className="hdr-cta" href={href(locale, "/cart")} aria-label={t("nav.cart")}>
      <span className="txt">[{t("nav.cart")}]</span>
      <span className="count">{count}</span>
    </Link>
  );
}

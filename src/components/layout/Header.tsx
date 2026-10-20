"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { BrandMark } from "./BrandMark";
import { LanguageSwitch } from "./LanguageSwitch";

type Props = { locale: Locale; dict: Pick<Dictionary, "nav" | "a11y"> };

export function Header({ locale, dict }: Props) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const items = [
    { path: "/about", label: dict.nav.about },
    { path: "/work", label: dict.nav.work },
    { path: "/services", label: dict.nav.services },
    { path: "/contact", label: dict.nav.contact },
  ];
  const contactHref = href(locale, "/contact");
  const isCurrent = (path: string) =>
    pathname === href(locale, path) || pathname.startsWith(href(locale, path) + "/");

  // Header beim Runterscrollen ausblenden, beim Hochscrollen zeigen
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü bei Navigation schließen
  useEffect(() => setOpen(false), [pathname]);

  // Escape schließt, Fokus bleibt im Menü, Body-Scroll sperren
  useEffect(() => {
    if (!open) return;
    const first = menuRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const nodes = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>("a, button")].filter(Boolean) as HTMLElement[];
        const firstEl = nodes[0];
        const lastEl = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header tone-dark${hidden && !open ? " is-hidden" : ""}`} onFocusCapture={() => setHidden(false)}>
      <div className="container-site site-header__bar">
        <BrandMark href={href(locale)} homeLabel={dict.nav.home} />

        {/* Desktop */}
        <nav aria-label={dict.a11y.mainNav} className="hidden lg:block site-header__nav">
          <ul className="flex items-center gap-6 xl:gap-10">
            {items.map((item) => (
              <li key={item.path}>
                <Link href={href(locale, item.path)} className="nav-link" aria-current={isCurrent(item.path) ? "page" : undefined}>
                  <span aria-hidden="true" className="nav-link__bracket">[</span>
                  <RollText text={item.label} />
                  <span aria-hidden="true" className="nav-link__bracket">]</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch current={locale} label={dict.a11y.languageSwitch} />
          <Link href={contactHref} className="header-cta" lang="en">
            <RollText text={dict.nav.cta} />
            <span aria-hidden="true" className="header-cta__arrow">↗</span>
          </Link>
        </div>

        {/* Mobile */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex min-h-11 items-center gap-3 rounded-sm px-2 font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{dict.nav.menu}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "top-[5px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "top-[5px] -rotate-45" : "top-2.5"}`} />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="mobile-menu tone-dark lg:hidden">
          <nav aria-label={dict.a11y.mainNav}>
            <ul>
              {items.map((item) => (
                <li key={item.path}>
                  <Link href={href(locale, item.path)} className="mobile-menu__link" aria-current={isCurrent(item.path) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8">
            <LanguageSwitch current={locale} label={dict.a11y.languageSwitch} />
          </div>
        </div>
      )}
    </header>
  );
}

/** Buchstaben rollen beim Hover nach oben (Referenz: olhalazarieva.com); Screenreader lesen nur das Wort. */
function RollText({ text }: { text: string }) {
  return (
    <span className="roll" aria-label={text}>
      {[...text].map((ch, i) => (
        <span key={i} className="roll__char" aria-hidden="true" style={{ transitionDelay: `${i * 22}ms` }} data-char={ch === " " ? "\u00a0" : ch}>
          {ch === " " ? "\u00a0" : ch}
        </span>
      ))}
    </span>
  );
}

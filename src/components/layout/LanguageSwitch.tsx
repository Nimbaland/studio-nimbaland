"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

/** Wechselt die Sprache und bleibt dabei auf derselben Seite. */
export function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname() ?? `/${current}`;
  const rest = pathname.replace(/^\/(de|en)(?=\/|$)/, "");

  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-1">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={`/${l}${rest}`}
              hrefLang={l}
              lang={l}
              aria-current={l === current ? "true" : undefined}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-sm font-semibold no-underline transition-colors ${
                l === current ? "text-fg" : "text-muted hover:text-accent"
              }`}
            >
              <span aria-hidden="true">{localeLabels[l].short}</span>
              <span className="sr-only">{localeLabels[l].long}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import { dictionaries, type Dictionary } from "./dictionaries";
import { extraDe, extraEn } from "./dict-extra";
import type { Locale } from "./config";

type Base = { [K in keyof Dictionary]: Dictionary[K] extends string ? K : never }[keyof Dictionary];
type StringKey = Base | keyof typeof extraDe;

const merged = {
  de: { ...dictionaries.de, ...extraDe } as Record<string, unknown>,
  en: { ...dictionaries.en, ...extraEn } as Record<string, unknown>,
};

/** Übersetzer für eine Sprache. Platzhalter wie {n} werden ersetzt. */
export function getT(locale: Locale) {
  const d = merged[locale];
  const t = (key: StringKey, vars?: Record<string, string | number>) => {
    let s = String(d[key] ?? merged.de[key] ?? key);
    if (vars) for (const k in vars) s = s.replace(`{${k}}`, String(vars[k]));
    return s;
  };
  return Object.assign(t, { dict: dictionaries[locale] });
}
export type T = ReturnType<typeof getT>;
export type { StringKey };

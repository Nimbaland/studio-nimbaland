import type { Locale } from "./config";
import de from "./dictionaries/de";
import en from "./dictionaries/en";

const dictionaries = { de, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Dictionary } from "./dictionaries/de";

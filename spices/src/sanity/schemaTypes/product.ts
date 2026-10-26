import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Produkt (Curry-Mischung). Die Kaufstrecke öffnet sich erst, wenn „Für den Verkauf freigegeben“ aktiv ist –
 * und das Studio lässt diese Freigabe nur zu, wenn alle Pflichtangaben eingetragen sind.
 */
/* Preise, Varianten (50 g, 100 g, Nachfüllbeutel), Nettofüllmengen, Grundpreise und Bestand pflegt ausschließlich Shopify.
   Nährwerte sind für Gewürzmischungen freiwillig (LMIV Anhang V Nr. 4) und deshalb kein Pflichtfeld. */
const REQUIRED: [string, string][] = [
  ["operator", "Verantwortlicher Lebensmittelunternehmer mit Anschrift"],
  ["allergens", "Allergenangabe"],
  ["storage", "Lagerung"],
  ["origin", "Herkunft & Herstellung"],
  ["shipping", "Versandinformationen"],
];

export const product = defineType({
  name: "product",
  title: "Produkt",
  type: "document",
  groups: [
    { name: "content", title: "Inhalt", default: true },
    { name: "legal", title: "Pflichtangaben" },
    { name: "release", title: "Freigabe" },
  ],
  fields: [
    defineField({ name: "name", title: "Produktname", type: "string", description: "Bleibt in allen Sprachen gleich, z. B. „Cosy Mildness“", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "URL", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "heat", title: "Schärfe", type: "string", options: { list: [{ title: "mild", value: "mild" }, { title: "scharf", value: "hot" }], layout: "radio" }, validation: (r) => r.required() }),
    defineField({ name: "gradient", title: "Farbverlauf", type: "string", readOnly: true, description: "Wird im Code gepflegt: Cosy = Gelb → Orange, Advanced = Rot-Orange → Rot (aus dem Etikett)." }),
    defineField({ name: "short", title: "Kurzbezeichnung", type: "localeString" }),
    defineField({ name: "description", title: "Kurze Beschreibung", type: "localeText", validation: (r) => r.required() }),
    defineField({ name: "taste", title: "Geschmacksprofil", type: "localeText", description: "Erst nach finaler Verkostung ausfüllen." }),
    defineField({ name: "usage", title: "Anwendung", type: "localeText" }),
    defineField({ name: "ingredients", title: "Zutaten (absteigend nach Gewicht)", type: "array", of: [defineArrayMember({ type: "localeString" })], validation: (r) => r.required().min(1) }),
    defineField({ name: "labelFront", title: "Etikett vorne", type: "recipeImage" }),
    defineField({ name: "labelBack", title: "Etikett hinten", type: "recipeImage" }),
    defineField({ name: "gallery", title: "Weitere Bilder", type: "array", of: [defineArrayMember({ type: "recipeImage" })] }),

    defineField({ name: "shopifyHandle", title: "Shopify-Handle", type: "string", group: "release", description: "Handle des Produkts in Shopify (Standard: URL dieses Produkts). Varianten, Preise, Grundpreise und Bestand kommen von dort." }),
    defineField({ name: "allergens", title: "Allergenangabe", type: "localeText", group: "legal" }),
    defineField({ name: "nutritionBasis", title: "Grundlage der Nährwerte", type: "localeString", group: "legal",
      description: "Pflicht, sobald Nährwerte eingetragen sind, z. B. „Berechnet aus allgemein anerkannten Daten der Zutaten (Art. 31 Abs. 4 LMIV)“ oder „Laboranalyse vom …“. Keine Werte fremder Produkte übernehmen.",
      validation: (r) => r.custom((v, ctx) => ((ctx.document as Record<string, unknown>)?.nutrition && !v ? "Bitte die Grundlage der Nährwerte angeben." : true)) }),
    defineField({ name: "nutrition", title: "Nährwerte je 100 g (freiwillig)", type: "object", group: "legal", options: { collapsible: true, collapsed: true }, fields: [
      defineField({ name: "energyKj", title: "Energie (kJ)", type: "number" }),
      defineField({ name: "energyKcal", title: "Energie (kcal)", type: "number" }),
      defineField({ name: "fat", title: "Fett (g)", type: "number" }),
      defineField({ name: "saturates", title: "davon gesättigte Fettsäuren (g)", type: "number" }),
      defineField({ name: "carbs", title: "Kohlenhydrate (g)", type: "number" }),
      defineField({ name: "sugars", title: "davon Zucker (g)", type: "number" }),
      defineField({ name: "fibre", title: "Ballaststoffe (g)", type: "number" }),
      defineField({ name: "protein", title: "Eiweiß (g)", type: "number" }),
      defineField({ name: "salt", title: "Salz (g)", type: "number" }),
    ], validation: (r) => r.custom((v: Record<string, number> | undefined) => {
      if (!v) return true;
      const keys = ["energyKj", "energyKcal", "fat", "saturates", "carbs", "sugars", "protein", "salt"];
      const missing = keys.filter((k) => v[k] === undefined || v[k] === null);
      return missing.length ? `Unvollständig: ${missing.join(", ")}` : true;
    }) }),
    defineField({ name: "bestBefore", title: "Hinweis Mindesthaltbarkeit", type: "localeString", group: "legal", description: "Online genügt der Hinweis „Mindestens haltbar bis Ende: siehe Verpackung“. Das Datum selbst steht auf der Packung (Anhang X LMIV)." }),
    defineField({ name: "lotNote", title: "Los-/Chargenhinweis", type: "localeString", group: "legal", description: "z. B. „Los: siehe Verpackung“. Auf der Packung mit vorangestelltem „L“ (§ 1 LKV)." }),
    defineField({ name: "composition", title: "Rezeptur (intern, nicht öffentlich)", type: "array", group: "legal", description: "Mengenanteile in Prozent, nur als Grundlage für eine dokumentierte Nährwertberechnung. Wird auf der Website nicht angezeigt.",
      of: [defineArrayMember({ type: "object", fields: [defineField({ name: "ingredient", title: "Zutat", type: "string" }), defineField({ name: "percent", title: "Anteil (%)", type: "number" })], preview: { select: { title: "ingredient", subtitle: "percent" } } })] }),
    defineField({ name: "storage", title: "Lagerung", type: "localeString", group: "legal" }),
    defineField({ name: "operator", title: "Verantwortlicher Lebensmittelunternehmer (Name, Anschrift)", type: "text", rows: 3, group: "legal", description: "Vollständiger Name und Anschrift. Keine Platzhalter." }),
    defineField({ name: "origin", title: "Herkunft & Herstellung", type: "object", group: "legal", fields: [
      defineField({ name: "ingredients", title: "Herkunft der Zutaten", type: "localeText" }),
      defineField({ name: "blending", title: "Ort der Mischung", type: "localeString" }),
      defineField({ name: "filling", title: "Ort der Abfüllung", type: "localeString" }),
    ] }),
    defineField({ name: "shipping", title: "Versandinformationen", type: "localeText", group: "legal" }),

    defineField({ name: "releaseApproved", title: "Für den Verkauf freigegeben", type: "boolean", group: "release", initialValue: false,
      description: "Öffnet „In den Warenkorb“. Nur möglich, wenn alle Pflichtangaben eingetragen sind.",
      validation: (r) => r.custom((value, ctx) => {
        if (!value) return true;
        const doc = ctx.document as Record<string, unknown>;
        const missing = REQUIRED.filter(([k]) => doc?.[k] === undefined || doc?.[k] === null || doc?.[k] === "").map(([, label]) => label);
        return missing.length ? `Freigabe nicht möglich. Es fehlen: ${missing.join(", ")}` : true;
      }) }),
  ],
  preview: { select: { title: "name", ok: "releaseApproved" }, prepare: ({ title, ok }) => ({ title, subtitle: ok ? "Verkauf freigegeben" : "Kaufstrecke gesperrt" }) },
});

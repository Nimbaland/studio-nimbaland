import { defineField, defineType } from "sanity";

/** Text in beiden Sprachen (für Produkte und Kategorien). Fehlt EN, zeigt das Studio eine Warnung. */
export const localeString = defineType({
  name: "localeString",
  title: "Text DE/EN",
  type: "object",
  fields: [
    defineField({ name: "de", title: "Deutsch", type: "string", validation: (r) => r.required().error("Deutscher Text fehlt") }),
    defineField({ name: "en", title: "English", type: "string", validation: (r) => r.required().warning("Englische Übersetzung fehlt – die englische Seite zeigt diesen Text sonst nicht") }),
  ],
});

export const localeText = defineType({
  name: "localeText",
  title: "Mehrzeiliger Text DE/EN",
  type: "object",
  fields: [
    defineField({ name: "de", title: "Deutsch", type: "text", rows: 3, validation: (r) => r.required().error("Deutscher Text fehlt") }),
    defineField({ name: "en", title: "English", type: "text", rows: 3, validation: (r) => r.required().warning("Englische Übersetzung fehlt") }),
  ],
});

export const seo = defineType({
  name: "seo",
  title: "SEO-Angaben",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "title", title: "Seitentitel für Google", type: "string", description: "Ideal bis 60 Zeichen. Leer = Rezepttitel.", validation: (r) => r.max(60).warning("Länger als 60 Zeichen wird bei Google gekürzt") }),
    defineField({ name: "description", title: "Kurzbeschreibung für Google", type: "text", rows: 2, description: "Ideal 120–160 Zeichen. Leer = Einleitung.", validation: (r) => r.max(160).warning("Länger als 160 Zeichen wird bei Google gekürzt") }),
  ],
});

/** Bild mit Pflicht-Alt-Text, Bildnachweis und Herkunft. */
export const recipeImage = defineType({
  name: "recipeImage",
  title: "Bild",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({ name: "alt", title: "Alt-Text (Bildbeschreibung)", type: "string", description: "Beschreibe, was zu sehen ist, z. B. „Linsencurry in einer Tonschale“. Wichtig für Barrierefreiheit und Google.", validation: (r) => r.required().error("Bitte eine Bildbeschreibung eintragen") }),
    defineField({ name: "source", title: "Bildherkunft", type: "string", options: { list: [
      { title: "Eigenes Foto", value: "real" },
      { title: "KI-generiert", value: "ai" },
      { title: "Stockfoto (lizenziert)", value: "stock" },
    ], layout: "radio" }, validation: (r) => r.required().error("Bitte die Bildherkunft angeben") }),
    defineField({ name: "credit", title: "Bildnachweis", type: "string", description: "z. B. „Foto: Nimba“ oder „KI-generiert mit Magnific“" }),
  ],
});

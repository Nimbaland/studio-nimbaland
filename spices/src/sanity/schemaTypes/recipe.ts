import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Ein Rezept = ein Dokument pro Sprache. Die Übersetzung wird über „Zugehörige Übersetzung“ verknüpft.
 * Öffentlich erscheinen nur Rezepte mit Teststatus „Freigegeben“ (und nur veröffentlichte, keine Studio-Entwürfe).
 */
export const recipe = defineType({
  name: "recipe",
  title: "Rezept",
  type: "document",
  groups: [
    { name: "content", title: "Inhalt", default: true },
    { name: "cooking", title: "Kochen" },
    { name: "media", title: "Bild" },
    { name: "settings", title: "Status & Verknüpfung" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "language", title: "Sprache", type: "string", group: "settings", options: { list: [{ title: "Deutsch", value: "de" }, { title: "English", value: "en" }], layout: "radio" }, initialValue: "de", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Titel", type: "string", group: "content", validation: (r) => r.required().max(90) }),
    defineField({ name: "slug", title: "URL", type: "slug", group: "content", description: "Wird aus dem Titel erzeugt. Teil der Adresse, z. B. /de/recipes/linsencurry", options: { source: "title", maxLength: 80 }, validation: (r) => r.required() }),
    defineField({ name: "teaser", title: "Kurzbeschreibung für die Rezeptkarte", type: "text", rows: 2, group: "content", description: "Ein, zwei appetitliche Sätze. Ideal unter 140 Zeichen.", validation: (r) => r.required().max(180) }),
    defineField({ name: "intro", title: "Einleitung", type: "text", rows: 4, group: "content", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Kategorie", type: "reference", to: [{ type: "category" }], group: "content", validation: (r) => r.required() }),
    defineField({ name: "tags", title: "Tags (Filter)", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "tag" }] })], group: "content", description: "z. B. vegan, mild. Erscheinen als Filter, nicht als Kategorie." }),
    defineField({ name: "author", title: "Autor", type: "string", group: "content", options: { list: [{ title: "Nimba", value: "nimba" }, { title: "Gastkoch", value: "guest" }], layout: "radio" }, initialValue: "nimba" }),
    defineField({ name: "guestName", title: "Name des Gastkochs", type: "string", group: "content", hidden: ({ document }) => document?.author !== "guest" }),
    defineField({ name: "chefId", title: "Gastkoch-Seite (ID)", type: "string", group: "content", description: "Verknüpft das Rezept mit der Gastkoch-Seite, z. B. „philf-henker“.", hidden: ({ document }) => document?.author !== "guest" }),

    defineField({ name: "servings", title: "Portionen", type: "number", group: "cooking", validation: (r) => r.min(1).max(20).integer() }),
    defineField({ name: "prepMinutes", title: "Vorbereitung (Minuten)", type: "number", group: "cooking", validation: (r) => r.min(0).integer() }),
    defineField({ name: "cookMinutes", title: "Kochzeit (Minuten)", type: "number", group: "cooking", validation: (r) => r.min(0).integer() }),
    defineField({ name: "timesVerified", title: "Zeiten und Portionen beim Nachkochen geprüft", type: "boolean", group: "cooking", initialValue: false }),
    defineField({ name: "ingredients", title: "Zutaten", type: "array", group: "cooking", description: "Eine Zeile pro Zutat. Zwischenüberschriften (z. B. „Für das Dressing“) als eigener Eintrag.", of: [
      defineArrayMember({ name: "ingredient", title: "Zutat", type: "object", fields: [
        defineField({ name: "text", title: "Zutat mit Menge", type: "string", validation: (r) => r.required() }),
        defineField({ name: "isHeading", title: "Ist Zwischenüberschrift", type: "boolean", initialValue: false }),
      ], preview: { select: { title: "text", h: "isHeading" }, prepare: ({ title, h }) => ({ title: h ? `— ${title} —` : title }) } }),
    ], validation: (r) => r.required().min(1) }),
    defineField({ name: "steps", title: "Zubereitungsschritte", type: "array", group: "cooking", of: [defineArrayMember({ type: "text", rows: 2 })], description: "Ein Schritt pro Eintrag. Die Nummerierung entsteht automatisch.", validation: (r) => r.required().min(1) }),
    defineField({ name: "product", title: "Verwendete Mischung", type: "reference", to: [{ type: "product" }], group: "cooking", validation: (r) => r.required().warning("Ohne Mischung erscheint das Rezept nicht auf der Produktseite") }),
    defineField({ name: "dosage", title: "Dosierung", type: "string", group: "cooking", description: "z. B. „1–1½ EL für 4 Portionen (vorläufig, ungetestet)“" }),
    defineField({ name: "tip", title: "Küchentipp", type: "text", rows: 2, group: "cooking" }),
    defineField({ name: "allergenNote", title: "Allergenhinweis zum Rezept", type: "string", group: "cooking", description: "z. B. „Enthält Sesam (Tahini).“" }),

    defineField({ name: "image", title: "Rezeptbild", type: "recipeImage", group: "media", validation: (r) => r.required() }),

    defineField({ name: "testStatus", title: "Teststatus", type: "string", group: "settings", options: { list: [
      { title: "Entwurf – noch nicht gekocht", value: "draft" },
      { title: "Nachgekocht – Redaktion prüft", value: "cooked" },
      { title: "Freigegeben – erscheint öffentlich", value: "approved" },
    ], layout: "radio" }, initialValue: "draft", validation: (r) => r.required() }),
    defineField({ name: "featured", title: "Auf der Startseite hervorheben", type: "boolean", group: "settings", initialValue: false }),
    defineField({ name: "translation", title: "Zugehörige Übersetzung", type: "reference", to: [{ type: "recipe" }], group: "settings", description: "Das gleiche Rezept in der anderen Sprache. Der DE/EN-Umschalter springt dorthin.",
      options: { filter: ({ document }) => ({ filter: "language != $lang && !(_id in path('drafts.**'))", params: { lang: document?.language ?? "de" } }) } }),
    defineField({ name: "seo", title: "SEO-Angaben", type: "seo", group: "seo" }),
  ],
  orderings: [{ title: "Titel", name: "titleAsc", by: [{ field: "title", direction: "asc" }] }],
  preview: {
    select: { title: "title", lang: "language", status: "testStatus", media: "image" },
    prepare: ({ title, lang, status, media }) => ({
      title,
      subtitle: `${(lang ?? "?").toUpperCase()} · ${status === "approved" ? "Freigegeben" : status === "cooked" ? "Nachgekocht" : "Entwurf"}`,
      media,
    }),
  },
});

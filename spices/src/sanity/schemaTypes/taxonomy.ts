import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Rezeptkategorie",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Name", type: "localeString", validation: (r) => r.required() }),
    defineField({ name: "key", title: "Kürzel", type: "slug", description: "Technischer Name, z. B. quick, tamil, creations", options: { source: "title.de" }, validation: (r) => r.required() }),
    defineField({ name: "intro", title: "Kurzbeschreibung", type: "localeText" }),
    defineField({ name: "order", title: "Reihenfolge", type: "number", initialValue: 1 }),
  ],
  preview: { select: { title: "title.de", subtitle: "title.en" } },
});

export const tag = defineType({
  name: "tag",
  title: "Tag / Filter",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Name", type: "localeString", validation: (r) => r.required() }),
    defineField({ name: "key", title: "Kürzel", type: "slug", options: { source: "title.en" }, validation: (r) => r.required() }),
  ],
  preview: { select: { title: "title.de", subtitle: "title.en" } },
});

import type { StructureResolver } from "sanity/structure";

/** Seitenleiste im Studio: Rezepte nach Sprache und Status, fehlende Übersetzungen sichtbar. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("nimbaland.spices")
    .items([
      S.listItem().title("Rezepte – Deutsch").child(S.documentList().title("Rezepte DE").schemaType("recipe").filter('_type == "recipe" && language == "de"')),
      S.listItem().title("Rezepte – English").child(S.documentList().title("Recipes EN").schemaType("recipe").filter('_type == "recipe" && language == "en"')),
      S.listItem().title("Ohne Übersetzung").child(S.documentList().title("Rezepte ohne verknüpfte Übersetzung").schemaType("recipe").filter('_type == "recipe" && !defined(translation)')),
      S.listItem().title("Noch nicht freigegeben").child(S.documentList().title("Entwürfe & in Prüfung").schemaType("recipe").filter('_type == "recipe" && testStatus != "approved"')),
      S.divider(),
      S.documentTypeListItem("product").title("Produkte"),
      S.documentTypeListItem("category").title("Kategorien"),
      S.documentTypeListItem("tag").title("Tags / Filter"),
    ]);

// Erzeugt seed/seed.ndjson aus content/recipes.json für den ersten Import nach Sanity.
// Aufruf: npm run seed:build  →  danach  npm run seed:import
// Alle Rezepte werden mit Teststatus „Entwurf“ angelegt und erscheinen öffentlich erst nach Freigabe.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";

const data = JSON.parse(readFileSync(new URL("../content/recipes.json", import.meta.url), "utf8"));
const { chefs } = JSON.parse(readFileSync(new URL("../content/products.json", import.meta.url), "utf8"));
const out = [];
const key = (i) => `k${i.toString(36)}${Math.random().toString(36).slice(2, 7)}`;
const ref = (id) => ({ _type: "reference", _ref: id });
mkdirSync(new URL("../seed/images/", import.meta.url), { recursive: true });
const asset = (publicPath) => {
  const file = basename(publicPath);
  copyFileSync(new URL(`../public/${publicPath.replace(/^\//, "")}`, import.meta.url), new URL(`../seed/images/${file}`, import.meta.url));
  return `image@file://./images/${file}`;
};

data.categories.forEach((c, i) => out.push({
  _id: `category-${c.id}`, _type: "category", order: i + 1, key: { _type: "slug", current: c.id },
  title: { _type: "localeString", de: c.de, en: c.en },
  intro: { _type: "localeText", de: c.introDe, en: c.introEn },
}));
for (const [k, v] of Object.entries(data.tags)) out.push({ _id: `tag-${k}`, _type: "tag", key: { _type: "slug", current: k }, title: { _type: "localeString", de: v.de, en: v.en } });

const BASE = [["Koriander", "Coriander"], ["Kreuzkümmel", "Cumin"], ["Fenchelsamen", "Fennel seeds"], ["Schwarzer Pfeffer", "Black pepper"], ["Kurkuma", "Turmeric"], ["Curryblätter", "Curry leaves"], ["Pandan", "Pandan"]];
const products = [
  { slug: "cosy-mildness", name: "Cosy Mildness", heat: "mild", img: "cozy", gradient: "#FDDD32 → #F9A737 → #F17340 (aus Etikett, Vektorwerte bestätigen)",
    short: ["Die milde Mischung", "The mild blend"], desc: ["Volle Gewürzbasis, ganz ohne Chili. Für alle, die Wärme und Aroma wollen, aber keine Schärfe.", "The full spice base with no chilli. For anyone who wants warmth and aroma without the heat."], extra: [] },
  { slug: "advanced-spiciness", name: "Advanced Spiciness", heat: "hot", img: "adv", gradient: "#F2623D → #ED1E24 (aus Etikett, Vektorwerte bestätigen)",
    short: ["Die scharfe Mischung", "The spicy blend"], desc: ["Dieselbe Gewürzbasis plus rote Chilis. Für alle, die beim Curry die Schärfe spüren wollen.", "The same spice base plus red chillies. For anyone who wants to feel the heat in their curry."], extra: [["Rote Chilis", "Red chillies"]] },
];
for (const p of products) out.push({
  _id: `product-${p.slug}`, _type: "product", name: p.name, slug: { _type: "slug", current: p.slug }, heat: p.heat, gradient: p.gradient,
  short: { _type: "localeString", de: p.short[0], en: p.short[1] },
  description: { _type: "localeText", de: p.desc[0], en: p.desc[1] },
  ingredients: [...BASE, ...p.extra].map(([de, en], i) => ({ _key: key(i), _type: "localeString", de, en })),
  storage: { _type: "localeString", de: "Kühl, trocken und lichtgeschützt lagern. Nach dem Öffnen gut verschließen. Aromaschutz beachten.", en: "Store in a cool, dry place away from light. Close tightly after opening to protect the aroma." },
  origin: { ingredients: { _type: "localeText", de: "Sri Lanka", en: "Sri Lanka" }, blending: { _type: "localeString", de: "Jaffna, Sri Lanka", en: "Jaffna, Sri Lanka" }, filling: { _type: "localeString", de: "Jaffna, Sri Lanka", en: "Jaffna, Sri Lanka" } },
  shopifyHandle: p.slug,
  labelFront: { _type: "recipeImage", _sanityAsset: asset(`img/${p.img}-front.jpg`), alt: `Etikett ${p.name}, Vorderseite (Entwurf)`, source: "real", credit: "Etikettentwurf Nimbaland" },
  labelBack: { _type: "recipeImage", _sanityAsset: asset(`img/${p.img}-back.jpg`), alt: `Etikett ${p.name}, Rückseite (Entwurf)`, source: "real", credit: "Etikettentwurf Nimbaland" },
  releaseApproved: false,
});

for (const r of data.recipes) {
  for (const lang of ["de", "en"]) {
    const x = r[lang];
    const other = lang === "de" ? "en" : "de";
    out.push({
      _id: `recipe-${r.id}-${lang}`, _type: "recipe", language: lang,
      title: x.title, slug: { _type: "slug", current: lang === "de" ? r.id : r.slugEn },
      teaser: x.teaser, intro: x.intro, category: ref(`category-${r.category}`),
      tags: r.tags.map((t, i) => ({ ...ref(`tag-${t}`), _key: key(i) })),
      author: r.author, chefId: chefs.find((c) => c.recipes.includes(r.id))?.id, servings: r.servings ?? undefined, prepMinutes: r.prep ?? undefined, cookMinutes: r.cook ?? undefined, timesVerified: false,
      ingredients: x.ingredients.map((t, i) => ({ _key: key(i), _type: "ingredient", text: t.replace(/:$/, ""), isHeading: /:$/.test(t) })),
      steps: x.steps, product: r.product ? ref(`product-${r.product}`) : undefined, dosage: x.dosage, tip: x.tip,
      allergenNote: r.allergenNote?.[lang],
      image: { _type: "recipeImage", _sanityAsset: asset(r.img), alt: x.title, source: r.imgSource, credit: r.imgSource === "ai" ? "KI-generiert mit Magnific" : "Foto: Nimba" },
      testStatus: "draft", featured: !!r.featured,
      translation: { ...ref(`recipe-${r.id}-${other}`), _weak: true },
    });
  }
}
writeFileSync(new URL("../seed/seed.ndjson", import.meta.url), out.map((d) => JSON.stringify(d)).join("\n") + "\n");
console.log(`seed/seed.ndjson: ${out.length} Dokumente`);

import type { Locale } from "@/i18n/config";
import type { Product } from "./types";
import { getOrigin } from "./blends";
import { asset } from "@/lib/base";

/**
 * Startdaten der beiden Mischungen, solange Sanity noch nicht verbunden ist.
 * Zutaten laut Etikett (Reihenfolge absteigend nach Gewicht bestätigt). Preise, Varianten und Füllmengen kommen aus Shopify.
 * Unternehmer-Anschrift und Versand fehlen bewusst und werden nachgereicht. Bis dahin bleibt die Kaufstrecke gesperrt.
 */
const BASE = {
  de: ["Koriander", "Kreuzkümmel", "Fenchelsamen", "Schwarzer Pfeffer", "Kurkuma", "Curryblätter", "Pandan"],
  en: ["Coriander", "Cumin", "Fennel seeds", "Black pepper", "Turmeric", "Curry leaves", "Pandan"],
};
const CHILI = { de: "Rote Chilis", en: "Red chillies" };

export function LOCAL_PRODUCTS(lang: Locale): Product[] {
  const de = lang === "de";
  const o = getOrigin(lang);
  const origin = { ingredients: o.ingredients, blending: o.blending, filling: o.filling };
  return [
    {
      slug: "cosy-mildness", name: "Cosy Mildness", heat: "mild",
      short: de ? "Die milde Mischung" : "The mild blend",
      description: de ? "Volle Gewürzbasis, ganz ohne Chili. Für alle, die Wärme und Aroma wollen, aber keine Schärfe." : "The full spice base with no chilli. For anyone who wants warmth and aroma without the heat.",
      ingredients: BASE[lang],
      storage: de ? "Kühl, trocken und lichtgeschützt lagern. Nach dem Öffnen gut verschließen. Aromaschutz beachten." : "Store in a cool, dry place away from light. Close tightly after opening to protect the aroma.",
      origin, releaseApproved: false,
      labelFront: { src: asset("/img/cozy-front.jpg"), alt: de ? "Etikett Cosy Mildness, Vorderseite (Entwurf)" : "Cosy Mildness label, front (draft)" },
      labelBack: { src: asset("/img/cozy-back.jpg"), alt: de ? "Etikett Cosy Mildness, Rückseite (Entwurf)" : "Cosy Mildness label, back (draft)" },
      gallery: [
        { src: asset("/img/photo-55.jpg"), alt: de ? "Gemahlene Kurkuma auf einem Kokosnusslöffel" : "Ground turmeric on a coconut-shell spoon", source: "real" },
        { src: asset("/img/photo-38.jpg"), alt: de ? "Kreuzkümmel, Bockshornklee und gemahlene Currymischung auf Kokosnusslöffeln" : "Cumin, fenugreek and ground curry blend on coconut-shell spoons", source: "real" },
      ],
    },
    {
      slug: "advanced-spiciness", name: "Advanced Spiciness", heat: "hot",
      short: de ? "Die scharfe Mischung" : "The spicy blend",
      description: de ? "Dieselbe Gewürzbasis plus rote Chilis. Für alle, die beim Curry die Schärfe spüren wollen." : "The same spice base plus red chillies. For anyone who wants to feel the heat in their curry.",
      ingredients: [...BASE[lang], CHILI[lang]],
      storage: de ? "Kühl, trocken und lichtgeschützt lagern. Nach dem Öffnen gut verschließen. Aromaschutz beachten." : "Store in a cool, dry place away from light. Close tightly after opening to protect the aroma.",
      origin, releaseApproved: false,
      labelFront: { src: asset("/img/adv-front.jpg"), alt: de ? "Etikett Advanced Spiciness, Vorderseite (Entwurf)" : "Advanced Spiciness label, front (draft)" },
      labelBack: { src: asset("/img/adv-back.jpg"), alt: de ? "Etikett Advanced Spiciness, Rückseite (Entwurf)" : "Advanced Spiciness label, back (draft)" },
      gallery: [
        { src: asset("/img/photo-60.jpg"), alt: de ? "Gemahlenes rotes Chilipulver auf einem Kokosnusslöffel" : "Ground red chilli on a coconut-shell spoon", source: "real" },
        { src: asset("/img/photo-39.jpg"), alt: de ? "Gemahlene Currymischung mit grünen Chilis, Habaneros, Limette und Minze" : "Ground curry blend with green chillies, habaneros, lime and mint", source: "real" },
      ],
    },
  ];
}

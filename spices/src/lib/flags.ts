/**
 * Landing-Modus: Solange NEXT_PUBLIC_SALES_OPEN nicht "true" ist, läuft die Website als Landingpage.
 * Kein Warenkorb, keine Kaufbuttons, keine Warenkorb-API und damit auch kein Warenkorb-Cookie.
 * Zum Verkaufsstart in Vercel auf "true" setzen (zusätzlich müssen Shopify und die Pflichtangaben vollständig sein).
 */
export const salesOpen = process.env.NEXT_PUBLIC_SALES_OPEN === "true";

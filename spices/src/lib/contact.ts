/**
 * Kontaktwege für Anfragen zu Kochkurs und Supper Club.
 * Gleiche, freigegebene Angaben wie auf nimbaland.studio (src/content/site.ts im Hauptprojekt, Stand 11.11.2026).
 * Ändert sich dort etwas, hier ebenfalls anpassen.
 */
export const inquiryEmail = "nimba@nimbaland.com";
export const phone = "+49 155 659 107 37";
export const phoneHref = "tel:+4915565910737";
/** WhatsApp Business, nur als einfacher Link eingebunden (keine Datenübertragung beim Seitenaufruf). */
export const whatsappHref = (text?: string) => `https://wa.me/4915565910737${text ? `?text=${encodeURIComponent(text)}` : ""}`;

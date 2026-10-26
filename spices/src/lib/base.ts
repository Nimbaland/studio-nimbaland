/**
 * Die Website läuft als Unterseite von nimbaland.studio unter /spices (Next.js basePath).
 * Links über <Link> und redirect() ergänzt Next.js selbst. Für Bilder, fetch() und eigene URLs nutze asset()/withBase().
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => (p.startsWith("/") && !p.startsWith("//") && !p.startsWith(BASE_PATH + "/") ? BASE_PATH + p : p);
export const withBase = asset;

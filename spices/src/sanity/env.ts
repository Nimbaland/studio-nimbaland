export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-10-01";
/** true, sobald eine Sanity-Projekt-ID hinterlegt ist. Sonst nutzt die Website die lokalen Startinhalte. */
export const sanityConfigured = projectId.length > 0;

import type { Locale } from "@/i18n/config";

export const AI_LABEL: Record<Locale, string> = { de: "KI-generiert", en: "AI-generated" };

/**
 * Sichtbare Kennzeichnung KI-generierter Inhalte (EU AI Act, Art. 50 Abs. 4).
 * Dezent, aber beim ersten Sehen klar erkennbar; liegt oben links, damit Video-Steuerelemente frei bleiben.
 */
export function AiBadge({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <span className={`ai-badge ${className}`} lang={locale}>
      <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M8 0l1.8 6.2L16 8l-6.2 1.8L8 16l-1.8-6.2L0 8l6.2-1.8z" fill="currentColor" /></svg>
      {AI_LABEL[locale]}
    </span>
  );
}

import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { ButtonLink } from "@/components/ui/Button";

/** Sichtbar in Produktion, solange noch kein Projekt freigegeben ist. */
export function WorkEmptyState({ locale, dict }: { locale: Locale; dict: Dictionary["work"] }) {
  return (
    <div className="grid-site gap-y-6 border-t border-line pt-10">
      <p className="t-h3 col-span-full lg:col-span-6">{dict.emptyTitle}</p>
      <div className="col-span-full lg:col-span-6">
        <p className="t-muted measure">{dict.emptyBody}</p>
        <div className="mt-6"><ButtonLink href={href(locale, "/contact")} lang="en">{dict.emptyCta}</ButtonLink></div>
      </div>
    </div>
  );
}

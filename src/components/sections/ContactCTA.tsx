import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { ButtonLink } from "@/components/ui/Button";

type Props = {
  locale: Locale;
  dict: Dictionary["contactCta"];
  /** Nummerierte Eyebrow ("Contact / 04") nur auf der Startseite. */
  showEyebrow?: boolean;
};

export function ContactCTA({ locale, dict, showEyebrow = false }: Props) {
  return (
    <section className="tone-dark section border-t border-line" aria-labelledby="cta-title">
      <div className="container-site grid-site gap-y-10">
        <div className="col-span-full lg:col-span-7">
          {showEyebrow && <p className="t-label t-muted mb-6" lang="en">{dict.eyebrow}</p>}
          <h2 id="cta-title" className="t-h1" lang="en">{dict.title}</h2>
        </div>
        <div className="col-span-full flex flex-col gap-4 lg:col-span-4 lg:col-start-9 lg:self-end">
          <p className="t-lead">{dict.body}</p>
          <p className="t-lead t-muted">{dict.prompt}</p>
          <div className="mt-4"><ButtonLink href={href(locale, "/contact")} lang="en">{dict.button}</ButtonLink></div>
        </div>
        <p className="t-label t-muted col-span-full mt-6 border-t border-line pt-6" lang="en">{dict.availability}</p>
      </div>
    </section>
  );
}

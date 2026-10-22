import Image from "next/image";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { site } from "@/content/site";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { ButtonLink } from "@/components/ui/Button";

export function Portrait({ alt, priority }: { alt: string; priority?: boolean }) {
  return site.portrait ? (
    <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-sm">
      <Image src={site.portrait} alt={alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" priority={priority} />
    </div>
  ) : (
    <AssetPlaceholder code="ASSET_REQUIRED" path="/brand/portrait.webp" aspect="4/5" label={alt} />
  );
}

/** About-Teaser: großer Leitsatz, Porträt, Text in zwei Spalten. */
export function AboutPreview({ locale, dict, portraitAlt }: { locale: Locale; dict: Dictionary["aboutPreview"]; portraitAlt: string }) {
  return (
    <section className="tone-dark section border-t border-line" aria-labelledby="about-title">
      <div className="container-site grid-site gap-y-10">
        <div className="col-span-full lg:col-span-8">
          <p className="t-label t-muted mb-6" lang="en">{dict.eyebrow}</p>
          <h2 id="about-title" className="t-h2" lang="en">{dict.sectionTitle}</h2>
        </div>

        <div className="col-span-full max-w-[16rem] md:col-span-3 md:max-w-none lg:col-span-3 lg:col-start-1 lg:mt-10">
          <Portrait alt={portraitAlt} />
        </div>
        <div className="col-span-full md:col-span-5 lg:col-span-8 lg:col-start-5 lg:mt-10">
          <p className="t-h2 italic">{dict.lead}</p>
          <div className="mt-8 flex flex-col gap-5">
            {dict.body.map((p, i) => <p key={i} className={i === 0 ? "t-lead measure" : "measure t-muted"}>{p}</p>)}
          </div>
          <dl className="facts">
            {dict.facts.map((f) => (
              <div key={f.label} className="fact">
                <dt className="sr-only">{f.label}</dt>
                <dd className="fact__value font-display" aria-hidden="true">{f.value}</dd>
                <dd className="fact__label t-label t-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10"><ButtonLink href={href(locale, "/about")} variant="secondary" lang="en">{dict.cta}</ButtonLink></div>
        </div>
      </div>
    </section>
  );
}

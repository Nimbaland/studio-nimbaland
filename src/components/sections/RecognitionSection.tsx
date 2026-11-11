import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { site } from "@/content/site";
import { getProject } from "@/content/projects";
import { Recognition } from "./Recognition";

/** „Sound familiar?“ – Situationen zum Wiedererkennen, jede führt zu einem Projekt. */
export function RecognitionSection({ locale, dict, outroHref }: { locale: Locale; dict: Dictionary; outroHref: string }) {
  const r = dict.recognition;
  const recog = site.recognition
    .map((it) => ({ it, p: getProject(it.slug) }))
    .filter(({ p }) => p?.published)
    .map(({ it, p }) => ({ href: href(locale, `/work/${p!.slug}`), text: it[locale], project: p!.title, src: p!.coverImage.src }));
  return (
    <section className="tone-light section" aria-labelledby="recog-title">
      <div className="container-site">
        <div className="grid-site gap-y-6">
          <div className="col-span-full lg:col-span-6">
            <h2 id="recog-title" className="t-h1">{r.title}</h2>
          </div>
          <p className="t-lead measure col-span-full lg:col-span-5 lg:col-start-8 lg:self-end">{r.intro}</p>
        </div>
        <div className="mt-12 lg:mt-16">
          <Recognition items={recog} proofLabel={r.proof} label={r.title} />
        </div>
        <p className="recog__outro t-lead">
          <a href={outroHref} className="link-standalone">{r.outro} <span aria-hidden="true">→</span></a>
        </p>
      </div>
    </section>
  );
}

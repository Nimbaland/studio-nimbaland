import type { Metadata } from "next";
import { href, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Portrait } from "@/components/sections/AboutPreview";
import { ButtonLink } from "@/components/ui/Button";
import { t } from "@/i18n/config";
import { experience, education, skills, languages } from "@/content/about";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/about", title: "Behind the ideas", description: d.about.intro });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const a = getDictionary(locale).about;

  return (
    <>
      <PageIntro eyebrow={a.name} title={a.pageTitle} titleLang="en" subtitle={a.role} />

      <section className="tone-dark section border-t border-line">
        <div className="container-site grid-site gap-y-12">
          <div className="col-span-full md:col-span-3 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Portrait alt={a.portraitAlt} priority />
            </div>
          </div>
          <div className="col-span-full md:col-span-5 lg:col-span-6 lg:col-start-7">
            <p className="t-h3">{a.intro}</p>
            {a.body.map((p, i) => (
              <p key={i} className="measure mt-6">{p}</p>
            ))}

            <h2 className="t-h2 mt-16">{a.drivesTitle}</h2>
            <p className="t-lead measure mt-6">{a.drivesBody}</p>
            <p className="measure mt-6">{a.studioNote}</p>
          </div>
        </div>
      </section>

      <section className="tone-dark section border-t border-line" aria-labelledby="experience">
        <div className="container-site grid-site gap-y-10">
          <div className="col-span-full lg:col-span-4">
            <p className="t-label t-muted mb-6" lang="en">Experience</p>
            <h2 id="experience" className="t-h2">{locale === "de" ? "Stationen." : "Career."}</h2>
          </div>
          <ol className="col-span-full lg:col-span-7 lg:col-start-6">
            {experience.map((s) => (
              <li key={s.company + s.period} className="grid gap-2 border-t border-line py-8 md:grid-cols-[10rem_1fr] md:gap-8">
                <p className="t-label t-muted">{s.period.replace("now", locale === "de" ? "heute" : "now")}</p>
                <div>
                  <h3 className="t-h3">{t(s.role, locale)}</h3>
                  <p className="t-muted mt-1">{s.company}</p>
                  <ul className="rule-list mt-4">
                    {t(s.points, locale).map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tone-dark section border-t border-line" aria-labelledby="education">
        <div className="container-site grid-site gap-y-12">
          <div className="col-span-full md:col-span-4 lg:col-span-4">
            <h2 id="education" className="t-label t-muted mb-6" lang="en">Education &amp; Certificates</h2>
            <ul className="flex flex-col gap-6">
              {education.map((e) => (
                <li key={e.school + e.period}>
                  <p className="t-label t-muted">{e.period}</p>
                  <p className="mt-1">{t(e.title, locale)}</p>
                  <p className="t-muted">{e.school}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-6">
            <h2 className="t-label t-muted mb-6" lang="en">Skills</h2>
            <dl className="flex flex-col gap-5">
              {skills.map((s) => (
                <div key={s.label.en}>
                  <dt className="t-label t-muted">{t(s.label, locale)}</dt>
                  <dd className="mt-1">{t(s.items, locale)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="col-span-full lg:col-span-2 lg:col-start-11">
            <h2 className="t-label t-muted mb-6" lang="en">Languages</h2>
            <ul className="flex flex-col gap-2">
              {languages.map((l) => <li key={l.en}>{t(l, locale)}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="tone-dark section" aria-labelledby="beyond">
        <div className="container-site grid-site gap-y-8">
          <h2 id="beyond" className="t-h2 col-span-full lg:col-span-5" lang="en">{a.beyondTitle}</h2>
          <div className="col-span-full flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
            {a.beyondBody.map((p, i) => (
              <p key={i} className={i === 0 ? "t-lead measure" : "measure t-muted"}>{p}</p>
            ))}
          </div>
          <div className="col-span-full mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-line pt-12">
            <p className="t-h1 max-w-[18ch]" lang="en"><em>{a.closing}</em></p>
            <ButtonLink href={href(locale, "/contact")} lang="en">{a.cta}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

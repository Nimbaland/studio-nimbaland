import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { href, type Locale } from "@/i18n/config";
import { getT, type StringKey } from "@/i18n/t";
import { Arrow, SecLabel } from "@/components/ui";
import { CourseInquiry } from "@/components/CourseInquiry";
import { asset } from "@/lib/base";
import { inquiryEmail, phone, phoneHref, whatsappHref } from "@/lib/contact";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return {
    title: t("kc.meta.title"),
    description: t("kc.meta.desc"),
    alternates: { canonical: asset(`/${locale}/cooking-classes`), languages: { de: asset("/de/cooking-classes"), en: asset("/en/cooking-classes"), "x-default": asset("/de/cooking-classes") } },
    openGraph: { title: t("kc.meta.title"), description: t("kc.meta.desc"), type: "website", images: [{ url: asset("/img/kochkurse/einstieg.jpg"), width: 967, height: 1200, alt: t("kc.home.photo.alt") }] },
  };
}

const IMG = "/img/kochkurse";
const MENU = [
  { n: 1, img: "menu-vadai" },
  { n: 2, img: "menu-rotebete", blend: "cosy-mildness", fusion: true },
  { n: 3, img: "menu-kuerbis", blend: "advanced-spiciness" },
  { n: 4, img: "menu-vattalappam" },
] as const;

export default async function CookingClasses({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const k = (s: string) => s as StringKey;
  const ask = (format: "course" | "supper") => `${href(locale, "/cooking-classes")}?format=${format}#anfrage`;

  // Strukturierte Daten: FAQ der Seite (gleiche Texte wie sichtbar). Kein Event-Markup, solange es keine Termine gibt.
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage", inLanguage: locale,
    mainEntity: [1, 2, 3, 4, 5, 6].map((i) => ({ "@type": "Question", name: t(k(`kc.faq.q${i}`)), acceptedAnswer: { "@type": "Answer", text: t(k(`kc.faq.a${i}`)) } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
      {/* Kopf */}
      <section className="hero kc-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mandala" src={asset("/img/mandala-orange.svg")} alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="copy">
            <h1><span className="label kc-kicker">{t("kc.h1.kicker")}</span> {t("kc.h1")}</h1>
            <p className="lead">{t("kc.lead")}</p>
            <div className="btnrow">
              <Link className="btn primary" href={ask("course")}>{t("kc.course.cta")} <Arrow /></Link>
              <a className="btn ghost" href="#supper-club">{t("kc.home.cta2")}</a>
            </div>
            <div className="facts"><span>{t("kc.home.fact1")}</span><span>{t("kc.home.fact2")}</span><span>{t("kc.home.fact3")}</span></div>
          </div>
          <figure>
            <Image src={asset(`${IMG}/einstieg.jpg`)} alt={t("kc.home.photo.alt")} fill priority sizes="(min-width: 900px) 40vw, 100vw" style={{ objectPosition: "40% 55%" }} />
            <figcaption>{t("kc.intro.cap")}</figcaption>
          </figure>
        </div>
      </section>

      {/* 1 Einstieg */}
      <section className="sec">
        <div className="wrap kc-intro">
          <div className="sechead"><SecLabel n="01">{t("kc.intro.label")}</SecLabel><h2>{t("kc.intro.h2")}</h2></div>
          <div className="kc-cols">
            <p className="lead">{t("kc.intro.p1")}</p>
            <p>{t("kc.intro.p2")}</p>
          </div>
        </div>
      </section>

      {/* 2 Kochkurs */}
      <section className="sec alt" id="kochkurs">
        <div className="wrap kc-split">
          <figure className="kc-fig">
            <Image src={asset(`${IMG}/kochkurs.jpg`)} alt={t("kc.course.img.alt")} width={1200} height={896} sizes="(min-width: 900px) 50vw, 100vw" />
            <figcaption>{t("kc.course.img.cap")}</figcaption>
          </figure>
          <div className="prose">
            <SecLabel n="02">{t("kc.course.label")}</SecLabel>
            <h2>{t("kc.course.h2")}</h2>
            <p className="lead">{t("kc.course.lead")}</p>
            <ol className="steps kc-steps">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}><div><h3>{t(k(`kc.course.s${i}.h`))}</h3><p>{t(k(`kc.course.s${i}.p`))}</p></div></li>
              ))}
            </ol>
            <div className="tipbox"><span className="label">{t("kc.course.first.h")}</span><p>{t("kc.course.first.p")}</p></div>
            <div className="btnrow"><Link className="btn primary" href={ask("course")}>{t("kc.course.cta")} <Arrow /></Link></div>
          </div>
        </div>
      </section>

      {/* 3 Supper Club */}
      <section className="sec kc-supper" id="supper-club">
        <div className="wrap kc-split flip">
          <figure className="kc-fig">
            <Image src={asset(`${IMG}/supperclub.jpg`)} alt={t("kc.supper.img.alt")} width={1200} height={805} sizes="(min-width: 900px) 50vw, 100vw" />
            <figcaption>{t("kc.supper.img.cap")}</figcaption>
          </figure>
          <div className="prose">
            <SecLabel n="03">{t("kc.supper.label")}</SecLabel>
            <h2>{t("kc.supper.h2")}</h2>
            <p className="lead">{t("kc.supper.p1")}</p>
            <p>{t("kc.supper.p2")}</p>
            <div className="btnrow"><Link className="btn primary" href={ask("supper")}>{t("kc.supper.cta")} <Arrow /></Link></div>
          </div>
        </div>
        <div className="wrap">
          <dl className="kc-diff">
            <div><dt>{t("kc.diff.course")}</dt><dd>{t("kc.diff.course.p")}</dd></div>
            <div><dt>{t("kc.diff.supper")}</dt><dd>{t("kc.diff.supper.p")}</dd></div>
          </dl>
        </div>
      </section>

      {/* 4 Beispielmenü */}
      <section className="sec alt" id="menu">
        <div className="wrap">
          <div className="sechead"><SecLabel n="04">{t("kc.menu.label")}</SecLabel><h2>{t("kc.menu.h2")}</h2><p className="note measure">{t("kc.menu.note")} {t("kc.menu.kari")}</p></div>
          <ol className="kc-menu">
            {MENU.map((d) => (
              <li key={d.n} className="rcard">
                <figure className="rimg"><Image src={asset(`${IMG}/${d.img}.jpg`)} alt={t(k(`kc.menu.d${d.n}.alt`))} fill sizes="(min-width: 1000px) 25vw, (min-width: 640px) 50vw, 100vw" /><span className="cat">{t(k(`kc.menu.d${d.n}.course`))}</span><span className="draftb">{t("kc.menu.tag")}</span></figure>
                <h3>{t(k(`kc.menu.d${d.n}.h`))}</h3>
                <p className="teaser">{t(k(`kc.menu.d${d.n}.p`))}</p>
                {"fusion" in d && d.fusion && <p className="kc-fusion">{t("kc.menu.d2.fusion")}</p>}
                {"blend" in d && <p className="rmeta"><Link className="blend" href={href(locale, `/shop/${d.blend}`)}><span className={`swatch ${d.blend === "cosy-mildness" ? "cosy" : "adv"}`} aria-hidden="true" />{t("kc.menu.with")} {d.blend === "cosy-mildness" ? "Cosy Mildness" : "Advanced Spiciness"}</Link></p>}
              </li>
            ))}
          </ol>
          <p className="credit" style={{ marginTop: "1rem" }}>{t("kc.menu.img")}</p>
          <div className="kc-recipes"><p>{t("kc.menu.recipes")}</p><Link className="btn ghost" href={href(locale, "/recipes")}>{t("kc.menu.recipes.cta")}</Link></div>
        </div>
      </section>

      {/* 5 Gastgeber */}
      <section className="sec" id="gastgeber">
        <div className="wrap origin">
          <figure className="photo land">
            <Image src={asset("/img/story-oma-2013.jpg")} alt={t("photo.oma.alt")} width={1400} height={933} sizes="(min-width: 900px) 50vw, 100vw" />
            <figcaption>{t("photo.oma.cap")}</figcaption>
          </figure>
          <div className="prose">
            <SecLabel n="05">{t("kc.host.label")}</SecLabel>
            <h2>{t("kc.host.h2")}</h2>
            <p className="measure">{t("kc.host.p1")}</p>
            <p className="measure">{t("kc.host.p2")}</p>
            <p className="measure">{t("kc.host.p3")}</p>
            <div className="btnrow"><Link className="btn dark" href={href(locale, "/story")}>{t("kc.host.cta")} <Arrow /></Link></div>
          </div>
        </div>
      </section>

      {/* 6 Anfrage & FAQ */}
      <section className="sec alt" id="anfrage">
        <div className="wrap kc-ask">
          <div className="sechead"><SecLabel n="06">{t("kc.form.label")}</SecLabel><h2>{t("kc.form.h2")}</h2><p className="lead measure">{t("kc.form.lead")}</p></div>
          <Suspense fallback={null}><CourseInquiry locale={locale} fallbackEmail={inquiryEmail} /></Suspense>
          <div className="kc-direct">
            <div><h3>{t("kc.direct.h")}</h3><p>{t("kc.direct.p")}</p></div>
            <ul>
              <li><span className="label">{t("kc.direct.phone")}</span><a href={phoneHref}>{phone}</a></li>
              <li><span className="label">WhatsApp</span><a href={whatsappHref(t("kc.wa.text"))} target="_blank" rel="noopener noreferrer">{t("kc.direct.wa")} ↗</a></li>
              <li><span className="label">{t("kc.direct.mail")}</span><a href={`mailto:${inquiryEmail}`}>{inquiryEmail}</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sechead"><span className="label">{t("kc.faq.label")}</span><h2>{t("kc.faq.h2")}</h2></div>
          <div className="faq">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <details key={i}><summary>{t(k(`kc.faq.q${i}`))}</summary><div className="ans"><p>{t(k(`kc.faq.a${i}`))}</p></div></details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

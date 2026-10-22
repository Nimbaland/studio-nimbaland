import { Fragment } from "react";
import Link from "next/link";
import { href, t, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { site } from "@/content/site";
import type { PortfolioProject } from "@/content/projects";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { HeroVisual } from "./HeroVisual";

type Props = { locale: Locale; dict: Dictionary["hero"]; recent?: PortfolioProject };

/** Zerlegt Text in Buchstaben (Wörter bleiben zusammen) für den gestaffelten Aufbau. */
function Letters({ text, offset }: { text: string; offset: number }) {
  let i = offset;
  return (
    <>
      {text.split(" ").map((word, w, arr) => (
        <Fragment key={w}>
          <span className="hero__word">
            {[...word].map((ch, c) => (
              <span key={c} className="hero__char" style={{ ["--i" as string]: i++ }}>{ch}</span>
            ))}
          </span>
          {w < arr.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}

/**
 * Hero im Aufbau der Referenz: Riesen-Headline baut sich Buchstabe für Buchstabe auf,
 * ringsum kleine Infos (Standort, Disziplinen, E-Mail, aktuelles Projekt).
 * Alles ist ohne JavaScript sichtbar; bei reduzierter Bewegung steht es sofort.
 */
export function Hero({ locale, dict, recent }: Props) {
  const [line1, line2] = dict.titleLines;
  const full = `${line1} ${line2} ${dict.titleAccent}.`;
  const l1 = line1.replace(/ /g, "").length;
  const l2 = line2.replace(/ /g, "").length;

  return (
    <section className="tone-dark hero-wrap relative isolate overflow-hidden" aria-labelledby="hero-title">
      <HeroVisual />
      <div className="container-site hero relative">
        <div className="hero__top">
          <p className="t-label t-muted hero__fade" lang="en">{dict.eyebrow}</p>
          <p className="hero__location t-label hero__fade" lang="en" aria-label={dict.location.join(" ")}>
            {dict.location.map((w) => <span key={w} aria-hidden="true">{w}</span>)}
          </p>
        </div>

        <h1 id="hero-title" lang="en" className="hero__title" aria-label={full}>
          <span className="hero__line" aria-hidden="true"><Letters text={line1} offset={0} /></span>
          <span className="hero__line" aria-hidden="true">
            <Letters text={line2} offset={l1} />{" "}
            <em className="hero__word"><Letters text={dict.titleAccent} offset={l1 + l2} /></em>
            <span className="hero__char stop" style={{ ["--i" as string]: l1 + l2 + dict.titleAccent.length + 2 }}>.</span>
            {site.portrait && (
              <span className="hero__portrait" style={{ ["--i" as string]: l1 + l2 + dict.titleAccent.length + 4 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={site.portrait} alt="" width={120} height={177} decoding="async" />
              </span>
            )}
          </span>
        </h1>

        <div className="hero__grid hero__fade">
          <div className="hero__intro">
            <p className="t-lead measure">{dict.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={href(locale, "/work")} variant="primary" lang="en">{dict.primaryCta}</ButtonLink>
              <ButtonLink href={href(locale, "/contact")} variant="secondary" lang="en">{dict.secondaryCta}</ButtonLink>
            </div>
          </div>
        </div>

        <div className="hero__bottom hero__fade">
          <span />
          {recent && (
            <Link href={href(locale, `/work/${recent.slug}`)} className="hero__recent group">
              <span className="t-label t-muted" lang="en">{dict.recentWork}</span>
              <span className="font-display text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-tight">
                {recent.title} <ArrowUpRight size={18} className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              {recent.tagline && <span className="t-muted italic font-display">{t(recent.tagline, locale)}</span>}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

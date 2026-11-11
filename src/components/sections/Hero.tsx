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
 * Knapper Einstieg: persönliche Vorstellung (Hi, ich bin Nimba), Headline mit dem Nutzen,
 * Subline mit Angebot, Zielgruppe und Standort (Düsseldorf – genau einmal) und ein klarer Weg zu den Leistungen.
 * Alles ist ohne JavaScript sichtbar; bei reduzierter Bewegung steht es sofort.
 */
export function Hero({ locale, dict, recent }: Props) {
  const full = `${dict.headline} ${dict.accent}.`;
  const l1 = dict.headline.replace(/ /g, "").length;

  return (
    <section className="tone-dark hero-wrap relative isolate overflow-hidden" aria-labelledby="hero-title">
      <HeroVisual />
      <div className="container-site hero relative">
        <div className="hero__head">
        <p className="hero__hello hero__fade">
          {site.portrait && (
            <span className="hero__portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.portrait} alt="" width={120} height={177} decoding="async" />
            </span>
          )}
          <span>{dict.hello}</span>
        </p>

        <h1 id="hero-title" className="hero__title" aria-label={full}>
          <span className="hero__line" aria-hidden="true">
            <Letters text={dict.headline} offset={0} />{" "}
            <span className="hero__word">
              <em className="hero__accent">
                <Letters text={dict.accent} offset={l1} />
                <svg className="hero__underline" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14 C 50 4, 120 3, 197 9" /></svg>
              </em>
              <span className="hero__char stop" style={{ ["--i" as string]: l1 + dict.accent.length + 1 }}>.</span>
            </span>
          </span>
        </h1>
        </div>

        <div className="hero__grid hero__fade">
          <div className="hero__intro">
            <p className="t-lead measure hero__lead">{dict.intro}</p>
            <div className="hero__actions">
              <ButtonLink href={href(locale, "/services")} variant="primary">{dict.servicesCta}</ButtonLink>
              <Link href={href(locale, "/work")} className="link-standalone hero__worklink">{dict.workCta} <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>

        {recent && (
          <div className="hero__bottom hero__fade">
            <span />
            <Link href={href(locale, `/work/${recent.slug}`)} className="hero__recent group">
              <span className="t-label t-muted">{dict.recentWork}</span>
              <span className="font-display text-[clamp(1.25rem,1.1rem+0.8vw,1.75rem)] leading-tight">
                {recent.title} <ArrowUpRight size={16} className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              {recent.tagline && <span className="t-muted italic font-display hidden sm:block" lang={locale === "de" && recent.tagline.de === recent.tagline.en ? "en" : undefined}>{t(recent.tagline, locale)}</span>}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

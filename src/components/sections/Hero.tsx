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
 * Knapper Einstieg: Wer (Nimba), was (Marken, Websites, KI-Bildwelten), wo (Düsseldorf – genau einmal)
 * und ein klarer Weg zu den Leistungen. Alles ist ohne JavaScript sichtbar; bei reduzierter Bewegung steht es sofort.
 */
export function Hero({ locale, dict, recent }: Props) {
  const full = `${dict.hello} ${dict.name}.`;
  const l1 = dict.hello.replace(/ /g, "").length;

  return (
    <section className="tone-dark hero-wrap relative isolate overflow-hidden" aria-labelledby="hero-title">
      <HeroVisual />
      <div className="container-site hero relative">
        <p className="t-label t-muted hero__fade hero__eyebrow" lang="en">{dict.eyebrow}</p>

        <h1 id="hero-title" className="hero__title" aria-label={full}>
          <span className="hero__line" aria-hidden="true">
            <Letters text={dict.hello} offset={0} />{" "}
            <em className="hero__word hero__accent">
              <Letters text={dict.name} offset={l1} />
              <svg className="hero__underline" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14 C 50 4, 120 3, 197 9" /></svg>
            </em>
            <span className="hero__char stop" style={{ ["--i" as string]: l1 + dict.name.length + 1 }}>.</span>
            {site.portrait && (
              <span className="hero__portrait" style={{ ["--i" as string]: l1 + dict.name.length + 3 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={site.portrait} alt="" width={120} height={177} decoding="async" />
              </span>
            )}
          </span>
        </h1>

        <div className="hero__grid hero__fade">
          <div className="hero__intro">
            <p className="t-lead measure hero__lead">{dict.intro}</p>
            <div className="hero__actions">
              <ButtonLink href={href(locale, "/services")} variant="primary">{dict.servicesCta}</ButtonLink>
              <a href="#work" className="link-standalone hero__worklink">{dict.workCta} <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>

        {recent && (
          <div className="hero__bottom hero__fade">
            <span />
            <Link href={href(locale, `/work/${recent.slug}`)} className="hero__recent group">
              <span className="t-label t-muted" lang="en">{dict.recentWork}</span>
              <span className="font-display text-[clamp(1.25rem,1.1rem+0.8vw,1.75rem)] leading-tight">
                {recent.title} <ArrowUpRight size={16} className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              {recent.tagline && <span className="t-muted italic font-display hidden sm:block">{t(recent.tagline, locale)}</span>}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

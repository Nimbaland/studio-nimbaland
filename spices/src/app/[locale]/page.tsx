import Image from "next/image";
import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { faq } from "@/i18n/dictionaries";
import { getProducts, getRecipes } from "@/lib/content";
import { RecipeCard } from "@/components/cards";
import { DiffSwitch, Finder } from "@/components/interactive";
import { Arrow, Divider, Marquee, SecLabel } from "@/components/ui";
import { asset } from "@/lib/base";
import { newsletterConfigured } from "@/lib/newsletter";

export const revalidate = 120;

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const [products, recipes] = await Promise.all([getProducts(locale), getRecipes(locale)]);
  const featured = recipes.filter((r) => r.featured).slice(0, 3);
  const adv = products.find((p) => p.heat === "hot");
  const base = products.find((p) => p.heat === "mild")?.ingredients ?? [];
  const chili = adv?.ingredients.find((i) => !base.includes(i)) ?? "";

  return (
    <>
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mandala" src={asset("/img/mandala-orange.svg")} alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="copy">
            <span className="label">{t("kc.home.label")}</span>
            <h1>{t("kc.home.h1a")} <em>{t("kc.home.h1b")}</em></h1>
            <p className="lead">{t("kc.home.lead")}</p>
            <div className="btnrow">
              <Link className="btn primary" href={`${href(locale, "/cooking-classes")}?format=course#anfrage`}>{t("kc.home.cta")} <Arrow /></Link>
              <Link className="btn ghost" href={`${href(locale, "/cooking-classes")}#supper-club`}>{t("kc.home.cta2")}</Link>
            </div>
            <div className="facts"><span>{t("kc.home.fact1")}</span><span>{t("kc.home.fact2")}</span><span>{t("kc.home.fact3")}</span></div>
          </div>
          <figure>
            <Image src={asset("/img/kochkurse/einstieg.jpg")} alt={t("kc.home.photo.alt")} fill priority sizes="(min-width: 900px) 40vw, 100vw" style={{ objectPosition: "40% 55%" }} />
            <figcaption>{t("kc.home.photo.cap")}</figcaption>
          </figure>
        </div>
      </section>
      <Marquee items={t.dict.marquee} />

      <section className="sec" id="formate">
        <div className="wrap">
          <div className="sechead sechead-row">
            <div style={{ display: "grid", gap: ".9rem" }}><SecLabel n="01">{t("kc.fmt.label")}</SecLabel><h2>{t("kc.fmt.h2")}</h2><p className="lead measure">{t("kc.fmt.lead")}</p></div>
            <Link className="btn dark" href={href(locale, "/cooking-classes")}>{t("kc.fmt.all")} <Arrow /></Link>
          </div>
          <div className="kc-formats-grid">
            <Link className="kc-card" href={`${href(locale, "/cooking-classes")}#kochkurs`}>
              <span className="kc-card-img"><Image src={asset("/img/kochkurse/kochkurs.jpg")} alt={t("kc.course.img.alt")} fill sizes="(min-width: 760px) 50vw, 100vw" /><span className="cat">{t("kc.home.fact1")}</span></span>
              <span className="kc-card-body"><h3>{t("kc.form.format.course")}</h3><span>{t("kc.fmt.course.p")}</span><b>{t("kc.fmt.course.cta")} <Arrow /></b></span>
            </Link>
            <Link className="kc-card" href={`${href(locale, "/cooking-classes")}#supper-club`}>
              <span className="kc-card-img"><Image src={asset("/img/kochkurse/supperclub.jpg")} alt={t("kc.supper.img.alt")} fill sizes="(min-width: 760px) 50vw, 100vw" /><span className="cat">{t("kc.home.fact1")}</span></span>
              <span className="kc-card-body"><h3>{t("kc.form.format.supper")}</h3><span>{t("kc.fmt.supper.p")}</span><b>{t("kc.fmt.supper.cta")} <Arrow /></b></span>
            </Link>
          </div>
          <p className="credit" style={{ marginTop: ".75rem" }}>{t("kc.course.img.cap").split("·")[0].trim()}</p>
        </div>
      </section>
      <Divider />

      <section className="sec" id="finder">
        <div className="wrap">
          <div className="sechead"><SecLabel n="02">{t("s1.label")}</SecLabel><h2>{t("s1.h2")}</h2><p className="lead measure">{t("s1.lead")}</p></div>
          <Finder locale={locale} products={products} />
          <DiffSwitch locale={locale} base={base} chili={chili} />
        </div>
      </section>
      <Divider />

      <section className="sec">
        <div className="wrap">
          <div className="sechead sechead-row">
            <div style={{ display: "grid", gap: ".9rem" }}><SecLabel n="03">{t("s2.label")}</SecLabel><h2>{t("s2.h2")}</h2><p className="lead measure">{t("s2.lead")}</p></div>
            <Link className="btn dark" href={href(locale, "/recipes")}>{t("s2.cta")} <Arrow /></Link>
          </div>
          {featured.length > 0 && <div className="rgrid">{featured.map((r) => <RecipeCard key={r.id} r={r} products={products} locale={locale} t={t} />)}</div>}
        </div>
      </section>
      <Divider />

      <section className="sec">
        <div className="wrap origin">
          <figure className="photo land">
            <Image src={asset("/img/story-oma-2013.jpg")} alt={t("photo.oma.alt")} width={1400} height={933} sizes="(min-width: 900px) 50vw, 100vw" />
            <figcaption>{t("photo.oma.cap")}</figcaption>
          </figure>
          <div className="prose">
            <SecLabel n="04">{t("s3.label")}</SecLabel><h2>{t("s3.h2")}</h2>
            <p className="measure">{t("s3.short")}</p>
            <div className="btnrow"><Link className="btn dark" href={href(locale, "/story")}>{t("s3.cta")} <Arrow /></Link></div>
          </div>
        </div>
      </section>
      <Divider />

      <section className="sec">
        <div className="wrap">
          <div className="sechead sechead-row">
            <div style={{ display: "grid", gap: ".9rem" }}><SecLabel n="05">{t("s4.label")}</SecLabel><h2>{t("s4.h2")}</h2></div>
            <Link className="btn ghost" href={href(locale, "/faq")}>{t("s4.cta")}</Link>
          </div>
          <div className="faq">
            {faq.filter((f) => f.short).map((f) => (
              <details key={f[locale].q}><summary>{f[locale].q}</summary><div className="ans" dangerouslySetInnerHTML={{ __html: f[locale].a }} /></details>
            ))}
          </div>
        </div>
      </section>

      <Newsletter locale={locale} connected={newsletterConfigured} />

      <section className="closing">
        <div className="wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="trio" aria-hidden="true"><img src={asset("/img/mandala-gelb.svg")} alt="" /><img src={asset("/img/mandala-orange.svg")} alt="" /><img src={asset("/img/mandala-rot.svg")} alt="" /></div>
          <h2>{t("close.h2")}</h2>
          <p className="lead measure">{t("close.lead")}</p>
          <div className="btnrow"><a className="btn primary" href="#finder">{t("close.cta")} <Arrow /></a></div>
        </div>
      </section>
    </>
  );
}

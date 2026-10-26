import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { JaffnaPanel } from "@/components/JaffnaPanel";
import { Arrow, PageHead, SecLabel } from "@/components/ui";
import { getOrigin } from "@/lib/blends";
import { asset } from "@/lib/base";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t("st.label"), description: t("st.lead"), alternates: { languages: { de: asset("/de/story"), en: asset("/en/story") } } };
}

export default async function Story({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const o = getOrigin(locale);
  const row = (k: string, v: string | null, ok: boolean) => (
    <div className="row"><span className="k">{k}</span><span>{v ?? ""}</span>{ok ? <span className="ok">{t("pd.o.ok")}</span> : <span className="tbc">{t("pd.o.pending")}</span>}</div>
  );
  return (
    <>
      <PageHead label={t("st.label")} title={t("st.h1")} lead={t("st.lead")} />
      <div className="wrap story">
        <div className="chapter">
          <figure className="photo land">
            <Image src={asset("/img/story-oma-2013.jpg")} alt={t("photo.oma.alt")} width={1400} height={933} sizes="(min-width: 900px) 50vw, 100vw" priority />
            <figcaption>{t("photo.oma.cap")}</figcaption>
          </figure>
          <div className="prose"><SecLabel n="01">Kaithady, 2013</SecLabel><p className="lead">{t("st.p1")}</p><p>{t("st.p2")}</p></div>
        </div>
        <div className="chapter flip">
          <figure className="photo tall">
            <Image src={asset("/img/story-kueche-2013.jpg")} alt={t("photo.kitchen.alt")} width={900} height={1600} sizes="(min-width: 900px) 34vw, 100vw" />
            <figcaption>{t("photo.kitchen.cap")}</figcaption>
          </figure>
          <div className="prose"><SecLabel n="02">{locale === "de" ? "Das Verhältnis" : "The balance"}</SecLabel><p>{t("st.p3")}</p><p>{t("st.p4")}</p></div>
        </div>
        <div className="chapter">
          <JaffnaPanel name={t("jaffna.name")} sub={t("jaffna.sub")} credit={t("jaffna.credit")} alt={t("jaffna.alt")} />
          <div className="prose">
            <SecLabel n="03">{t("st.c3.label")}</SecLabel><p>{t("st.p5")}</p>
            <div className="ledger">
              {row(t("st.l.ingr"), o.ingredients, true)}
              {row(t("st.l.blend"), o.blending, true)}
              {row(t("st.l.fill"), o.filling, true)}
              {row(t("st.l.address"), o.address, !!o.address)}
            </div>
          </div>
        </div>
        <div className="prose" style={{ maxWidth: 760 }}>
          <p>{t("st.p6")}</p>
          <p className="lead bridge">{t("st.bridge")}</p>
        </div>
        <div className="btnrow">
          <Link className="btn primary" href={href(locale) + "#finder"}>{t("st.cta")} <Arrow /></Link>
          <Link className="btn ghost" href={href(locale, "/recipes")}>{t("st.cta2")}</Link>
        </div>
      </div>
    </>
  );
}

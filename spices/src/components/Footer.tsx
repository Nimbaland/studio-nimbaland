import Link from "next/link";
import { href, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { Logo } from "./BrandMark";
import { asset } from "@/lib/base";
import { salesOpen } from "@/lib/flags";

export function Footer({ locale }: { locale: Locale }) {
  const t = getT(locale);
  return (
    <footer className="site">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="fmandala" src={asset("/img/mandala-orange.svg")} alt="" aria-hidden="true" />
      <div className="wrap">
        <div style={{ display: "grid", gap: ".6rem" }}>
          <Link className="logo" href={href(locale)} aria-label="nimbaland.spices"><Logo /></Link>
          <span className="label" style={{ color: "var(--on-dark-muted)" }}>{t("f.tag")}</span>
        </div>
        <div className="fcols">
          <div><h4>{t("f.shop")}</h4><ul>
            <li><Link href={href(locale, "/shop/cosy-mildness")}>Cosy Mildness</Link></li>
            <li><Link href={href(locale, "/shop/advanced-spiciness")}>Advanced Spiciness</Link></li>
            {salesOpen && <li><Link href={href(locale, "/cart")}>{t("nav.cart")}</Link></li>}
          </ul></div>
          <div><h4>{t("f.more")}</h4><ul>
            <li><Link href={href(locale, "/recipes")}>{t("nav.recipes")}</Link></li>
            <li><Link href={href(locale, "/story")}>{t("nav.story")}</Link></li>
            <li><Link href={href(locale, "/faq")}>FAQ</Link></li>
            <li><Link href={href(locale, "/newsletter")}>{t("f.newsletter")}</Link></li>
          </ul></div>
          <div><h4>{t("f.contact")}</h4><ul><li><a href={`/${locale}/contact`}>{locale === "de" ? "Kontaktformular" : "Contact form"}</a></li></ul></div>
          <div><h4>{t("f.legal")}</h4><ul>
            {/* Impressum: gleicher Anbieter und gleiche Domain wie nimbaland.studio (außerhalb des basePath, daher <a>). */}
            <li><a href={`/${locale}/impressum`}>{t("f.imprint")}</a></li>
            <li><Link href={href(locale, "/datenschutz")}>{t("f.privacy")}</Link></li>
            {salesOpen && <li className="muted">{t("f.terms")} · {t("f.shipping")}</li>}
          </ul></div>
          <div><h4>{t("f.world")}</h4><ul>
            <li><a href={`https://studio-nimbaland.vercel.app/${locale}`} target="_blank" rel="noopener">{t("f.studio")} ↗</a></li>
            <li className="muted">{t("f.clothing")}</li>
            <li className="muted">{t("f.art")}</li>
          </ul></div>
        </div>
        <div className="fbottom"><span>{t("f.copy")}</span></div>
      </div>
    </footer>
  );
}

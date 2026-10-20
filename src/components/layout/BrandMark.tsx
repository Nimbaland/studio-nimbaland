import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

type Props = { href: string; tone?: "dark" | "light"; homeLabel: string };

/**
 * Wortmarke aus dem Original-SVG (site.brand). Fehlt die Datei, erscheint ein
 * neutraler Text-Platzhalter mit data-placeholder="LOGO_ASSET_REQUIRED" – nie ein nachgebautes Logo.
 */
export function BrandMark({ href, tone = "dark", homeLabel }: Props) {
  const src = tone === "dark" ? site.brand.logoOnDark : site.brand.logoOnLight;
  return (
    <Link href={href} className="inline-flex min-h-11 items-center no-underline text-inherit" aria-label={`${site.name} – ${homeLabel}`}>
      {src ? (
        <Image src={src} alt="" width={Math.round(32 * site.brand.logoRatio)} height={32} priority unoptimized className="h-6 w-auto md:h-8" />
      ) : (
        <span data-placeholder="LOGO_ASSET_REQUIRED" className="font-display text-[1.125rem] font-semibold tracking-[-0.02em]">
          {site.uiName}
        </span>
      )}
    </Link>
  );
}

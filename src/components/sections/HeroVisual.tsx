import Image from "next/image";
import { site } from "@/content/site";

/**
 * Dekorative 3D-Textur hinter/neben der Hero-Headline.
 * Rein atmosphärisch: aria-hidden, kein Inhalt hängt davon ab.
 * Video läuft nur ohne "reduzierte Bewegung" – sonst bleibt das Standbild.
 */
export function HeroVisual() {
  const { image, video } = site.heroVisual;
  if (!image && !video) return null;
  return (
    <div aria-hidden="true" className="hero-visual">
      {image && (
        <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="hero-visual__media object-contain object-right" />
      )}
      {video && (
        <video className="hero-visual__media hero-visual__video" src={video} poster={image ?? undefined} autoPlay muted loop playsInline preload="metadata" />
      )}
    </div>
  );
}

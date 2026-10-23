import Image from "next/image";
import { t, type Locale } from "@/i18n/config";
import type { ProjectImage } from "@/content/projects";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { AiBadge, AI_LABEL } from "@/components/ui/AiBadge";

type Props = {
  image: ProjectImage;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  /** Erzwingt ein Seitenverhältnis (sonst das des Bildes). */
  aspect?: string;
  /** false = ohne Scroll-Reveal (z. B. lückenlose Bildstapel). */
  reveal?: boolean;
};

/** Echtes Projektbild oder -video – oder ein klar beschrifteter Platzhalter, solange es fehlt. */
export function ProjectMedia({ image, locale, sizes, priority, aspect, reveal = true }: Props) {
  const ratio = aspect ?? image.aspect ?? "4/3";
  if (!image.src) {
    return <AssetPlaceholder code="ASSET_REQUIRED" path={image.expected} aspect={ratio} label={t(image.alt, locale)} />;
  }
  const cls = `${reveal ? "media-figure " : ""}relative w-full overflow-hidden`;
  const alt = image.ai ? `${t(image.alt, locale)} (${AI_LABEL[locale]})` : t(image.alt, locale);
  const badge = image.ai ? <AiBadge locale={locale} /> : null;
  if (image.video) {
    return (
      <div className={cls} style={{ aspectRatio: ratio }}>
        <video
          className={`absolute inset-0 h-full w-full ${image.autoplay === false ? "object-contain bg-black" : "object-cover"}`}
          src={image.video}
          poster={image.src}
          autoPlay={image.autoplay !== false}
          muted={image.autoplay !== false}
          loop={image.autoplay !== false}
          playsInline
          controls
          preload={image.autoplay === false ? "none" : "metadata"}
          aria-label={alt}
        />
        {badge}
      </div>
    );
  }
  return (
    <div className={cls} style={{ aspectRatio: ratio }}>
      <Image src={image.src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      {badge}
    </div>
  );
}

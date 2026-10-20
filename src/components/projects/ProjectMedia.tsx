import Image from "next/image";
import { t, type Locale } from "@/i18n/config";
import type { ProjectImage } from "@/content/projects";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";

type Props = {
  image: ProjectImage;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  /** Erzwingt ein Seitenverhältnis (sonst das des Bildes). */
  aspect?: string;
};

/** Echtes Projektbild – oder ein klar beschrifteter Platzhalter, solange es fehlt. */
export function ProjectMedia({ image, locale, sizes, priority, aspect }: Props) {
  const ratio = aspect ?? image.aspect ?? "4/3";
  if (!image.src) {
    return <AssetPlaceholder code="ASSET_REQUIRED" path={image.expected} aspect={ratio} label={t(image.alt, locale)} />;
  }
  return (
    <div className="media-figure relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
      <Image
        src={image.src}
        alt={t(image.alt, locale)}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

import { t, type Locale } from "@/i18n/config";
import type { ProjectImage } from "@/content/projects";
import { ProjectMedia } from "./ProjectMedia";

/**
 * Projektgalerie. Bilder behalten ihr Originalformat (Spec §5: nicht willkürlich beschneiden).
 * Jedes dritte Bild läuft über volle Breite, dazwischen Paare.
 */
export function MediaGallery({ images, locale }: { images: ProjectImage[]; locale: Locale }) {
  if (images.length === 0) return null;
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {images.map((img, i) => {
        const full = i % 3 === 0;
        return (
          <li key={i} className={full ? "md:col-span-2" : ""}>
            <figure>
              <ProjectMedia image={img} locale={locale} sizes={full ? "100vw" : "(min-width: 768px) 50vw, 100vw"} />
              {img.caption && <figcaption className="t-caption t-muted mt-3">{t(img.caption, locale)}</figcaption>}
            </figure>
          </li>
        );
      })}
    </ul>
  );
}

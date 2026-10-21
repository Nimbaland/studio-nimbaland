import { t, type Locale } from "@/i18n/config";
import type { ProjectImage } from "@/content/projects";
import { ProjectMedia } from "./ProjectMedia";

/**
 * Projektgalerie. Bilder behalten ihr Originalformat (Spec §5: nicht willkürlich beschneiden).
 * Standard: jedes dritte Bild über volle Breite, dazwischen Paare – per `span` übersteuerbar.
 * Layout "stack": lückenlos untereinander, ohne Bildunterschriften (durchgehende Präsentation).
 */
export function MediaGallery({
  images,
  locale,
  layout = "grid",
}: {
  images: ProjectImage[];
  locale: Locale;
  layout?: "grid" | "stack";
}) {
  if (images.length === 0) return null;
  if (layout === "stack") {
    return (
      <div className="media-stack">
        {images.map((img, i) => (
          <ProjectMedia key={i} image={img} locale={locale} sizes="100vw" reveal={false} />
        ))}
      </div>
    );
  }
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {images.map((img, i) => {
        const full = img.span ? img.span === "full" : i % 3 === 0;
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

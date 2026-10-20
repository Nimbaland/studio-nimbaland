type Props = {
  /** Was fehlt, z. B. "LOGO_ASSET_REQUIRED" oder "ASSET_REQUIRED". */
  code?: string;
  /** Erwarteter Pfad der Datei. */
  path?: string;
  /** CSS aspect-ratio, z. B. "16/9". */
  aspect?: string;
  /** Text für Screenreader. */
  label: string;
  className?: string;
};

/**
 * Sichtbar markierter Platzhalter für fehlendes Originalmaterial.
 * Bewusst als Raster gestaltet, damit er nie mit echter Arbeit verwechselt wird.
 */
export function AssetPlaceholder({ code = "ASSET_REQUIRED", path, aspect = "4/3", label, className = "" }: Props) {
  return (
    <div className={`asset-placeholder ${className}`} style={{ aspectRatio: aspect }} role="img" aria-label={label} data-placeholder={code}>
      <span className="asset-placeholder__label" aria-hidden="true">
        {code}
        {path && (
          <>
            <br />
            {path}
          </>
        )}
      </span>
    </div>
  );
}

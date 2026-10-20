import type { ReactNode } from "react";

type Props = {
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  optionalLabel?: string;
  children: (a11y: { id: string; "aria-describedby"?: string; "aria-invalid"?: boolean }) => ReactNode;
};

/** Label, Hinweis und Fehlermeldung korrekt mit dem Eingabefeld verknüpft. */
export function FormField({ id, label, hint, error, optionalLabel, children }: Props) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
        {optionalLabel && <span className="t-muted font-normal"> ({optionalLabel})</span>}
      </label>
      {hint && <span id={`${id}-hint`} className="field__hint">{hint}</span>}
      {children({ id, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined })}
      {error && <span id={`${id}-error`} className="field__error">{error}</span>}
    </div>
  );
}

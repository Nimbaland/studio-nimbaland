import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  intro?: string | string[];
  children?: ReactNode;
  /** Sprache der Headline, falls abweichend (englische Headlines auf /de). */
  titleLang?: string;
};

/** Kopfbereich für Unterseiten: Eyebrow, große H1, optionaler Untertitel und Einleitung. */
export function PageIntro({ eyebrow, title, subtitle, intro, children, titleLang }: Props) {
  const paragraphs = intro ? (Array.isArray(intro) ? intro : [intro]) : [];
  return (
    <section className="tone-dark">
      <div className="container-site grid-site gap-y-8 pt-16 pb-16 lg:pt-24 lg:pb-24">
        {children && <div className="col-span-full">{children}</div>}
        <div className="col-span-full lg:col-span-7">
          {eyebrow && <p className="t-label t-muted mb-6" lang="en">{eyebrow}</p>}
          <h1 className="t-display" lang={titleLang}>{title}</h1>
          {subtitle && <p className="t-h3 mt-6 italic t-muted" lang="en">{subtitle}</p>}
        </div>
        {paragraphs.length > 0 && (
          <div className="col-span-full flex flex-col gap-4 lg:col-span-4 lg:col-start-9 lg:self-end">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "t-lead" : "t-lead t-muted"}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

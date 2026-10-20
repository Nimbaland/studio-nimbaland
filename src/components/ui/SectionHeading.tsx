import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  /** Ein oder mehrere Absätze. */
  intro?: string | string[];
  as?: "h1" | "h2";
  size?: "display" | "h1" | "h2";
  action?: ReactNode;
  /** Sprache der Headline, falls sie von der Seitensprache abweicht (englische Headlines auf /de). */
  titleLang?: string;
};

/** Eyebrow + Headline links, Einleitung rechts (Desktop) bzw. darunter (Mobil). */
export function SectionHeading({ id, eyebrow, title, intro, as: Tag = "h2", size, action, titleLang }: Props) {
  const cls = size ?? Tag;
  const paragraphs = intro ? (Array.isArray(intro) ? intro : [intro]) : [];
  return (
    <div className="grid-site gap-y-8">
      <div className="col-span-full lg:col-span-7">
        {eyebrow && <p className="t-label t-muted mb-6" lang="en">{eyebrow}</p>}
        <Tag id={id} className={`t-${cls}`} lang={titleLang}>{title}</Tag>
      </div>
      {(paragraphs.length > 0 || action) && (
        <div className="col-span-full flex flex-col gap-4 lg:col-span-5 lg:self-end">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "t-lead measure" : "t-muted measure"}>{p}</p>
          ))}
          {action && <div className="mt-4">{action}</div>}
        </div>
      )}
    </div>
  );
}

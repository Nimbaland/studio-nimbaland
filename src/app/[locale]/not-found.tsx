import Link from "next/link";
import de from "@/i18n/dictionaries/de";

/** 404 – zweisprachig, da die Sprache hier nicht sicher bekannt ist. */
export default function NotFound() {
  return (
    <section className="tone-dark">
      <div className="container-site py-32">
        <h1 className="t-display">{de.notFound.title}<span className="stop">.</span></h1>
        <p className="t-lead t-muted mt-6 measure">{de.notFound.body}</p>
        <p className="mt-10 flex flex-wrap gap-6">
          <Link href="/de" className="btn btn--primary">{de.notFound.cta}</Link>
          <Link href="/en" className="btn btn--secondary" lang="en">Go to homepage</Link>
        </p>
      </div>
    </section>
  );
}

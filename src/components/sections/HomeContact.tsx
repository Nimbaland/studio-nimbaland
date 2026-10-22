import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { ContactForm } from "@/components/contact/ContactForm";

/** Kontakt direkt auf der Startseite: Headline links, Formular rechts. */
export function HomeContact({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.contactCta;
  return (
    <section id="contact" className="tone-dark section border-t border-line" aria-labelledby="home-contact-title">
      <div className="container-site grid-site gap-y-14">
        <div className="col-span-full lg:col-span-5">
          <p className="t-label t-muted mb-6" lang="en">{c.eyebrow}</p>
          <h2 id="home-contact-title" className="t-h2" lang="en">{c.title}</h2>
          <p className="t-lead mt-8 measure">{c.body}</p>
          {c.prompt && <p className="t-lead t-muted mt-3">{c.prompt}</p>}
          <div className="next-steps">
            <p className="t-label t-muted">{c.stepsTitle}</p>
            <ol>
              {c.steps.map((s, i) => (
                <li key={s}><span className="next-steps__num tabular-nums" aria-hidden="true">{i + 1}</span>{s}</li>
              ))}
            </ol>
          </div>
          {site.contact.email && (
            <p className="mt-10">
              <a href={`mailto:${site.contact.email}`} className="text-link link-standalone font-display text-[clamp(1.5rem,1.2rem+1vw,2rem)]">{site.contact.email}</a>
            </p>
          )}
          <p className="t-label t-muted mt-10" lang="en">{c.availability}</p>
        </div>
        <div className="col-span-full lg:col-span-6 lg:col-start-7">
          <ContactForm
            dict={dict.contact}
            serviceOptions={services.map((s) => s.title)}
            privacyHref={href(locale, "/datenschutz")}
            fallbackEmail={site.contact.email}
            idPrefix="home-"
          />
        </div>
      </div>
    </section>
  );
}

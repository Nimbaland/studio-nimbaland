import type { Metadata } from "next";
import { href, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { PageIntro } from "@/components/layout/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowUpRight } from "@/components/ui/Icons";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/contact", title: "Contact", description: d.contact.intro[0] });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const d = getDictionary(locale);
  const c = d.contact;

  return (
    <>
      <PageIntro eyebrow={c.eyebrow} title={c.pageTitle} titleLang="en" intro={c.intro} />

      {site.contact.email && (
        <section className="tone-dark border-t border-line">
          <div className="container-site py-10">
            <a href={`mailto:${site.contact.email}`} className="group inline-flex items-center gap-4 font-display text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-tight no-underline text-inherit hover:underline hover:decoration-1 hover:underline-offset-8">
              {site.contact.email}
              <ArrowUpRight size={28} className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>
      )}

      <section className="tone-dark section border-t border-line">
        <div className="container-site grid-site gap-y-16">
          <div className="col-span-full lg:col-span-7">
            <h2 className="t-h2 mb-10" lang="en">{c.formTitle}</h2>
            <ContactForm
              dict={c}
              serviceOptions={services.map((s) => s.title)}
              privacyHref={href(locale, "/datenschutz")}
              fallbackEmail={site.contact.email}
            />
          </div>

          <aside className="col-span-full flex flex-col gap-10 lg:col-span-4 lg:col-start-9 lg:pt-4">
            <ul className="rule-list" lang="en">
              {c.meta.map((m) => <li key={m} className="t-label py-4">{m}</li>)}
            </ul>
            <address className="not-italic leading-relaxed">
              {site.contact.address.name}<br />
              {site.contact.address.street}<br />
              {site.contact.address.city}
            </address>
            {site.social.length > 0 && (
              <div>
                <p className="t-label t-muted">{c.socialTitle}</p>
                <ul className="mt-2">
                  {site.social.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-link link-standalone">
                        {s.label}<span className="sr-only"> ({d.a11y.externalLink})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}

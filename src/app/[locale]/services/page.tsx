import type { Metadata } from "next";
import { href, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/content/services";
import { PageIntro } from "@/components/layout/PageIntro";
import { ServiceList } from "@/components/sections/ServiceList";
import { ButtonLink } from "@/components/ui/Button";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/services", title: "Services", description: d.services.intro[0] });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const s = getDictionary(locale).services;
  return (
    <>
      <PageIntro eyebrow={s.eyebrow} title={s.pageTitle} titleLang="en" intro={s.intro} />
      <section className="tone-dark section border-t border-line">
        <div className="container-site">
          <ServiceList services={services} locale={locale} variant="detailed" headingLevel="h2" deliverablesLabel={s.deliverables} />
        </div>
      </section>
      <section className="tone-dark section" aria-labelledby="services-closing">
        <div className="container-site grid-site gap-y-8">
          <h2 id="services-closing" className="t-h1 col-span-full lg:col-span-7" lang="en">{s.closingTitle}</h2>
          <div className="col-span-full flex flex-col gap-6 lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="t-lead">{s.closingBody}</p>
            <div><ButtonLink href={href(locale, "/contact")} lang="en">{s.closingCta}</ButtonLink></div>
          </div>
        </div>
      </section>
    </>
  );
}

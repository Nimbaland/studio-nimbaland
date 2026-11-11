import { site } from "@/content/site";
import { services } from "@/content/services";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/** Strukturierte Daten (schema.org) für Suchmaschinen und KI-Assistenten – nur belegte Angaben. */
export function JsonLd({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const a = site.contact.address;
  const base = site.url;
  const [postalCode, ...city] = a.city.split(" ");
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: site.founder,
        alternateName: "Nimba",
        jobTitle: "Creative Director & Brand Designer",
        url: `${base}/${locale}/about`,
        image: site.portrait ? `${base}${site.portrait}` : undefined,
        email: site.contact.email ? `mailto:${site.contact.email}` : undefined,
        sameAs: site.social.map((s) => s.url),
        worksFor: { "@id": `${base}/#studio` },
        hasCredential: { "@type": "EducationalOccupationalCredential", name: "AI Visual Engineer (IHK)" },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${base}/#studio`,
        name: site.name,
        url: `${base}/${locale}`,
        description: d.meta.defaultDescription,
        founder: { "@id": `${base}/#person` },
        email: site.contact.email ?? undefined,
        telephone: site.contact.phone.replace(/ /g, ""),
        address: { "@type": "PostalAddress", streetAddress: a.street, postalCode, addressLocality: city.join(" "), addressCountry: "DE" },
        areaServed: [{ "@type": "City", name: "Düsseldorf" }, { "@type": "Country", name: "Deutschland" }],
        knowsAbout: services.map((s) => s.title[locale]),
        sameAs: site.social.map((s) => s.url),
      },
      { "@type": "WebSite", "@id": `${base}/#website`, url: base, name: site.name, inLanguage: ["de", "en"], publisher: { "@id": `${base}/#studio` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

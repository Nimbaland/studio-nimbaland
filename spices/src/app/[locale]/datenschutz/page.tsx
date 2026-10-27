import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { PageHead } from "@/components/ui";
import { asset } from "@/lib/base";
import { salesOpen } from "@/lib/flags";
import { newsletterConfigured } from "@/lib/newsletter";
import { shopifyConfigured } from "@/lib/shopify";
import { sanityConfigured } from "@/sanity/env";
import { controller as c, privacyUpdated } from "@/lib/legal";

/**
 * Datenschutzerklärung für die Unterseite nimbaland.spices.
 * Die Abschnitte richten sich nach dem, was tatsächlich verbunden ist (Newsletter, Shop, CMS-Bilder).
 * Wird ein Dienst aktiviert, erscheint sein Abschnitt automatisch. Vor dem Verkaufsstart rechtlich prüfen lassen.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "de" ? "Datenschutz" : "Privacy policy", alternates: { languages: { de: asset("/de/datenschutz"), en: asset("/en/datenschutz") } } };
}

const A = ({ href, children }: { href: string; children: ReactNode }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;

export default async function Privacy({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const de = locale === "de";
  const shop = salesOpen && shopifyConfigured;
  return (
    <>
      <PageHead label={de ? "Rechtliches" : "Legal"} title={de ? "Datenschutzerklärung" : "Privacy policy"} lead={de ? undefined : "This English version is provided for convenience. The German version is legally binding."} />
      <div className="wrap legaltext">
        {de ? (
          <>
            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website (nimbaland.spices, Unterseite von nimbaland.studio) im Sinne der DSGVO ist:</p>
            <p>{c.name}<br />{c.street}<br />{c.city}<br />{c.country.de}<br />E-Mail: <a href={`mailto:${c.email}`}>{c.email}</a></p>
            <p>Eine Pflicht zur Benennung einer oder eines Datenschutzbeauftragten besteht nicht.</p>

            <h2>2. Das Wichtigste in Kürze</h2>
            <p>Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken, nutzt kein Tracking, keine Social-Media-Plugins und keine eingebetteten Inhalte von Drittanbietern. Schriften, Bilder und Grafiken werden direkt von diesem Server geladen; es besteht keine Verbindung zu Google Fonts. {salesOpen ? "" : "Derzeit können auf dieser Seite keine Produkte gekauft werden; es gibt keinen Warenkorb und kein Kundenkonto."}</p>

            <h2>3. Hosting und Server-Logfiles</h2>
            <p>Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf verarbeitet Vercel automatisch Informationen, die Ihr Browser übermittelt (Server-Logfiles): IP-Adresse, Datum und Uhrzeit, aufgerufene Seite bzw. Datei, Referrer-URL, Browsertyp und -version sowie Betriebssystem. Diese Daten sind technisch erforderlich, um die Website auszuliefern sowie Stabilität und Sicherheit zu gewährleisten.</p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in der sicheren und zuverlässigen Bereitstellung der Website. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Dabei können Daten in die USA übermittelt werden. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert; damit liegt ein Angemessenheitsbeschluss der EU-Kommission vor (Art. 45 DSGVO). Weitere Informationen: <A href="https://vercel.com/legal/privacy-policy">vercel.com/legal/privacy-policy</A>.</p>

            <h2>4. Cookies und Speicher im Browser</h2>
            {salesOpen ? (
              <p>Legen Sie Produkte in den Warenkorb, wird ein technisch notwendiges Cookie („ns_cart“) gesetzt, das nur die Kennung Ihres Warenkorbs enthält und nach 14 Tagen abläuft. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit Art. 6 Abs. 1 lit. b DSGVO. Weitere Cookies werden nicht gesetzt.</p>
            ) : (
              <p>Es werden keine Cookies gesetzt und keine Daten im Browserspeicher abgelegt.</p>
            )}

            <h2>5. Newsletter</h2>
            {newsletterConfigured ? (
              <>
                <p>Wenn Sie unseren Newsletter abonnieren, verarbeiten wir Ihre E-Mail-Adresse, die gewählte Sprache sowie Zeitpunkt der Anmeldung und der Bestätigung, um Ihnen neue Rezepte, Küchenideen und Produktneuigkeiten zu senden. Die Anmeldung erfolgt im Double-Opt-in-Verfahren: Sie erhalten eine E-Mail mit einem Bestätigungslink; erst nach dessen Aufruf sind Sie angemeldet. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die Protokollierung der Anmeldung dient dem Nachweis der Einwilligung (Art. 6 Abs. 1 lit. c und f DSGVO).</p>
                <p>Sie können Ihre Einwilligung jederzeit widerrufen, über den Abmeldelink in jeder E-Mail oder per Nachricht an die oben genannte Adresse. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt. Nach der Abmeldung wird Ihre Adresse aus dem Verteiler gelöscht; zum Nachweis einer früheren Einwilligung kann sie bis zu drei Jahre gesperrt aufbewahrt werden.</p>
                <p>Kontakt und Einwilligung werden bei Shopify International Limited, Victoria Buildings, 2. Etage, 1–2 Haddington Road, Dublin 4, D04 XN32, Irland, gespeichert und der Newsletter über Shopify versendet (<A href="https://www.shopify.com/de/legal/datenschutz">Datenschutzhinweise von Shopify</A>). Die Bestätigungs-E-Mail wird über den Dienst Resend (Resend, Inc., USA) versendet (<A href="https://resend.com/legal/privacy-policy">Datenschutzhinweise von Resend</A>). Mit beiden Anbietern bestehen Verträge zur Auftragsverarbeitung. Bei einer Übermittlung in die USA erfolgt diese auf Grundlage des EU-US Data Privacy Framework bzw. der EU-Standardvertragsklauseln.</p>
              </>
            ) : (
              <p>Die Newsletter-Anmeldung ist noch nicht freigeschaltet. Über das Formular werden derzeit keine Daten erhoben oder übermittelt. Sobald der Newsletter startet, ergänzen wir hier, welche Daten wir zu welchem Zweck und mit welchen Dienstleistern verarbeiten.</p>
            )}

            {shop && (
              <>
                <h2>6. Bestellungen über Shopify</h2>
                <p>Warenkorb, Bezahlung und Bestellabwicklung laufen über Shopify International Limited (Anschrift siehe oben). Mit „Zur Kasse“ werden Sie zum Checkout von Shopify weitergeleitet; dort gelten ergänzend die Datenschutzhinweise von Shopify. Wir verarbeiten Ihre Bestelldaten zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und bewahren sie entsprechend den handels- und steuerrechtlichen Pflichten auf (Art. 6 Abs. 1 lit. c DSGVO).</p>
              </>
            )}

            {sanityConfigured && (
              <>
                <h2>{shop ? "7" : "6"}. Inhaltsverwaltung</h2>
                <p>Rezepte und Bilder pflegen wir mit dem Content-Management-System Sanity (Sanity Inc., USA). Einzelne Bilder können direkt vom Bildserver cdn.sanity.io geladen werden; dabei wird Ihre IP-Adresse an Sanity übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Auslieferung von Inhalten). Sanity ist nach dem EU-US Data Privacy Framework zertifiziert. <A href="https://www.sanity.io/legal/privacy">sanity.io/legal/privacy</A></p>
              </>
            )}

            <h2>Links</h2>
            <p>Diese Website enthält einfache Links zu nimbaland.studio und gegebenenfalls zu externen Seiten. Erst beim Anklicken gelangen Sie auf die jeweilige Seite; dort gelten deren Datenschutzbestimmungen.</p>

            <h2>SSL- bzw. TLS-Verschlüsselung</h2>
            <p>Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am „https://“ in der Adresszeile.</p>

            <h2>Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3).</p>
            <p><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen. Eine formlose Nachricht an die oben genannte E-Mail-Adresse genügt.</p>
            <p>Sie können sich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO), etwa bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, <A href="https://www.ldi.nrw.de">www.ldi.nrw.de</A>.</p>

            <h2>Änderungen</h2>
            <p>Wir passen diese Datenschutzerklärung an, wenn sich die Website, die eingesetzten Dienste oder die Rechtslage ändern. Stand: {privacyUpdated.de}.</p>
          </>
        ) : (
          <>
            <h2>1. Controller</h2>
            <p>The controller for data processing on this website (nimbaland.spices, a section of nimbaland.studio) within the meaning of the GDPR is:</p>
            <p>{c.name}<br />{c.street}<br />{c.city}<br />{c.country.en}<br />Email: <a href={`mailto:${c.email}`}>{c.email}</a></p>

            <h2>2. In brief</h2>
            <p>This website uses no analytics or advertising cookies, no tracking, no social media plugins and no embedded third-party content. Fonts, images and graphics are loaded directly from this server; there is no connection to Google Fonts. {salesOpen ? "" : "Products cannot be purchased on this site at the moment; there is no cart and no customer account."}</p>

            <h2>3. Hosting and server log files</h2>
            <p>The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit, Vercel automatically processes information sent by your browser (IP address, date and time, requested page or file, referrer URL, browser type and version, operating system). This is technically necessary to deliver the website and keep it stable and secure. Legal basis: Art. 6(1)(f) GDPR. A data processing agreement is in place (Art. 28 GDPR). Data may be transferred to the USA; Vercel is certified under the EU-US Data Privacy Framework (adequacy decision, Art. 45 GDPR). <A href="https://vercel.com/legal/privacy-policy">vercel.com/legal/privacy-policy</A></p>

            <h2>4. Cookies and browser storage</h2>
            {salesOpen ? (
              <p>When you add products to your cart, a strictly necessary cookie (“ns_cart”) is set that only contains your cart ID and expires after 14 days (Section 25(2) no. 2 TDDDG, Art. 6(1)(b) GDPR). No other cookies are set.</p>
            ) : (
              <p>No cookies are set and no data is stored in your browser.</p>
            )}

            <h2>5. Newsletter</h2>
            {newsletterConfigured ? (
              <>
                <p>If you subscribe, we process your email address, chosen language and the time of sign-up and confirmation to send you new recipes, kitchen ideas and product news. We use double opt-in: you only become a subscriber after clicking the link in our confirmation email. Legal basis is your consent (Art. 6(1)(a) GDPR); logging the sign-up serves as proof of consent (Art. 6(1)(c) and (f) GDPR). You can withdraw your consent at any time via the unsubscribe link in every email or by contacting us.</p>
                <p>Contacts and consent are stored with Shopify International Limited, Victoria Buildings, 2nd floor, 1–2 Haddington Road, Dublin 4, D04 XN32, Ireland, and the newsletter is sent via Shopify. The confirmation email is sent via Resend (Resend, Inc., USA). Data processing agreements are in place with both. Transfers to the USA are based on the EU-US Data Privacy Framework or the EU Standard Contractual Clauses.</p>
              </>
            ) : (
              <p>Newsletter sign-up is not active yet. The form currently does not collect or transmit any data. Once the newsletter starts, we will add details of the data, purposes and service providers here.</p>
            )}

            {shop && (
              <>
                <h2>6. Orders via Shopify</h2>
                <p>Cart, payment and order processing are handled by Shopify International Limited. “Checkout” takes you to Shopify’s checkout, where Shopify’s privacy policy also applies. We process order data to perform the contract (Art. 6(1)(b) GDPR) and retain it as required by commercial and tax law (Art. 6(1)(c) GDPR).</p>
              </>
            )}

            {sanityConfigured && (
              <>
                <h2>{shop ? "7" : "6"}. Content management</h2>
                <p>Recipes and images are managed with Sanity (Sanity Inc., USA). Some images may be loaded directly from cdn.sanity.io, which transmits your IP address to Sanity (Art. 6(1)(f) GDPR). Sanity is certified under the EU-US Data Privacy Framework.</p>
              </>
            )}

            <h2>Your rights</h2>
            <p>You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), withdrawal of consent (Art. 7(3)) and to object to processing based on Art. 6(1)(f) GDPR (Art. 21). You may also lodge a complaint with a supervisory authority (Art. 77 GDPR), e.g. the North Rhine-Westphalia Commissioner for Data Protection and Freedom of Information, <A href="https://www.ldi.nrw.de">www.ldi.nrw.de</A>.</p>

            <h2>Changes</h2>
            <p>We update this policy when the website, the services used or the law change. Last updated: {privacyUpdated.en}.</p>
          </>
        )}
      </div>
    </>
  );
}

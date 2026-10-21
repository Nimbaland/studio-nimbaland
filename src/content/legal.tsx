import { site } from "@/content/site";

/**
 * Impressum und Datenschutzerklärung (Entwurf, Stand 21.10.2026).
 * Grundlage: tatsächlicher technischer Aufbau der Website (Hosting Vercel, lokale Schriften,
 * keine Cookies, kein Tracking, Kontaktformular mit Weiterleitung an CONTACT_WEBHOOK_URL).
 * Offene Punkte stehen in `legalOpen` und als [ … ] im Text. Keine Rechtsberatung –
 * vor dem Launch prüfen lassen bzw. mit einem Generator (z. B. IT-Recht Kanzlei, eRecht24) abgleichen.
 */

/** Angaben, die noch von Nimalan bestätigt werden müssen. null = Abschnitt wird ausgeblendet. */
export const legalOpen = {
  /** z. B. "+49 211 …" – optional, E-Mail + Kontaktformular reichen als Kontaktwege. */
  phone: null as string | null,
  /** Umsatzsteuer: "kleinunternehmer" | "ustid" | null (noch offen). */
  vatStatus: null as null | "kleinunternehmer" | "ustid",
  vatId: null as string | null,
  /** Anbieter, über den das Kontaktformular Nachrichten zustellt (z. B. Formspree). null = noch offen. */
  formProvider: null as null | { name: string; address: string; privacyUrl: string; thirdCountry: boolean },
};

const a = site.contact.address;

export const updated = "Oktober 2026";

export function Impressum() {
  return (
    <>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.founder}<br />
        {a.name}<br />
        {a.street}<br />
        {a.city}<br />
        {a.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a className="text-link" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        {legalOpen.phone && (<><br />Telefon: {legalOpen.phone}</>)}
        <br />Kontaktformular: siehe Seite „Kontakt“
      </p>

      {legalOpen.vatStatus === "ustid" && legalOpen.vatId && (
        <>
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: {legalOpen.vatId}</p>
        </>
      )}
      {legalOpen.vatStatus === "kleinunternehmer" && (
        <>
          <h2>Umsatzsteuer</h2>
          <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>
        </>
      )}

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {site.founder}<br />
        {a.street}<br />
        {a.city}
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
        und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich für
        eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Bei Bekanntwerden entsprechender
        Rechtsverletzungen entferne ich diese Inhalte umgehend.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Website enthält Links zu externen Websites Dritter (z. B. LinkedIn, Instagram und Websites von
        Kundinnen und Kunden), auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte ist stets
        der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
        Rechtsverstöße erkennbar. Bei Bekanntwerden von Rechtsverletzungen entferne ich derartige Links umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website gezeigten Arbeiten, Texte, Grafiken und Mockups unterliegen dem deutschen
        Urheberrecht. Die gezeigten Projekte sind im Auftrag der jeweiligen Kundinnen und Kunden entstanden;
        Marken und Logos sind Eigentum der jeweiligen Inhaber. Die Darstellung erfolgt zu Referenzzwecken.
        Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der
        schriftlichen Zustimmung. In einzelnen Arbeiten verwendete Fotos und Icons stammen teilweise aus
        lizenzierten Bilddatenbanken.
      </p>
    </>
  );
}

export function Datenschutz() {
  const fp = legalOpen.formProvider;
  return (
    <>
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung
        (DSGVO) ist:
      </p>
      <p>
        {site.founder} · {a.name}<br />
        {a.street}, {a.city}<br />
        E-Mail: <a className="text-link" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </p>
      <p>Eine Pflicht zur Benennung einer oder eines Datenschutzbeauftragten besteht nicht.</p>

      <h2>2. Das Wichtigste in Kürze</h2>
      <p>
        Diese Website verwendet keine Cookies zu Analyse- oder Werbezwecken, kein Tracking, keine
        Social-Media-Plugins und keine eingebetteten Inhalte von Drittanbietern. Schriften und Videos werden
        direkt von diesem Server geladen. Personenbezogene Daten werden nur verarbeitet, soweit das für den
        technischen Betrieb der Website nötig ist oder wenn Sie mich von sich aus kontaktieren.
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim
        Aufruf der Website verarbeitet Vercel automatisch Informationen, die Ihr Browser übermittelt
        (Server-Logfiles): IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite bzw. Datei,
        Referrer-URL, Browsertyp und -version sowie Betriebssystem. Diese Daten sind technisch erforderlich, um
        die Website auszuliefern sowie Stabilität und Sicherheit zu gewährleisten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; mein berechtigtes Interesse liegt in der sicheren und
        zuverlässigen Bereitstellung der Website. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung
        (Art. 28 DSGVO). Dabei können Daten in die USA übermittelt werden. Vercel ist nach dem
        EU-US Data Privacy Framework zertifiziert; damit liegt ein Angemessenheitsbeschluss der
        EU-Kommission vor (Art. 45 DSGVO). Die Logfiles werden von Vercel nur für einen begrenzten Zeitraum
        gespeichert und anschließend gelöscht. Weitere Informationen:{" "}
        <a className="text-link" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>.
      </p>

      <h2>4. Cookies und Speicher im Browser</h2>
      <p>
        Es werden keine Cookies gesetzt. Für die Dauer der Browsersitzung wird lediglich ein technischer
        Hinweis im Sitzungsspeicher (sessionStorage) abgelegt, damit die Einstiegsanimation nicht bei jedem
        Seitenwechsel erneut abgespielt wird. Dieser Eintrag enthält keine personenbezogenen Daten und wird
        beim Schließen des Browsers automatisch gelöscht. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG
        (unbedingt erforderlich für den von Ihnen gewünschten Dienst).
      </p>

      <h2>5. Kontakt per E-Mail und Kontaktformular</h2>
      <p>
        Wenn Sie mir eine E-Mail schreiben oder das Kontaktformular nutzen, verarbeite ich die von Ihnen
        angegebenen Daten (Name, E-Mail-Adresse, optional Unternehmen und Projektart sowie Ihre Nachricht), um
        Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage auf einen
        Vertrag oder vorvertragliche Maßnahmen zielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der Beantwortung von Anfragen).
      </p>
      {fp ? (
        <p>
          Nachrichten aus dem Kontaktformular werden über den Dienst {fp.name}, {fp.address}, an mich
          weitergeleitet. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung.
          {fp.thirdCountry && " Dabei können Daten in ein Drittland übermittelt werden; die Übermittlung erfolgt auf Grundlage eines Angemessenheitsbeschlusses bzw. der EU-Standardvertragsklauseln."}{" "}
          Datenschutzhinweise des Anbieters:{" "}
          <a className="text-link" href={fp.privacyUrl} target="_blank" rel="noopener noreferrer">{fp.privacyUrl}</a>.
        </p>
      ) : (
        <p data-placeholder="FORM_PROVIDER">
          [Offen: Dienst, über den das Kontaktformular Nachrichten zustellt – wird ergänzt, sobald das Formular
          angebunden ist.]
        </p>
      )}
      <p>
        E-Mails werden über meinen E-Mail-Anbieter Posteo e.K. (Berlin) empfangen und
        gespeichert. Ihre Angaben lösche ich, sobald die Anfrage abschließend bearbeitet ist und keine
        gesetzlichen Aufbewahrungspflichten (z. B. nach Handels- oder Steuerrecht) entgegenstehen.
      </p>

      <h2>6. Links zu sozialen Netzwerken</h2>
      <p>
        Auf dieser Website befinden sich einfache Links zu meinen Profilen bei LinkedIn und Instagram. Es handelt
        sich nicht um Plugins: Beim Besuch dieser Website werden keine Daten an diese Netzwerke übertragen. Erst
        wenn Sie einen Link anklicken, gelangen Sie auf die Seite des jeweiligen Anbieters; dort gelten dessen
        Datenschutzbestimmungen.
      </p>

      <h2>7. Schriften und Videos</h2>
      <p>
        Alle Schriften sind lokal auf dem Server eingebunden; es wird keine Verbindung zu Google Fonts oder
        anderen Schriftanbietern hergestellt. Videos in den Projektbeispielen werden ebenfalls direkt von diesem
        Server geladen, nicht über YouTube oder Vimeo.
      </p>

      <h2>8. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
        Verbindung erkennen Sie am „https://“ und am Schloss-Symbol in der Adresszeile Ihres Browsers.
      </p>

      <h2>9. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf</p>
      <ul className="list-disc pl-6">
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
        <li>Löschung (Art. 17 DSGVO),</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO).</li>
      </ul>
      <p>
        <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit die Verarbeitung auf Art. 6 Abs. 1 lit. f
        DSGVO beruht, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
        widersprechen. Eine formlose Nachricht an die oben genannte E-Mail-Adresse genügt.
      </p>
      <p>
        Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
        Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen,
        Kavalleriestraße 2–4, 40213 Düsseldorf,{" "}
        <a className="text-link" href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">www.ldi.nrw.de</a>.
      </p>

      <h2>10. Änderungen</h2>
      <p>
        Ich passe diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert.
        Stand: {updated}.
      </p>
    </>
  );
}

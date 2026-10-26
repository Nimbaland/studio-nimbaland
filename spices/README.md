# nimbaland.spices – Website

Zweisprachige Website (DE/EN) für **nimbaland.spices** mit der Produktmarke **Nimbo’s Kitchen**.
Next.js 16 (App Router) · TypeScript · Sanity (kostenloser Tarif) als CMS für Rezepte und Produkte.
Gleiche Technik und Typografie wie nimbaland.studio: Playfair Display, Manrope, IBM Plex Mono, alle self-hosted.

> **Status:** Arbeitsfassung. Alle Rezepte sind Entwürfe. Die Kaufstrecke ist gesperrt, bis die Pflichtangaben vorliegen.
> Offene Punkte: [`RELEASE-CHECKLIST.md`](./RELEASE-CHECKLIST.md)

---

## Starten

Voraussetzung: Node.js 20.9 oder neuer.

```bash
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000 → leitet auf /de oder /en
```

Ohne Sanity-Projekt-ID nutzt die Website die Startinhalte aus `content/recipes.json`.
So läuft sie sofort, auch bevor das CMS eingerichtet ist.

---

## Sanity einmalig einrichten (ca. 10 Minuten)

1. Auf **sanity.io** ein kostenloses Konto anlegen und ein neues Projekt erstellen
   (Name: nimbaland-spices, Dataset: `production`, **Sichtbarkeit: privat**).
2. Die **Projekt-ID** in `.env.local` eintragen: `NEXT_PUBLIC_SANITY_PROJECT_ID=…`
3. In sanity.io → Projekt → **API → CORS origins** hinzufügen:
   `http://localhost:3000` und später die Live-Adresse (jeweils mit „Allow credentials“).
4. In sanity.io → **API → Tokens** einen Token mit der Rolle **Viewer** anlegen.
   Ihn als `SANITY_API_READ_TOKEN` eintragen. **Nie** mit `NEXT_PUBLIC_` beginnen lassen und nie in den Code schreiben.
5. Startinhalte importieren:
   ```bash
   npx sanity login
   npm run seed:build
   npm run seed:import
   ```
   Damit landen 9 Rezepte (DE + EN), 3 Kategorien, 5 Tags und 2 Produkte samt Bildern im CMS, alle als Entwurf.
6. Studio öffnen: `http://localhost:3000/studio` (live: `https://<domain>/studio`).

Kostenloser Tarif: reicht für diese Website deutlich aus. Keine kostenpflichtigen Funktionen aktivieren,
ohne vorher zu prüfen, ob sie zum Tarif gehören. Das CMS ersetzt **keine** Shop- oder Zahlungsabwicklung.

---

## Anleitung: Rezepte pflegen

Alles geschieht im Studio unter **/studio**, ohne Code.

**Neues Rezept anlegen**
1. Links „Rezepte – Deutsch“ wählen, oben auf **+** klicken.
2. Reiter **Inhalt**: Titel, URL (Knopf „Generate“), Kurzbeschreibung für die Karte, Einleitung, Kategorie und Tags.
3. Reiter **Kochen**: Portionen, Zeiten, Zutaten (eine Zeile pro Zutat, Zwischenüberschriften mit Häkchen), Schritte,
   **Verwendete Mischung**, Dosierung, Küchentipp.
4. Reiter **Bild**: Foto hochladen, den Ausschnitt per Hotspot setzen. **Alt-Text**, **Bildherkunft** (eigenes Foto / KI / Stock)
   und **Bildnachweis** sind Pflicht bzw. wichtig.
5. Reiter **Status & Verknüpfung**: Sprache „Deutsch“, Teststatus „Entwurf“.
6. Unten rechts **Publish**. Das Rezept ist jetzt gespeichert, aber **noch nicht öffentlich**.

**Englische Fassung anlegen**
1. „Rezepte – English“ → **+** → Inhalte auf Englisch eintragen, Sprache „English“.
2. Unter **Zugehörige Übersetzung** das deutsche Rezept auswählen. In der deutschen Fassung umgekehrt das englische.
3. Die Liste **„Ohne Übersetzung“** zeigt alles, wo die Verknüpfung noch fehlt.

**Veröffentlichen**
- Nach dem Nachkochen: Teststatus auf **„Nachgekocht – Redaktion prüft“**, Zeiten und Mengen korrigieren,
  Häkchen „Zeiten und Portionen geprüft“ setzen.
- Nach der redaktionellen Prüfung: **„Freigegeben – erscheint öffentlich“** und **Publish**.
  Die Website zeigt das Rezept spätestens nach 2 Minuten.
- Nur freigegebene Rezepte erscheinen öffentlich. Entwürfe und Studio-Entwürfe sind über die Website nicht abrufbar.

**Auf der Startseite hervorheben**: Häkchen „Auf der Startseite hervorheben“ (maximal 3 werden gezeigt).

**Bild austauschen**: Im Reiter „Bild“ auf das Bild klicken → „Replace“. Alt-Text und Herkunft anpassen.

**Produkte mit Rezepten verknüpfen**: im Rezept unter „Verwendete Mischung“. Die Produktseite zeigt dann automatisch bis zu 3 passende Rezepte.

**Kategorien und Tags**: Die drei Hauptkategorien sind „Schnell & einfach“, „Tamilische Küche“ und „Nimbas Kreationen“.
Vegan, vegetarisch, mild, scharf und „mit Fleisch“ sind **Tags** (Filter), keine Kategorien.

---

## Produkte, Varianten und Pflichtangaben

**Shopify** ist die einzige Quelle für Produkte, Varianten (50 g, 100 g, Nachfüllbeutel), Preise, Grundpreise, Bestand,
Warenkorb und Bestellungen. Bezahlt wird im Shopify-Checkout. Die Website hat keine eigene Produkt-, Zahlungs- oder Bestellverwaltung.

So legst du ein Produkt in Shopify an:
1. Produkt mit dem Handle `cosy-mildness` bzw. `advanced-spiciness` anlegen (oder im Studio unter „Shopify-Handle“ einen anderen eintragen).
2. Option „Größe“ mit den Werten „50 g“, „100 g“, „Nachfüllbeutel … g“ anlegen. Erst mit bestätigter Füllmenge des Nachfüllbeutels.
3. Je Variante Preis, Gewicht und **Grundpreis** (Einheitspreis, Bezugsgröße 1 kg) pflegen. Varianten ohne Grundpreis bleiben auf der Website gesperrt.
4. Produkt dem Vertriebskanal „Headless“ zuweisen.

Im Studio (Sanity) stehen die redaktionellen Angaben: Beschreibung, Geschmack, Pflichtangaben (Unternehmer mit Anschrift,
Allergene, Lagerung, MHD-Hinweis, Los-Hinweis, Herkunft, Versand) und die Freigabe. **„Für den Verkauf freigegeben“** lässt sich erst
speichern, wenn diese Angaben vorhanden sind. Nährwerte sind für Gewürzmischungen freiwillig (LMIV Anhang V Nr. 4); werden sie
angegeben, muss die Grundlage (Analyse oder dokumentierte Berechnung) eingetragen werden.

Der Kaufen-Button ist nur aktiv, wenn (a) Shopify verbunden ist, (b) die Freigabe im Studio gesetzt ist und (c) die gewählte
Variante in Shopify verfügbar ist und einen Grundpreis hat.

**Zutaten-Lexikon, Dosierung, Herkunft und Gastkoch** stehen in `content/products.json`. Zutatenfotos tauschst du über das Feld
`img` (Pfad unter `public/img/`); `imgProvisional: false` setzen, sobald das finale Foto drin ist. Vorläufige Bilder sind in der
Vorschau mit „Vorläufiges Bild“ markiert. Die Zutatenreihenfolge in `products` ist die bestätigte Reihenfolge nach Gewicht.

## Newsletter (Double-Opt-in)

Anmeldung → Kontakt wird in Shopify mit Status „ausstehend“ angelegt → Bestätigungsmail mit signiertem Link (7 Tage gültig,
Versand über Resend) → Klick setzt die Einwilligung in Shopify auf „abonniert, bestätigt“. Shopify kann die Bestätigungsmail nicht
per API auslösen, deshalb der eigene Versand. Ohne alle Variablen (siehe `.env.example`) antwortet die Anmeldung mit
„noch nicht verbunden“ und speichert nichts. Newsletter selbst verschickst du mit Shopify Messaging an die abonnierten Kontakte.

---

## Projektstruktur

```text
content/recipes.json        Startinhalte (Quelle für den Seed-Import und den Betrieb ohne CMS)
content/products.json       Zutaten-Lexikon, Dosierung, Herkunft, Gastkoch (keine Preise)
src/lib/shopify.ts          Shopify Storefront/Admin API (nur Server)
src/lib/newsletter.ts       Double-Opt-in (Signatur, Shopify-Einwilligung, Mailversand)
src/app/api/…               Warenkorb-, Checkout- und Newsletter-Endpunkte
docs/farben.md              Farbwerte HEX/RGB, Verwendung, Status
sanity.config.ts            Studio-Konfiguration (/studio)
src/sanity/schemaTypes/     Eingabefelder und Validierungen
src/sanity/structure.ts     Seitenleiste im Studio
src/lib/content.ts          Datenzugriff (Sanity mit Server-Token, sonst lokale Inhalte)
src/i18n/dictionaries.ts    Alle UI-Texte DE/EN
src/app/[locale]/…          Seiten unter /de und /en
src/proxy.ts                Leitet / auf /de oder /en (Browsersprache)
scripts/make-seed.mjs       Erzeugt seed/seed.ndjson für den Import
```

Alle Farbwerte mit Verwendung und Bestätigungsstatus: `docs/farben.md`.

---

## Hosting (Vorschlag)

Wie nimbaland.studio: privates GitHub-Repo + Vercel-Projekt. Umgebungsvariablen aus `.env.example` in Vercel setzen.
Für eine Vorschau-Instanz mit Rezeptentwürfen `NEXT_PUBLIC_SHOW_DRAFTS=true`, auf der öffentlichen Seite immer `false`.
Vor dem Launch: `SITE_INDEXABLE=true`, `NEXT_PUBLIC_SITE_URL` auf die Domain, Rechtstexte ergänzen.

## Sicherheit

Next.js ist auf 16.4.3 gepinnt (Sicherheitsupdate). `npm audit` meldet noch mittlere bzw. hohe Hinweise in Werkzeugen der Sanity-CLI (js-yaml).
Sie betreffen die Entwicklungsumgebung, nicht die ausgelieferte Website. Bei neuen Sanity-Versionen erneut prüfen.

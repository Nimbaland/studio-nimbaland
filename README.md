# studio.nimbaland — Portfolio-Website

Zweisprachige (DE/EN) Portfolio-Website für Studio.Nimbaland, gebaut nach **Design System 01** (Arbeitsentwurf vom 20.10.2026).
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4.
Typografie: Playfair Display (Hero und Headlines, Italic für Akzente), Manrope (Navigation und Text), IBM Plex Mono (Labels).
Alle Schriften liegen self-hosted in `src/fonts` bzw. `public/fonts` (OFL-Lizenzen in `src/fonts/licenses`), also kein Google-Fonts-Abruf (DSGVO).

> **Status:** Struktur, Design Tokens, Komponenten und alle Seiten sind fertig.
> Projekte sind als **unveröffentlichte Kandidaten** angelegt. Texte sind Entwürfe.
> Was vor dem Launch noch fehlt, steht in [`CONTENT-BACKLOG.md`](./CONTENT-BACKLOG.md).

---

## Starten

Voraussetzung: Node.js 20.9 oder neuer.

```bash
npm install
cp .env.example .env.local   # Werte eintragen
npm run dev                  # http://localhost:3000 → leitet auf /de oder /en
```

Produktions-Build prüfen:

```bash
npm run build && npm start
```

Im **Dev-Modus** erscheinen auch unveröffentlichte Projekte (mit Badge „Entwurf – nicht freigegeben“).
Im **Produktions-Build** nur Projekte mit `published: true`. Sind noch keine freigegeben, zeigt
„Ausgewählte Arbeiten“ einen Hinweis mit Link zur Kontaktseite statt leerer Kacheln.
Für eine Vorschau-Instanz mit Entwürfen: `NEXT_PUBLIC_SHOW_DRAFTS=true`.

---

## Projektstruktur

```text
src/
  app/
    [locale]/                 Alle Seiten, je unter /de und /en
      page.tsx                Home: Hero · Ausgewählte Arbeiten · Leistungen · About · Kontakt-CTA
      work/page.tsx           Projektliste
      work/[slug]/page.tsx    Case-Study-Vorlage
      services/ about/ contact/ impressum/ datenschutz/
    api/contact/route.ts      Formular-Versand (Webhook)
    globals.css               Komponenten-Styles
    sitemap.ts robots.ts icon.svg
  styles/tokens.css           ← ALLE Farben, Schriftgrößen, Abstände, Motion
  i18n/
    config.ts                 Sprachen, Localized<T>, href()
    dictionaries/de.ts en.ts  ← alle UI-Texte
  content/
    site.ts                   ← Logo-Pfade, Kontakt, Social Links, Porträt
    services.ts               ← Leistungen
    about.ts                  ← Stationen, Zahlen, Ausbildung
    projects/                 ← eine Datei pro Projekt + _template.ts
  components/
    layout/   Header, Footer, BrandMark, LanguageSwitch, PageIntro
    ui/       Button, SectionHeading, AssetPlaceholder, FormField, StatusMessage, Breadcrumb, Icons
    projects/ ProjectCard, ProjectGrid, ProjectMedia, MediaGallery
    sections/ Hero, SelectedWork, Expertise, ServiceList, AboutPreview, ContactCTA, WorkEmptyState
    contact/  ContactForm
  proxy.ts                    Leitet / auf /de oder /en (Browsersprache)
public/
  brand/      Original-Logo und Signete
  projects/   /<slug>/cover.webp, gallery-01.webp …
```

---

## Ein echtes Projekt einpflegen

1. `src/content/projects/_template.ts` kopieren, z. B. nach `mein-projekt.ts`, und ausfüllen.
   Unbekannte Felder **löschen**, nichts erfinden. `outcomes` nur mit belegten Ergebnissen.
2. Bilder nach `public/projects/mein-projekt/` legen (WebP oder AVIF, lange Kante ca. 2400 px).
   Pfad in `coverImage.src` bzw. `gallery[].src` eintragen. Mit `src: null` erscheint ein Platzhalter.
3. In `src/content/projects/index.ts` importieren und in `all` aufnehmen.
4. Nach Kundenfreigabe `published: true` setzen. `featured: true` holt es auf die Startseite;
   `order` steuert die Reihenfolge. Das erste Featured-Projekt läuft auf der Startseite über volle Breite.

Jede Case Study bekommt automatisch eigene URLs (`/de/work/<slug>`, `/en/work/<slug>`), Metadaten,
hreflang und einen „Nächstes Projekt“-Link. Fehlende Abschnitte (z. B. kein `approach`) werden ausgelassen.

---

## Farben tauschen

Die Palette ist laut Design System **vorläufig**. Alle Werte stehen nur in `src/styles/tokens.css`
im Block „Primitive“. Beispiel Akzent auf die Logo-Farbe umstellen:

```css
--acid-lime-400: #c5d92d;
```

Die Website ist durchgehend dunkel (`tone-dark`); Sektionen trennt eine feine Linie.
Die Klasse `tone-light` ist in `tokens.css` weiter vorbereitet (inkl. AA-tauglichem `--slate-700` und Graphite-Fokusring),
falls später wieder helle Sektionen gewünscht sind.

---

## Interaktionen

Aufbau und Bewegung orientieren sich an der Referenz olhalazarieva.com, umgesetzt mit eigenem Code und deinem Design:

- **Ladeanimation** (`components/motion/Preloader.tsx`): Prozentzähler, einmal pro Sitzung.
- **Hero**: Headline baut sich Buchstabe für Buchstabe auf (reines CSS).
- **Physik-Sektion** (`PhysicsTags.tsx`, Matter.js): Begriffe aus deinen Leistungen fallen herunter und lassen sich ziehen.
- **Projekt-Slider** (`ProjectSlider.tsx`, GSAP ScrollTrigger): Auf Desktop horizontal beim Scrollen, mobil per Wischen.
- **Leistungen** als Accordion (`ServicesAccordion.tsx`).
- **Smooth Scrolling** (`SmoothScroll.tsx`, Lenis), **Header** blendet sich beim Runterscrollen aus.
- **Footer** mit Live-Uhrzeit Düsseldorf und der Wortmarke über die volle Breite.

Bei „reduzierter Bewegung“ (Systemeinstellung) entfallen Ladeanimation, Smooth Scrolling, Physik und Fixierung – alle Inhalte bleiben sichtbar und bedienbar.

## Hero-Textur

Die organische 3D-Textur wird in `src/content/site.ts → heroVisual` eingetragen (Bild und optional ein stummes Loop-Video).
Sie liegt rechts hinter der Headline, ist rein dekorativ und wird bei „reduzierter Bewegung“ als Standbild gezeigt.

## Kontaktformular

Validierung im Browser und auf dem Server, Honeypot-Feld und Zeitsperre gegen Spam.
Versand an `CONTACT_WEBHOOK_URL` als JSON-POST, z. B. an Formspree, Make, Zapier oder ein eigenes Postfach-Backend.
Ist nichts eingetragen, meldet das Formular ehrlich, dass es nicht verbunden ist. Es täuscht keinen Versand vor.

## Vor dem Launch

- `SITE_INDEXABLE=true` setzen (bis dahin sperrt `robots.txt` alle Suchmaschinen).
- Impressum und Datenschutz mit geprüften Texten füllen und dort `noindex` entfernen.
- `NEXT_PUBLIC_SITE_URL` auf die finale Domain setzen.
- Checkliste in `CONTENT-BACKLOG.md` abarbeiten.

## Hosting

- Code: privates GitHub-Repo **Nimbaland/studio-nimbaland** (Branch `main`)
- Vercel-Projekt **studio-nimbaland** – Test-URL: https://studio-nimbaland.vercel.app/de
- Jeder Push auf `main` wird automatisch neu veröffentlicht.
- Umgebungsvariablen aus `.env.example` im Vercel-Projekt setzen (vor dem Launch: `SITE_INDEXABLE`, `NEXT_PUBLIC_SITE_URL`, `CONTACT_WEBHOOK_URL`).

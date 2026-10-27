# Veröffentlichungsliste nimbaland.spices

Arbeitshilfe, keine Rechtsberatung. Pflichtangaben und Rechtstexte bitte fachlich prüfen lassen. Stand: 26.10.2026.

## Von dir benötigt
- [ ] **Rezepturanteile** beider Mischungen in % (intern; Grundlage für eine eventuelle Nährwertberechnung)
- [ ] **Nährwertgrundlage**: Laboranalyse oder Freigabe für eine dokumentierte Berechnung aus anerkannten Zutatendaten. Freiwillig (LMIV Anhang V Nr. 4), bei Angabe aber vollständig nach LMIV
- [ ] **Füllmenge der Nachfüllbeutel** (und finale Packungsart 50 g / 100 g)
- [ ] **Name und Anschrift des verantwortlichen Lebensmittelunternehmers** (Pflicht vor dem Kauf, Art. 9 Abs. 1 h + Art. 14 LMIV)
- [ ] **Haltbarkeitsgrundlage** (Lagertest/Erfahrungswerte des Herstellers) → MHD je Charge auf der Packung; Format nach Anhang X
- [ ] **Los-/Chargenkennzeichnung** auf der Packung („L…“, § 1 LKV)
- [ ] Allergen-Fußnote: Sternchen in „Keine kennzeichnungspflichtigen Allergene enthalten.*“ hat keinen Text. Spurenhinweis nur mit Herstellerinfo zu Kreuzkontakten
- [ ] **Fotos**: Produkt/Verpackung je Größe, Zutatenfotos (Koriander, Fenchel, Pfeffer, Curryblätter, Pandan fehlen; Kreuzkümmel, Kurkuma, Chili vorläufig)
- [ ] **Gastkoch**: Schreibweise „Philf Henker“, Porträt, Kurzvorstellung, Kochstil, Restaurant/Arbeitsort, Freigabe der 3 Rezepte
- [ ] **Farbwerte** Cosy/Advanced/Navy aus Vektordatei bestätigen (`docs/farben.md`); „Cosy“ vs. „Cozy“ angleichen
- [ ] Story-Fotos 2013: Einverständnis der abgebildeten Personen; ist die Frau im Küchenfoto deine Oma? (Bildunterschrift dann anpassen)
- [ ] Dosierung testen (Gramm pro gestrichenem TL wiegen), Geschmacksprofil nach Verkostung
- [ ] Endpreise festlegen (Empfehlung siehe Preisbericht, nicht übernommen)

## Shop & Technik
- [ ] Shopify-Shop anlegen, „Headless“-Kanal installieren, privaten Storefront-Token erzeugen → `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_PRIVATE_TOKEN`
- [ ] Produkte/Varianten mit Grundpreis (1 kg) in Shopify, Versandzonen, Steuern (7 % USt. Lebensmittel), Zahlungsanbieter
- [ ] Newsletter: Admin-API-Token (read/write_customers), Resend-Konto + verifizierte Absenderdomain, Signatur-Secret
- [ ] Sanity-Projekt anlegen, Seed importieren (siehe README)
- [x] Code liegt im Repo `Nimbaland/studio-nimbaland`, Ordner `spices/`, Branch `spices`; Vercel-Projekt `nimbaland-spices` (Root `spices`, basePath `/spices`)
- [x] Vorschau als Unterseite: studio-nimbaland-git-spices-nimbalands-projects.vercel.app/spices (Studio-Preview leitet per Rewrite auf nimbaland-spices.vercel.app)
- [ ] Launch als Unterseite der Live-Seite: Branch `spices` in `main` mergen und im Projekt studio-nimbaland `SPICES_ORIGIN=https://nimbaland-spices.vercel.app` für Production setzen
- [ ] Vor dem Launch im Projekt nimbaland-spices `NEXT_PUBLIC_SHOW_DRAFTS=false` (Production) setzen
- [ ] Impressum, Datenschutz (inkl. Shopify, Resend, Sanity, Vercel), AGB, Widerruf, Versand & Zahlung; Link zur Datenschutzerklärung im Newsletter-Formular
- [ ] Vor dem Launch: `SITE_INDEXABLE=true`, `NEXT_PUBLIC_SHOW_DRAFTS=false`, Domain in `NEXT_PUBLIC_SITE_URL`

## Rezepte
- [ ] Alle 9 Rezepte nachkochen, Zeiten, Portionen und Dosierung prüfen, dann freigeben
- [ ] Gemüse mit Curry-Apfel-Soße: Knoblauchmenge prüfen („1 Knolle“); KI-Bild zeigt Kräuterzweig, der nicht im Rezept vorkommt
- [ ] Lammcurry: Brühe klären, Chili der Beilage in Zutatenliste, Portionen
- [ ] Hähnchen mit Taleggio: Mischung zuordnen („braunes Curry“), Mengen ergänzen
- [ ] Gemüsecurry mit Tofu: Mischung im Foto bestätigen

## Erledigt
- [x] Hintergrundmusik, Audioplayer und Bedienelemente entfernt (Website und Artifact)
- [x] Zutatenreihenfolge absteigend nach Gewicht bestätigt und umgesetzt
- [x] Herkunft: Zutaten aus Sri Lanka, gemischt und abgefüllt in Jaffna
- [x] Next.js-Sicherheitsupdate auf 16.4.3

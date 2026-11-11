import type { PortfolioProject } from "./types";

// „Lächeln geht mit.“ – Abschlussprüfung der IHK-zertifizierten Weiterbildung „AI Visual Engineer“ bei SuperCode (Sommer 2026).
// Quellen aus Nimalans Ordner „Abschlussprüfung“: Aufgabenstellung (Creative Brief), Kampagnenkonzept (17 Folien),
// Moodboards (2 Seiten), finale Kampagnenbilder aus Magnific, Workflow-Ausgaben (Raster) und der fertige Werbeclip (25 s, 9:16, Suno-Track).
// Das freigestellte Produktbild stammt aus der Prüfungsaufgabe und wird auf der Website nicht einzeln gezeigt.
// Gruppenfoto „abschluss.jpg“ bewusst NICHT verwendet (reale Personen, keine Einwilligung belegt).
const project: PortfolioProject = {
  slug: "laecheln-geht-mit",
  title: "Lächeln geht mit.",
  tagline: { de: "Eine Stofftasche, zwei Settings, null Zeigefinger.", en: "One tote bag, two settings, zero finger-wagging." },
  client: "Abschlussprüfung AI Visual Engineer (IHK) · SuperCode",
  year: "2026",
  date: "2026-09",
  category: { de: ["KI-Bildwelten", "Kampagne"], en: ["AI-powered visuals", "Campaign"] },
  role: { de: ["Konzept", "Art Direction", "KI-Bildwelten", "Werbeclip", "Audio"], en: ["Concept", "Art direction", "AI-powered visuals", "Ad clip", "Audio"] },
  services: {
    de: ["KI-Bildwelten", "Kampagnenmotive", "Werbeclip"],
    en: ["AI-Powered Visuals", "Campaign Visuals", "Ad Clip"],
  },
  summary: {
    de: "Fiktive Sommerkampagne für eine Stofftasche mit Smiley-Print – Konzept, Kampagnenbilder im 4:5-Format, ein 25-Sekunden-Werbeclip für TikTok und ein Node-Workflow, der als Content-Maschine weitere Motive mit und ohne Person erzeugt.",
    en: "A fictional summer campaign for a tote bag with a smiley print – concept, campaign images in 4:5, a 25-second ad clip for TikTok and a node workflow that works as a content machine for more visuals with and without people.",
  },
  challenge: {
    de: "Die Prüfungsaufgabe: Aus freigestellten Produktbildern und einem Creative Brief eine Kampagne entwickeln – für umweltbewusste Menschen zwischen 20 und 45, in zwei Settings (Wochenmarkt und Küche), für Instagram-Feed und TikTok. Die eigentliche Schwierigkeit: Generative Modelle verformen flache Grafiken. Der Smiley wird schief, das Quadrat zum Rechteck.",
    en: "The exam brief: develop a campaign from cut-out product shots and a creative brief – for eco-minded people aged 20 to 45, in two settings (farmers’ market and kitchen), for Instagram feed and TikTok. The real difficulty: generative models distort flat graphics. The smiley turns crooked, the square becomes a rectangle.",
  },
  approach: {
    de: "Statt Sonnenuntergang und Plastik-Statistik: Nachhaltigkeit als Nebensache. Die Tasche wird nicht präsentiert, sie wird benutzt. Ein Moodboard je Setting legt Licht, Farbe und Optik fest – das Gelb des Prints ist immer der farbstärkste Punkt im Bild. Jedes Motiv entsteht aus dem freigestellten Produktbild als Referenz und wird gegen ein Masterbild geprüft. Als letzte Instanz wird der Print von Hand ersetzt.",
    en: "Instead of sunsets and plastic statistics: sustainability as a side note. The bag isn’t presented, it’s used. One moodboard per setting defines light, colour and lens – the yellow of the print is always the strongest colour in the frame. Every motif starts from the cut-out product shot as a reference and is checked against a master image. As a last resort, the print is replaced by hand.",
  },
  solution: {
    de: "Kampagnenbilder für den Instagram-Feed, ein 25-Sekunden-Clip im 9:16-Format aus animierten Standbildern – mit Jingle aus Suno – und zwei Workflow-Stränge in Magnific: einer für Produktbilder ohne Person, einer immer mit Person. Neue Varianten entstehen durch den Austausch einer Node, nicht durch ein neues Shooting.",
    en: "Campaign images for the Instagram feed, a 25-second 9:16 clip made from animated stills – with a jingle made in Suno – and two workflow strands in Magnific: one for product images without people, one always with a person. New variations come from swapping a node, not from a new shoot.",
  },
  story: {
    challenge: { de: "Eine Stofftasche mit Smiley – und eine Zielgruppe, die Öko-Kampagnen mit erhobenem Zeigefinger längst kennt.", en: "A tote bag with a smiley – and an audience that has long seen every eco campaign with a raised finger." },
    idea: { de: "„Lächeln geht mit.“ Nachhaltigkeit als Nebensache: Die Tasche wird nicht präsentiert, sie wird benutzt.", en: "“The smile comes along.” Sustainability as a side note: the bag isn’t presented, it’s used." },
    decision: { de: "Jedes Bild entsteht aus dem Produktfoto als Referenz und wird gegen ein Masterbild geprüft – damit der Smiley in jedem Motiv gleich bleibt.", en: "Every image starts from the product shot and is checked against a master – so the smiley stays the same in every motif." },
  },
  coverImage: {
    src: "/projects/laecheln-geht-mit/cover.webp",
    ai: true,
    alt: { de: "Drei Kampagnenbilder nebeneinander: Frau mit Stofftasche auf dem Wochenmarkt, gefüllte Tasche in der Küche, Frau mit Tasche in einer Gasse", en: "Three campaign images side by side: woman with tote bag at a farmers’ market, filled bag in a kitchen, woman with bag in a street" },
    aspect: "16/9",
    width: 2400,
    height: 1350,
  },
  gallery: [
    { src: "/projects/laecheln-geht-mit/konzept-idee.webp", span: "full", alt: { de: "Konzeptfolie: die Idee „Lächeln geht mit.“ mit doppelter Lesart, visuellem Anker und Verzicht auf Öko-Vokabular", en: "Concept slide: the idea “Lächeln geht mit.” with its double meaning, a visual anchor and no eco vocabulary" }, caption: { de: "Die Idee", en: "The idea" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/laecheln-geht-mit/moodboard-1.webp", span: "half", alt: { de: "Moodboard Setting 1: Wochenmarkt und Straße – Licht, Farbe, Material, Kamera", en: "Moodboard setting 1: market and street – light, colour, material, lens" }, caption: { de: "Moodboard · Wochenmarkt", en: "Moodboard · market" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/laecheln-geht-mit/moodboard-2.webp", span: "half", alt: { de: "Moodboard Setting 2: Küche zuhause – Fensterlicht, warme Neutraltöne, angeschnittener Print", en: "Moodboard setting 2: kitchen at home – window light, warm neutrals, cropped print" }, caption: { de: "Moodboard · Küche", en: "Moodboard · kitchen" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/laecheln-geht-mit/markt-01.webp", ai: true, span: "half", alt: { de: "Frau mit Stofftasche geht im Gegenlicht zwischen Marktständen", en: "Woman with tote bag walking between market stalls in backlight" }, caption: { de: "Setting 1 · Wochenmarkt", en: "Setting 1 · market" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/markt-03.webp", ai: true, span: "half", alt: { de: "Frau von hinten mit der Tasche über der Schulter auf dem Weg durch den Markt", en: "Woman seen from behind with the bag over her shoulder, walking through the market" }, caption: { de: "Setting 1 · Wochenmarkt", en: "Setting 1 · market" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/markt-02.webp", ai: true, span: "half", alt: { de: "Frau mit gefüllter Tasche und Blumen in einer sonnigen Altstadtgasse", en: "Woman with a filled bag and flowers in a sunny old-town street" }, caption: { de: "Setting 1 · Straße", en: "Setting 1 · street" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/kueche-01.webp", ai: true, span: "half", alt: { de: "Die gefüllte Tasche liegt auf der Arbeitsplatte, daneben Kräuter und eine Tasse", en: "The filled bag lying on the counter next to herbs and a mug" }, caption: { de: "Setting 2 · Küche, ohne Person", en: "Setting 2 · kitchen, no person" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/kueche-03.webp", ai: true, span: "half", alt: { de: "Hand greift in die mit Gemüse gefüllte Tasche auf der Küchenarbeitsplatte", en: "Hand reaching into the vegetable-filled bag on the kitchen counter" }, caption: { de: "Setting 2 · Küche", en: "Setting 2 · kitchen" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/kueche-02.webp", ai: true, span: "half", alt: { de: "Hand stellt die gefüllte Tasche auf die Arbeitsplatte, Print groß im Bild", en: "Hand setting the filled bag on the counter, print large in frame" }, caption: { de: "Setting 2 · Küche", en: "Setting 2 · kitchen" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/kueche-05.webp", ai: true, span: "half", alt: { de: "Stillleben: Tasche neben einer Schale mit Möhren im seitlichen Fensterlicht", en: "Still life: bag next to a bowl of carrots in side window light" }, caption: { de: "Setting 2 · Küche, ohne Person", en: "Setting 2 · kitchen, no person" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/kueche-04.webp", ai: true, span: "half", alt: { de: "Stillleben: Tasche mit Kräutern auf der Holzarbeitsplatte", en: "Still life: bag with herbs on the wooden counter" }, caption: { de: "Setting 2 · Küche, ohne Person", en: "Setting 2 · kitchen, no person" }, aspect: "4/5", width: 928, height: 1152 },
    { src: "/projects/laecheln-geht-mit/werbeclip-poster.webp", ai: true, video: "/projects/laecheln-geht-mit/werbeclip.mp4", autoplay: false, span: "full", alt: { de: "Video: 25-Sekunden-Werbeclip im Hochformat – vom Haken in der Küche über den Wochenmarkt zurück in die Küche, Claim „Lächeln geht mit.“", en: "Video: 25-second vertical ad clip – from the kitchen hook through the market and back to the kitchen, claim “Lächeln geht mit.”" }, caption: { de: "Werbeclip 9:16 · 25 Sekunden · Kling 2.5 · Jingle mit Suno", en: "Ad clip 9:16 · 25 seconds · Kling 2.5 · jingle with Suno" }, aspect: "16/9", width: 720, height: 1280 },
    { src: "/projects/laecheln-geht-mit/konzept-konsistenz.webp", span: "full", alt: { de: "Konzeptfolie Produktkonsistenz: Referenz statt Beschreibung, Prüfen gegen den Master, Upscaler, Print manuell ersetzen", en: "Concept slide on product consistency: reference instead of description, checking against the master, upscaler, replacing the print by hand" }, caption: { de: "Produktkonsistenz: die eigentliche Arbeit", en: "Product consistency: the real work" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/laecheln-geht-mit/konzept-workflow.webp", span: "full", alt: { de: "Konzeptfolie Node-Workflow: Input Produktbild, Strang A ohne Person, Strang B mit Person", en: "Concept slide node workflow: product image input, strand A without person, strand B with person" }, caption: { de: "Node-Workflow: zwei Stränge, eine Content-Maschine", en: "Node workflow: two strands, one content machine" }, aspect: "16/9", width: 2400, height: 1350 },
    { src: "/projects/laecheln-geht-mit/workflow-ohne-person.webp", ai: true, span: "half", alt: { de: "Neun Workflow-Varianten ohne Person: die Tasche mit unterschiedlichen Smiley-Farben auf Markt und Küchentisch", en: "Nine workflow variations without a person: the bag with different smiley colours at the market and on the kitchen table" }, caption: { de: "Strang ohne Person", en: "Strand without a person" }, aspect: "1400/1737", width: 1400, height: 1737 },
    { src: "/projects/laecheln-geht-mit/workflow-mit-person-b.webp", ai: true, span: "half", alt: { de: "Neun Workflow-Varianten mit Person: ein Mann auf dem Markt trägt die Tasche mit wechselnden Motiven im gelben Quadrat", en: "Nine workflow variations with a person: a man at the market carrying the bag with changing motifs in the yellow square" }, caption: { de: "Strang mit Person", en: "Strand with a person" }, aspect: "1400/1737", width: 1400, height: 1737 },
    { src: "/projects/laecheln-geht-mit/konzept-recht.webp", span: "full", alt: { de: "Konzeptfolie Recht und Transparenz: Urheberrecht, Persönlichkeitsrecht, Kennzeichnung nach EU AI Act", en: "Concept slide on law and transparency: copyright, personality rights, labelling under the EU AI Act" }, caption: { de: "Recht und Transparenz", en: "Law and transparency" }, aspect: "16/9", width: 2400, height: 1350 },
  ],
  document: {
    href: "/projects/laecheln-geht-mit/Laecheln_geht_mit_Kampagnenkonzept.pdf",
    label: { de: "Kampagnenkonzept als PDF", en: "Campaign concept as PDF (German)" },
  },
  aiNote: {
    de: "Mit KI erzeugt: alle Kampagnenbilder, die Workflow-Varianten, die Videosequenzen des Werbeclips (Kling 2.5) und der Gesang des Jingles (Suno). Bildgenerierung und Workflow in Magnific. Von Hand: Konzept, Moodboards, Auswahl, Prüfung der Produktkonsistenz und Schnitt. Kampagne und Personen sind fiktiv; die Kampagne ist eine Prüfungsarbeit, kein Kundenauftrag.",
    en: "Made with AI: all campaign images, the workflow variations, the clip’s video sequences (Kling 2.5) and the jingle’s vocals (Suno). Image generation and workflow in Magnific. By hand: concept, moodboards, selection, product consistency checks and the edit. Campaign and people are fictional; this is exam work, not a client commission.",
  },
  featured: true,
  published: true,
  order: 2,
  backlog: [
    "Restliche Kampagnenmotive (liegen nur in iCloud) bei Bedarf ergänzen",
    "Screenshot des Node-Workflows aus Magnific ergänzen, falls gewünscht",
  ],
};

export default project;

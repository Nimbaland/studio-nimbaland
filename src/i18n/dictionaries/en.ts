import type { Dictionary } from "./de";

/**
 * UI copy, English – same message as the German site, written to read naturally in English (revised 11.11.2026).
 * Have a native speaker proofread before launch.
 */
const en: Dictionary = {
  meta: {
    siteName: "nimbaland.studio",
    defaultTitle: "nimbaland.studio – Brand identities, websites and AI-powered visuals from Düsseldorf",
    defaultDescription:
      "I'm Nimba (Nimalan Suntharalingam), a creative director and designer with a studio in Düsseldorf. I create brand identities, websites and AI-powered visuals for small businesses, health practices and hospitality.",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageSwitch: "Choose language",
    breadcrumb: "Breadcrumb",
    externalLink: "opens in a new tab",
  },
  nav: {
    menu: "Menu",
    home: "Home",
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
    imprint: "Legal notice",
    privacy: "Privacy",
    closeMenu: "Close menu",
  },

  hero: {
    hello: "Hi, I’m Nimba.",
    headline: "Let’s make your brand",
    accent: "seen",
    intro:
      "With brand identities, websites and AI‑powered visuals – for small businesses, health practices and hospitality. My studio is based in Düsseldorf.",
    servicesCta: "🔥 How I can help",
    workCta: "See my work",
    recentWork: "Latest project",
  },

  ticker: {
    label: "From my work so far",
    puzzle: "Your logo here?",
  },
  recognition: {
    eyebrow: "Where projects start",
    title: "Sound familiar?",
    intro: "Most projects don't start with a brief, but with a feeling: there's more in this.",
    proof: "How I solved it",
    outro: "Here's what that looks like in my projects.",
  },
  work: {
    eyebrow: "Selected projects",
    sectionTitle: "Three projects up close.",
    sectionIntro: [
      "Each with the question at the start, the idea behind it and the decision that made the difference.",
    ],
    allWork: "All projects",
    viewProject: "View project",
    challenge: "The question",
    idea: "The idea",
    decision: "The decision",
    moreTitle: "Curious for more?",
    moreBody: "The overview has every project – from packaging and editorial design to an app concept.",
    scrollHint: "Scroll or use arrows",
    prevProject: "Previous project",
    nextProject: "Next project",
    draftBadge: "Draft – not approved",
    emptyTitle: "The projects are being prepared.",
    emptyBody: "I'm happy to walk you through selected projects in a conversation or send you a portfolio.",
    emptyCta: "Start a project",
  },
  approach: {
    eyebrow: "Approach",
    dragHint: "Drag to move",
  },
  expertise: {
    eyebrow: "Services",
    sectionTitle: "Where I can help.",
    intro: "You decide what you need. I can support single steps or the whole project – one point of contact from the first question to the finished design.",
    introMore: "",
    processTitle: "How I work",
    exampleLabel: "Project example",
    focusLabel: "Main focus",
    ctaText: "Want to know which of this fits your project?",
    cta: "Start a project",
    process: [
      { title: "Understand", body: "Market, audience and what sets you apart." },
      { title: "Sharpen", body: "Positioning, core idea and tone of voice." },
      { title: "Design", body: "Identity, imagery and interfaces." },
      { title: "Deliver", body: "Rollout, website, campaign – down to the detail." },
    ],
  },
  marquee: {
    label: "Start a project – write to me",
    items: ["Got something good?", "Let's make it seen", "AI-powered visuals", "Start a project", "Brand · Web · Visuals"],
  },
  aboutPreview: {
    eyebrow: "The person behind it",
    sectionTitle: "Hi, I'm Nimba.",
    lead: "I don't believe in design by formula.",
    body: [
      "For more than ten years I've been developing brands, designing campaigns and bringing digital presences to life. My experience ranges from brand & design management at Kratzert and senior art direction at Colliers International to design at Savills and art direction for Bosch and Würth. Since 2018 I've also been running my own studio.",
      "Art, fashion and visual culture shape how I see. I use generative AI to make ideas visible earlier and explore more directions. What fits your brand in the end, we decide together – not the machine.",
    ],
    facts: [
      { value: "10+", label: "Years of design & art direction" },
      { value: "66", label: "Clients since 2018" },
      { value: "AI", label: "Certified AI Visual Engineer" },
    ],
    contactCta: "Start a project",
    cta: "More about me",
  },
  contactCta: {
    eyebrow: "Contact",
    title: "Tell me what you're working on.",
    body: "You don't need a finished brief. A few sentences are enough: what it's about, where you are right now, and whether there's a timeline.",
    prompt: "",
    stepsTitle: "What happens next",
    steps: [
      "You write to me – via the form or by email.",
      "I read every message myself and reply personally.",
      "In a first conversation we clarify goals, scope and timing.",
    ],
    button: "Start a project",
    availability: "Available for selected projects and collaborations.",
  },

  about: {
    pageTitle: "About me.",
    name: "Nimalan Suntharalingam",
    role: "Creative Director & Brand Designer · Certified AI Visual Engineer",
    intro: "I'm Nimalan – most people call me Nimba. Creative director, designer and founder of nimbaland.studio.",
    body: [
      "For me, good design starts with questions: What does a brand stand for? What story does it tell? What should stay with people?",
      "For more than ten years I've been developing brands, designing campaigns and bringing digital presences to life. My experience ranges from brand & design management at Kratzert and senior art direction at Colliers International to design at Savills and art direction for Bosch and Würth. Since 2018 I've also been running my own studio.",
    ],
    drivesTitle: "What drives me",
    drivesBody: "Curiosity, independence and the ambition to create something distinct rather than something interchangeable.",
    studioNote: "",
    beyondTitle: "Beyond the screen.",
    beyondBody: [
      "Art, fashion and visual culture shape how I see – so I never think about design within a single discipline. I like working directly with the people who want to move something forward.",
    ],
    closing: "Studio in Düsseldorf. Projects far beyond it.",
    cta: "Start a project",
    portraitAlt: "Portrait of Nimalan Suntharalingam",
  },

  workPage: {
    pageTitle: "Work.",
    subtitle: "Ideas that made it into the world.",
    intro: "Different industries. Different challenges. One shared standard: design with a clear idea.",
  },
  caseStudy: {
    overview: "Overview",
    client: "Client",
    year: "Year",
    role: "Role",
    services: "Services",
    challenge: "Context",
    approach: "Approach",
    solution: "Solution",
    outcomes: "Outcomes",
    gallery: "Project images",
    nextProject: "Next project",
    backToWork: "Back to all projects",
    missingText: "The full project description is coming soon.",
  },

  services: {
    eyebrow: "Services",
    pageTitle: "How I can help.",
    intro: [
      "I support projects from the first question to the finished design – strategically, conceptually or hands-on. You get everything from one person.",
    ],
    deliverables: "What's included",
    closingTitle: "A good idea deserves good execution.",
    closingBody: "Need support with a specific project, or looking for a creative partner for the long term?",
    closingCta: "Start a project",
  },

  contact: {
    eyebrow: "Contact",
    pageTitle: "Let's create something that lasts.",
    intro: [
      "New brand, existing identity or a digital idea: tell me what you're working on and what you want to achieve. I'll reply personally.",
    ],
    formTitle: "A good conversation is a good start.",
    meta: ["Studio in Düsseldorf", "Brand · Web · AI-powered visuals"],
    emailLabel: "Email",
    socialTitle: "Profiles",
    form: {
      name: "Name",
      email: "Email",
      company: "Company / brand",
      optional: "optional",
      projectType: "What's it about?",
      projectTypePlaceholder: "Please choose",
      message: "Your message",
      messageHint: "At least 20 characters.",
      messagePlaceholder: "What is it about? Where are you right now? Is there a timeline?",
      privacy: "I have read the privacy notice and agree that my details are used to process this enquiry.",
      privacyLink: "Privacy notice",
      submit: "Send enquiry",
      submitting: "Sending …",
      honeypot: "Leave this field empty",
      other: "Something else",
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address, e.g. name@company.com.",
      message: "Your message is too short. Please write at least 20 characters.",
      privacy: "Please confirm the privacy notice so I'm allowed to process your enquiry.",
      summary: "Please check the highlighted fields.",
    },
    status: {
      success: "Enquiry sent. Thank you – you'll hear from me by email.",
      notConfigured: "This form isn't connected to an inbox yet. Your message was not sent.",
      failed: "Your enquiry couldn't be sent. Please try again in a few minutes.",
      emailFallback: "You can also reach me directly by email:",
    },
  },

  legal: {
    draftNotice: "Note: the provider details are approved. Further mandatory details (e.g. person responsible for content, VAT ID if applicable) will be added before launch.",
  },
  footer: {
    tagline: "Independent design studio",
    location: "Düsseldorf, Germany",
    rights: "All rights reserved.",
    localTime: "Local time:",
    pages: "Pages",
    connect: "Profiles",
  },
  notFound: {
    title: "This page doesn't exist",
    body: "The link is outdated or the address contains a typo.",
    cta: "Go to homepage",
  },
};

export default en;

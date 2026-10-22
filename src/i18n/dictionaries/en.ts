import type { Dictionary } from "./de";

/**
 * UI copy, English. Headlines, eyebrows and buttons are identical to the German site;
 * body copy is translated from Nimalan's German text. Have a native speaker proofread before launch.
 */
const en: Dictionary = {
  meta: {
    siteName: "studio.nimbaland",
    defaultTitle: "Studio.Nimbaland — Creative Direction for real change",
    defaultDescription:
      "Nimalan Suntharalingam, independent creative director and brand designer based in Düsseldorf. Brand strategy, creative direction, digital design and AI visual engineering.",
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
    work: "Works",
    services: "Services",
    about: "About Me",
    contact: "Contact",
    cta: "Let's Talk",
    imprint: "Legal notice",
    privacy: "Privacy",
  },

  hero: {
    eyebrow: "Brand / Digital / AI",
    titleLines: ["Creative Direction", "for real"],
    /** Akzentwort am Ende der letzten Zeile, in Italic */
    titleAccent: "change",
    statement: "Strong design gives brands a voice, a face and a soul.",
    intro:
      "I'm Nimalan “Nimba” Suntharalingam, a creative director and brand designer based in Düsseldorf. With Studio.Nimbaland I create brands, websites and visual worlds – from the first idea to the finished application.",
    tagline: "It draws the eye, stirs emotion and tells stories that stay in the mind and touch the heart. Because exceptional design isn't just seen – it's felt, experienced and remembered.",
    location: ["Based", "in", "Düsseldorf"],
    recentWork: "Recent Work",
    primaryCta: "Selected Work",
    secondaryCta: "Let's Talk",
  },
  work: {
    eyebrow: "Selected Work / 01",
    sectionTitle: "Work that speaks for itself.",
    sectionIntro: [
      "A selection of branding, art direction and digital design – for medical practices, real estate, hospitality and young brands.",
    ],
    allWork: "Explore Projects",
    viewProject: "View Project",
    scrollHint: "Scroll or use arrows",
    prevProject: "Previous project",
    nextProject: "Next project",
    draftBadge: "Draft – not approved",
    emptyTitle: "Case studies are being prepared.",
    emptyBody: "I'm happy to walk you through selected projects in a conversation or send you a portfolio.",
    emptyCta: "Let's Talk",
  },
  approach: {
    eyebrow: "Approach / 00",
    dragHint: "Drag to move",
  },
  expertise: {
    eyebrow: "What I Do / 02",
    sectionTitle: "Strategy meets expression.",
    intro: "Four disciplines, one point of contact. Strategy sets the direction, design makes it visible – I take care of both.",
    introMore: "",
    processTitle: "How I work",
    exampleLabel: "Project example",
    process: [
      { title: "Understand", body: "Market, audience and what sets you apart." },
      { title: "Sharpen", body: "Positioning, core idea and tone of voice." },
      { title: "Design", body: "Identity, imagery and interfaces." },
      { title: "Deliver", body: "Rollout, website, campaign – down to the detail." },
    ],
  },
  aboutPreview: {
    eyebrow: "About / 03",
    sectionTitle: "Independent mind. Multidisciplinary approach.",
    lead: "I don't believe in design by formula.",
    body: [
      "More than ten years of design and art direction – as senior art director at Colliers International, senior designer at Savills, art director for Bosch and Würth, and since 2018 with my own studio for more than 60 clients. Today I combine that experience with UX/UI and generative AI.",
    ],
    cta: "More About Me",
  },
  contactCta: {
    eyebrow: "Contact / 04",
    title: "Have something in mind? Let's make it matter.",
    body: "A new brand, a rebrand, a website – or an idea that hasn't found its form yet. Tell me in a few sentences what it's about.",
    prompt: "",
    button: "Start a Conversation",
    availability: "Düsseldorf, Germany · Available for selected projects and collaborations.",
  },

  about: {
    pageTitle: "Behind the ideas.",
    name: "Nimalan Suntharalingam",
    role: "Independent Creative Director / Brand & Design / AI Visual Engineering",
    intro: "I'm Nimalan – most people call me Nimba. Creative director, designer and founder of Studio.Nimbaland.",
    body: [
      "For me, good design starts with questions: What does a brand stand for? What story does it tell? What should stay with people?",
      "For more than ten years I've been turning these questions into brands, campaigns and websites – trained in communication design, shaped by agencies and in-house teams, much of it in real estate. Generative AI now lets me make ideas visible earlier and test more directions. Deciding what fits the brand is still handcraft.",
    ],
    drivesTitle: "What drives me?",
    drivesBody: "Curiosity. Independence. And the ambition to create something distinct rather than the next thing.",
    studioNote: "",
    beyondTitle: "Beyond the screen.",
    beyondBody: [
      "Art, fashion and visual culture shape how I see – so I never think about design within a single discipline. I like working directly with the people who want to move something forward.",
    ],
    closing: "Based in Düsseldorf. Working beyond boundaries.",
    cta: "Get in Touch",
    portraitAlt: "Portrait of Nimalan Suntharalingam",
  },

  workPage: {
    pageTitle: "Selected work.",
    subtitle: "A selection of ideas made real.",
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
    nextProject: "Next Project",
    backToWork: "Back to all work",
    missingText: "The full case study is coming soon.",
  },

  services: {
    eyebrow: "One Creative Partner. Multiple Disciplines.",
    pageTitle: "What I bring to the table.",
    intro: [
      "I support projects from the first question to the finished design – strategically, conceptually or hands-on. Everything from one source.",
    ],
    deliverables: "Services",
    closingTitle: "The right idea deserves the right execution.",
    closingBody: "Need support with a specific project, or looking for a creative partner for the long term?",
    closingCta: "Let's Work Together",
  },

  contact: {
    eyebrow: "Have a Project in Mind?",
    pageTitle: "Let's create something worth remembering.",
    intro: [
      "New brand, existing identity or a digital idea: tell me what you're working on and what you want to achieve. I'll reply personally.",
    ],
    formTitle: "A good conversation is a good start.",
    meta: ["Düsseldorf, Germany", "Brand / Digital / AI"],
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
      privacy: "I have read the privacy notice and agree that my details are used to process this enquiry.",
      privacyLink: "Privacy notice",
      submit: "Send Inquiry",
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
      success: "Inquiry sent. Thank you — you'll hear from me by email.",
      notConfigured: "This form isn't connected to an inbox yet. Your message was not sent.",
      failed: "Your inquiry couldn't be sent. Please try again in a few minutes.",
      emailFallback: "You can also reach me directly by email:",
    },
  },

  legal: {
    draftNotice: "Note: the provider details are approved. Further mandatory details (e.g. person responsible for content, VAT ID if applicable) will be added before launch.",
  },
  footer: {
    tagline: "Independent Creative Studio",
    location: "Düsseldorf, Germany",
    rights: "All rights reserved.",
    localTime: "Düsseldorf, Germany:",
    pages: "Pages",
    connect: "Connect",
  },
  notFound: {
    title: "This page doesn't exist.",
    body: "The link is outdated or the address contains a typo.",
    cta: "Go to homepage",
  },
};

export default en;

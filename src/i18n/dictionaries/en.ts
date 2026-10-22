import type { Dictionary } from "./de";

/**
 * UI copy, English. Headlines, eyebrows and buttons are identical to the German site;
 * body copy is translated from Nimalan's German text. Have a native speaker proofread before launch.
 */
const en: Dictionary = {
  meta: {
    siteName: "nimbaland.studio",
    defaultTitle: "nimbaland.studio — Creative Direction for real change",
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
    eyebrow: "nimbaland.studio / Düsseldorf",
    titleLines: ["You have something good.", "Let's make it"],
    titleAccent: "seen",
    statement: "",
    intro:
      "I'm Nimba – creative director and founder of nimbaland.studio. I help companies, practices and founders shape what they offer so people understand it, feel it and recognise it. My focus: AI Visual Engineering – AI-driven visual worlds, connected with brand and website.",
    tagline: "",
    location: ["Based", "in", "Düsseldorf"],
    recentWork: "Recent Work",
    primaryCta: "See the Work",
    secondaryCta: "Tell Me About Your Project",
  },
  recognition: {
    eyebrow: "Sound Familiar? / 01",
    title: "Sound familiar?",
    intro: "Most projects don't start with a brief, but with a feeling: there's more in this.",
    proof: "How I solved it",
    outro: "Here's what that looks like in six projects.",
  },
  work: {
    eyebrow: "Work, Up Close / 02",
    sectionTitle: "Work, up close.",
    sectionIntro: [
      "Six projects – each with the question at the start, the idea behind it and the decision that made the difference.",
    ],
    allWork: "All Projects",
    viewProject: "View Case Study",
    challenge: "The question",
    idea: "The idea",
    decision: "The decision",
    moreTitle: "Curious for more?",
    moreBody: "The archive has every project – from packaging and editorial to an app concept.",
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
    eyebrow: "What I Do / 03",
    sectionTitle: "Where I can help.",
    intro: "You decide what you need. I can support single steps or the whole project – one point of contact from the first question to the finished design.",
    introMore: "",
    processTitle: "How I work",
    exampleLabel: "Project example",
    focusLabel: "Main Focus",
    ctaText: "Want to know which of this fits your project?",
    cta: "Start a Project",
    process: [
      { title: "Understand", body: "Market, audience and what sets you apart." },
      { title: "Sharpen", body: "Positioning, core idea and tone of voice." },
      { title: "Design", body: "Identity, imagery and interfaces." },
      { title: "Deliver", body: "Rollout, website, campaign – down to the detail." },
    ],
  },
  marquee: {
    label: "Start a project – write to me",
    items: ["Got something good?", "Let's make it seen", "AI Visual Engineering", "Start a Project", "Brand · Web · Visuals"],
  },
  aboutPreview: {
    eyebrow: "The Person Behind It / 04",
    sectionTitle: "Hi, I'm Nimba.",
    lead: "I don't believe in design by formula.",
    body: [
      "For more than ten years I've been designing brands, campaigns and websites – as brand & design manager at the Kratzert Group, as senior art director at Colliers International, as a designer at Savills, as art director for Bosch and Würth, and since 2018 with my own studio.",
      "Art, fashion and visual culture shape how I see. I use generative AI to make ideas visible earlier and explore more directions. What fits your brand in the end, we decide together – not the machine.",
    ],
    facts: [
      { value: "10+", label: "Years of design & art direction" },
      { value: "66", label: "Clients since 2018" },
      { value: "AI", label: "Certified AI visual engineer" },
    ],
    contactCta: "Let's Talk",
    cta: "More About Me",
  },
  contactCta: {
    eyebrow: "Let's Talk / 05",
    title: "Tell me what you're working on.",
    body: "You don't need a finished brief. A few sentences are enough: what it's about, where you are right now, and whether there's a timeline.",
    prompt: "",
    stepsTitle: "What happens next",
    steps: [
      "You write to me – via the form or by email.",
      "I read every message myself and reply personally.",
      "In a first conversation we clarify goals, scope and timing.",
    ],
    button: "Start a Conversation",
    availability: "Düsseldorf, Germany · Available for selected projects and collaborations.",
  },

  about: {
    pageTitle: "Behind the ideas.",
    name: "Nimalan Suntharalingam",
    role: "Independent Creative Director / Brand & Design / AI Visual Engineering",
    intro: "I'm Nimalan – most people call me Nimba. Creative director, designer and founder of nimbaland.studio.",
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
      messagePlaceholder: "What is it about? Where are you right now? Is there a timeline?",
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

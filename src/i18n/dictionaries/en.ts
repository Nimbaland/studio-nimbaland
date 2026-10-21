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
      "I'm Nimalan [ Nimba ] Suntharalingam – an independent creative director and brand designer from Düsseldorf. With Studio.Nimbaland, I bring strategy, identity and digital design together into brands people recognise before they see the logo.",
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
      "Every project starts with a question. What should change? How can design make a real difference?",
      "Here you'll find selected work across branding, creative direction and digital design — from new brand identities to digital experiences.",
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
    intro: "I build brands not just for the moment, but with a clear view of their future.",
    introMore: "Strategy sets the direction, design makes it visible. That's why every project starts by asking what a brand stands for — and only ends when you can feel it on every channel.",
    processTitle: "How I work",
    exampleLabel: "Project example",
    process: [
      { title: "Understand", body: "Listen, analyse, frame: market, audience, competition and what truly sets you apart." },
      { title: "Sharpen", body: "Positioning, core idea and tone of voice — a clear foundation for every decision that follows." },
      { title: "Design", body: "Identity, imagery and interfaces that make the idea visible — bold, precise and recognisable." },
      { title: "Deliver", body: "From rollout to website, campaign and AI-assisted workflows — with an eye for every detail." },
    ],
  },
  aboutPreview: {
    eyebrow: "The Person Behind the Studio / 03",
    sectionTitle: "Independent mind. Multidisciplinary approach.",
    lead: "I don't believe in design by formula.",
    body: [
      "My path has taken me through different industries, brands and creative disciplines. Today I combine more than ten years of experience in design and art direction with new possibilities from UX/UI and generative AI.",
      "Studio.Nimbaland is my independent creative practice. It's where ideas take shape that go beyond a beautiful surface.",
    ],
    cta: "More About Me",
  },
  contactCta: {
    eyebrow: "Contact / 04",
    title: "Have something in mind? Let's make it matter.",
    body: "A new brand. A rebrand. A digital product. Or an idea that hasn't found its form yet.",
    prompt: "Tell me about it.",
    button: "Start a Conversation",
    availability: "Düsseldorf, Germany · Available for selected projects and collaborations.",
  },

  about: {
    pageTitle: "Behind the ideas.",
    name: "Nimalan Suntharalingam",
    role: "Independent Creative Director / Brand & Design / AI Visual Engineering",
    intro: "I'm Nimalan – most people call me Nimba. Creative director, designer and founder of Studio.Nimbaland.",
    body: [
      "For me, good design starts with questions: What makes a brand what it is? What story does it tell? And what should stay with people?",
      "For more than ten years I've been turning questions like these into visual concepts and real-world applications. My background is in communication design, and my experience ranges from brand development and art direction to corporate design, websites and digital user experiences.",
      "I've worked with companies and people across many industries, including real estate. At Kratzert Gruppe I evolved the brand across digital and physical touchpoints – with the aim of making it clear and recognisable everywhere.",
      "With Studio.Nimbaland I combine this experience with my own creative stance. AI visual engineering widens my creative scope: I can make ideas visible earlier, develop new visual worlds and test different directions. What guides me is still the question of which design fits the brand and tells its story convincingly.",
    ],
    drivesTitle: "What drives me?",
    drivesBody: "Curiosity. Independence. And the ambition not simply to design the next thing, but to create something distinct.",
    studioNote:
      "That's why Studio.Nimbaland isn't a studio with an interchangeable signature. It's the combination of my experience, my perspective and my passion for good ideas.",
    beyondTitle: "Beyond the screen.",
    beyondBody: [
      "Alongside my work as a designer, I engage with art, fashion and visual culture. These influences shape my perspective and mean I don't think about design within a single discipline.",
      "I work independently, think across disciplines and value working directly with people who want to move something forward.",
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
      "Strong brands emerge when strategy, design and execution are thought through together.",
      "With Studio.Nimbaland, I support projects from the first question to the finished design. Depending on the challenge: strategically, conceptually or hands-on in execution.",
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
      "Whether you want to build a new brand, take an existing one further or bring a digital idea to life — I look forward to hearing from you.",
      "Tell me what you're working on and what you want to achieve.",
    ],
    formTitle: "A good conversation is a good start.",
    meta: ["Düsseldorf, Germany", "Independent Creative Studio", "Brand / Digital / AI"],
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
    draftNotice: "Placeholder: this legal text must be filled with verified, real information before publication.",
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

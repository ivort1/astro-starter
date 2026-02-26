// ─── CONTACT INFO ───────────────────────────────────────────────────────
export const SITE = {
  name: "Golden Coast Digital",
  phone: "000-000-0000",            // TODO: replace
  phoneFmt: "(000) 000-0000",       // TODO: replace
  phoneTel: "tel:+10000000000",     // TODO: replace
  email: "hello@goldencoastdigital.com", // TODO: replace
  emailHref: "mailto:hello@goldencoastdigital.com",
  address: "Southern California",   // TODO: replace with city
  tagline: "Websites for Small Businesses",
  description:
    "Golden Coast Digital builds fast, modern, SEO-optimized websites for small businesses — $200/month, no upfront cost, no contracts after year one.",
};

// ─── NAV LINKS ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",     href: "/gcd" },
  { label: "Services", href: "/gcd/services" },
  { label: "Our Work", href: "/gcd/work" },
  { label: "Contact",  href: "/gcd/contact" },
];

// ─── WHAT WE OFFER (short list for home page) ───────────────────────────
export const HOME_SERVICES = [
  {
    title: "Custom Website Design",
    desc: "We don't use WordPress, Wix, SquareSpace, or any other drag-and-drop builder. Every site is built from scratch to match your brand, impress visitors, and convert leads.",
    icon: "design",
  },
  {
    title: "On-Page SEO",
    desc: "Keyword research, meta tags, structured data, and Google Business profile optimization — all included.",
    icon: "seo",
  },
  {
    title: "Hosting & Maintenance",
    desc: "Your site is hosted by us. We handle updates, edits, and uptime — forever.",
    icon: "hosting",
  },
  {
    title: "Unlimited Edits",
    desc: "Need to change your hours, swap a photo, or add a new service? Text us. Done the same day.",
    icon: "edits",
  },
  {
    title: "Mobile-First",
    desc: "Over 60% of searches are on mobile. Every site we build looks and performs flawlessly on any device.",
    icon: "mobile",
  },
  {
    title: "Blazing Fast",
    desc: "Built with vanilla HTML, CSS, and JavaScript, our sites load in under a second. Google loves fast sites — and so do your customers.",
    icon: "speed",
  },
];

// ─── ALL SERVICES (expanded for services page) ──────────────────────────
export const ALL_SERVICES = [
  {
    title: "Website Design & Development",
    desc: "Custom-coded websites built with HTML, CSS, and JavaScript. No page builders, no bloated plugins — just clean, fast code that ranks and converts.",
    featured: true,
  },
  {
    title: "On-Page SEO",
    desc: "Every page ships with proper heading hierarchy, meta descriptions, Open Graph tags, structured data (Schema.org), and a sitemap.",
    featured: true,
  },
  {
    title: "Google Business Profile Optimization",
    desc: "We set up and optimize your Google Business Profile so you show up in local search and map results where customers are already looking.",
    featured: true,
  },
  {
    title: "Hosting & Uptime",
    desc: "Hosted on Netlify's global edge network — 99.99% uptime, automatic HTTPS, and instant worldwide delivery.",
    featured: true,
  },
  {
    title: "Domain Connection",
    desc: "We'll connect your existing domain or help you register a new one. DNS setup is on us.",
    featured: true,
  },
  {
    title: "Unlimited Edits & Maintenance",
    desc: "Prices change. New services get added. Photos get updated. We make every edit same-day — no tickets, no hourly fees.",
    featured: true,
  },
  {
    title: "Multi-Language Support",
    desc: "Need your site in Spanish or another language? We build bilingual sites for clients serving diverse communities. Add-on pricing applies.",
    featured: false,
  },
  {
    title: "Custom Logo Design",
    desc: "No logo yet? We design clean, professional logos that look great on your website, business cards, trucks, and uniforms.",
    featured: false,
  },
  {
    title: "Copywriting",
    desc: "Struggling to put it into words? We write compelling website copy that tells your story, builds trust, and drives calls.",
    featured: false,
  },
  {
    title: "Dedicated SEO Campaigns",
    desc: "Beyond on-page SEO — ongoing keyword targeting, content strategy, and backlink building to climb Google rankings month over month.",
    featured: false,
  },
];

// ─── PRICING ────────────────────────────────────────────────────────────
export const PRICING = {
  price: "$200",
  period: "/month",
  upfront: "$0 down",
  commitment: "12-month minimum, then month-to-month",
  guarantee: "30-day money-back guarantee",
  included: [
    "Custom design & development",
    "Up to 5 pages",
    "Hosting is included",
    "Domain management",
    "On-page SEO",
    "Google Business profile optimization",
    "Unlimited edits & maintenance",
    "SSL certificate (HTTPS)",
    "Mobile-first, responsive design",
  ],
  addons: [
    { label: "Additional pages",         price: "$99/page" },
    { label: "Custom logo design",        price: "$200" },
    { label: "Copywriting",               price: "Contact us" },
    { label: "Dedicated SEO campaign",    price: "Contact us" },
    { label: "Blog", price: "Contact us" },
    { label: "Multi-language (Spanish+)", price: "Contact us" },
  ],
};

// ─── FAQs ────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "What does $200/month actually include?",
    a: "Everything you need to have a professional website: custom design and development, up to 5 pages, hosting, domain connection, on-page SEO, Google Business profile optimization, and unlimited edits. There are no hidden fees.",
  },
  {
    q: "How long does it take to build the site?",
    a: "From consultation to launch, our typical turnaround time is 3-6 weeks. This timeline includes design, development, testing, and revisions. The speed of completion largely depends on how quickly we receive your content, feedback, and approval."
  },
  {
    q: "Do I own the website?",
    a: "You retain ownership of your domain, images, and assets provided to you. However, the website code is licensed for use only during an active subscription. If you cancel, access to the code will be revoked, but we will transfer the domain to you upon request."
  },
  {
    q: "What if I'm not happy with the design?",
    a: "We offer a 30-day money-back guarantee. If we can't deliver something you love in the first 30 days, you get a full refund — no questions asked.",
  },
  {
    q: "Why do you build custom-coded websites instead of using WordPress or drag-and-drop builders?",
    a: "We create custom-coded websites using HTML, CSS, and vanilla JavaScript to ensure superior performance, security, and SEO. Unlike WordPress or other page builders, our sites load faster, are easier to maintain, and have fewer security risks. This tailored approach also allows us to craft unique, lightweight, and high-performing websites specific to your brand."
  },
  {
    q: "Do you only work with contractors?",
    a: "Contractors are our specialty, but we work with any local service business — landscapers, cleaners, salons, auto shops, and more. If you rely on local customers finding you online, we can help.",
  },
  {
    q: "Is there a minimum contract length for the monthly website subscription?",
    a:"Yes, the monthly website subscription has a 12-month minimum commitment. After the first year, it switches to a month-to-month plan that can be canceled anytime without penalties."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. If you already have a site that's slow, outdated, or not converting, we'll rebuild it from the ground up. Same pricing applies.",
  },
];

// ─── SERVICE OPTIONS (for contact form) ─────────────────────────────────
export const SERVICE_OPTIONS = [
  "New website",
  "Website redesign",
  "SEO campaign",
  "Google Business profile",
  "Logo design",
  "Copywriting",
  "Other",
];

// ─── PORTFOLIO / OUR WORK ───────────────────────────────────────────────
// Replace image with a path to a screenshot once available: e.g. "/images/harding.jpg"
// accentColor sets the card's top border and tag color for visual variety.
export const PORTFOLIO = [
  {
    client: "Harding Construction",
    type: "General Contractor",
    location: "Upland, CA",
    url: "https://hardingconstruction.com",   // TODO: replace with live URL
    description: "5-page site for a family-owned kitchen & bathroom remodeling contractor serving the Inland Empire.",
    tags: ["Custom Design", "On-Page SEO", "Google Business"],
    result: "Ranking page 1 for local remodeling keywords",
    image: "",   // TODO: add screenshot path
    accentColor: "#D95030",
  },
  {
    client: "Client Name",
    type: "Roofing Contractor",
    location: "City, CA",
    url: "#",
    description: "Placeholder — replace with real client details once a project is live.",
    tags: ["Custom Design", "On-Page SEO", "Unlimited Edits"],
    result: "Placeholder result",
    image: "",
    accentColor: "#2DD4BF",
  },
  {
    client: "Client Name",
    type: "HVAC Company",
    location: "City, CA",
    url: "#",
    description: "Placeholder — replace with real client details once a project is live.",
    tags: ["Custom Design", "Google Business", "Copywriting"],
    result: "Placeholder result",
    image: "",
    accentColor: "#60A5FA",
  },
];

// ─── WHY GCD / VALUE PROPS ───────────────────────────────────────────────
export const VALUE_PROPS = [
  {
    title: "No Upfront Cost",
    desc: "Zero down. Start with a professional website immediately.",
  },
  {
    title: "30-Day Money-Back Guarantee",
    desc: "If you're not thrilled with the result in the first 30 days, we cancel the subscription — simple as that.",
  },
  {
    title: "Built for Speed",
    desc: "Static sites load in under a second. Google rewards fast websites with higher rankings.",
  },
  {
    title: "Truly Unlimited Edits",
    desc: "No hourly billing or additional fees. Text us a change and it's live same day.",
  },
];

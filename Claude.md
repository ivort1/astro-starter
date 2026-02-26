# Golden Coast Digital - Web Development Agency

## Business Context

Web development agency targeting small businesses, primarily contractors (general construction, concrete, roofing, windows, kitchens, bathrooms, power washing, HVAC, etc.). Static websites only, no WordPress/Wix/Squarespace.

### Pricing
- $200/month, $0 down
- 12-month minimum, then month-to-month
- 30-day money-back guarantee

### Included
- Custom design and development
- Up to 5 pages (Home, Services, About, Gallery, FAQs, Contact)
- Hosting (Netlify)
- Domain connection
- On-page SEO
- Google Business profile optimization
- Unlimited edits and maintenance

### Add-ons
- Additional pages: $99/page
- Custom logo: $200
- Copywriting: varies
- Dedicated SEO: varies
- Multi-language (Spanish, etc.): varies

---

## Technical Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4
- **Hosting:** Netlify (single account, all clients)
- **Repos:** GitHub (one repo per client, cloned from `astro-starter` template)
- **Forms:** Netlify Forms
- **Images:** Astro Image component, locally hosted in /src/assets/
- **Fonts:** Self-hosted (Poppins, Garamond, more added over time)
- **Analytics:** None (avoid PageSpeed impact)

---

## Architecture

### Core Principle: Reusability

Everything must be modular and reusable across clients:
```
Components (atoms) → Sections (molecules) → Pages (organisms)
```

### File Structure
```
astro-starter/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       └── Icon.astro
│   ├── sections/
│   │   ├── nav/
│   │   │   ├── Nav1.astro
│   │   │   └── Nav2.astro
│   │   ├── hero/
│   │   │   ├── HeroWithForm.astro
│   │   │   └── HeroSimple.astro
│   │   ├── services/
│   │   ├── about/
│   │   ├── gallery/
│   │   ├── testimonials/
│   │   ├── faq/
│   │   ├── cta/
│   │   └── footer/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── gallery.astro
│   │   ├── faq.astro
│   │   └── contact.astro
│   ├── data/
│   │   └── site.en.ts
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── astro.config.mjs
├── package.json
└── README.md
```

### Central Data Store

All client-specific content lives in `/src/data/site.en.ts`. Future languages: `site.es.ts`, etc.

Updating phone number, business name, services, etc. in this file updates the entire site automatically.

### Theming

All theme variables in `/src/styles/global.css` using Tailwind 4's @theme directive:

- Primary color (orange CTAs by default)
- Neutral colors
- Font families

Changing theme = updating global.css variables. That's it.

---

## Default Theme

Modern, minimal, clean:
- Background: White
- Text: Black/neutral grays
- CTAs only: Orange (primary-500)
- Fonts: Poppins (body), Garamond (headings) - self-hosted

---

## New Client Workflow

1. Create new repo from `astro-starter` template on GitHub
2. Clone locally
3. Update `/src/data/site.en.ts` with client info
4. Update `/src/styles/global.css` if custom colors needed
5. Add client images to `/src/assets/images/`
6. Remove unused pages/sections if needed
7. Deploy to Netlify
8. Connect client domain

---

## Code Standards

1. **Reusability first** - Every component/section must work across clients
2. **Data-driven** - Never hardcode business info, always reference site.en.ts
3. **Mobile-first** - All designs work on phones first
4. **Self-contained** - No external CDNs for fonts, icons, etc.
5. **Complete code** - No placeholders like "// rest of code here"
6. **More is better** - Include more fields/options than needed; easier to delete than add
7. **Tailwind utilities** - Avoid custom CSS unless absolutely necessary
8. **Semantic HTML** - Proper accessibility attributes
9. **SVG icons inline** - Use currentColor for color control

---

## When Helping, Claude Should:

1. Always reference site.en.ts for any business content
2. Match existing code patterns and file structure
3. Provide complete, working code
4. Think about reusability across different contractor types
5. Keep performance in mind (no bloat, optimize images)
6. Include all reasonable fields in data structures (can delete later)
7. Use Tailwind 4 syntax and Astro 5 patterns
8. Self-host everything (fonts, icons, images)
9. Do NOT JUST AGREE WITH ME. If I am wrong, correct me or make a better suggestion.
10. Always ask clarifying questions if need be.
11. Recommend the most efficient and production-grade solution.
# CLAUDE.md — Blue Mountain Travel Center Website

This file is the single source of project context for any Claude Code session working in this repo. Update it after every meaningful change.

---

## What this project is

A marketing / info website for **Blue Mountain Travel Center LLC**, a full-service truck stop / highway travel center in the USA. The site advertises the center and helps drivers find services, hours, and location.

- **No online booking** — info site only.
- **Audience:** truck drivers, RV travelers, road-trippers, fleet managers.
- **Primary goals:** phone calls, walk-ins, local-search ranking for "diesel near me" / "[city] truck stop".

---

## Business facts (to be confirmed by owner)

> The owner shared a Google Business listing link. We extracted the LLC name but the full listing details (address, hours, fuel brands) need owner confirmation before launch. All business facts in code currently live in `lib/site-config.ts` and are marked `TODO` until confirmed.

| Field | Best-known value | Status |
|---|---|---|
| Business name | Blue Mountain Travel Center LLC | Confirmed (from Google share link) |
| Address | TBD | **Needs owner confirmation** |
| City / State / ZIP | TBD (likely PA based on similarly-named entities) | **Needs owner confirmation** |
| Phone | TBD | **Needs owner confirmation** |
| Email | TBD | **Needs owner confirmation** |
| Hours | TBD — likely 24/7 for a truck stop | **Needs owner confirmation** |
| Services offered | Fuel (diesel + gas), Food, Showers / Laundry / Driver Lounge, Truck Parking & Overnight Stay | Confirmed (from owner during brainstorming) |

---

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** components
- **lucide-react** icons
- **react-hook-form + zod** for forms
- **Resend** (via Server Action) for contact email, with `mailto:` fallback
- **Vercel** hosting (Fluid Compute, Node 24 LTS)
- **vercel.ts** for project config

---

## Repo layout

```
/
├── CLAUDE.md                # this file — project context
├── docs/                    # one md per feature; update whenever the feature changes
│   ├── 01-overview.md
│   ├── 02-home-page.md
│   ├── 03-about-page.md
│   ├── 04-services-page.md
│   ├── 05-amenities-gallery.md
│   ├── 06-contact-page.md
│   ├── 07-header-navigation.md
│   ├── 08-footer.md
│   ├── 09-contact-form.md
│   ├── 10-site-config.md
│   ├── 11-seo-structured-data.md
│   ├── 12-deployment.md
│   └── 13-content-checklist.md
├── app/                     # Next.js App Router pages + layout
├── components/              # UI components (layout, sections, ui)
├── lib/                     # site-config, services, amenities, testimonials, utils
├── public/                  # logo, images, favicon
├── vercel.ts                # Vercel project config
└── package.json
```

---

## Working with this project

When you make changes:

1. **Update the relevant `docs/NN-*.md`** with what changed and why.
2. **Update this CLAUDE.md** if you change tech stack, structure, or business facts.
3. **Run `npm run build` and `npm run lint`** before declaring a task done.
4. **Never invent business details** — leave `TODO: confirm with owner` markers in `lib/site-config.ts` until the owner confirms.

---

## Useful commands

```bash
npm install         # install deps
npm run dev         # local dev server at http://localhost:3000
npm run build       # production build
npm run lint        # ESLint
npm start           # serve production build locally
```

---

## Change log (most recent first)

- **2026-05-21** — Cinematic motion pass:
  - Added `motion` (Framer Motion) + `lenis` (smooth scroll)
  - New `components/motion/` primitives: `Reveal`, `StaggerGroup`/`StaggerItem`, `AnimatedNumber`, `Parallax`, `SmoothScroll`, `Marquee`
  - New `components/cinematic-hero-bg.tsx` — animated aurora + diagonal light streaks + film grain + optional `<video>` slot at `/videos/hero.mp4`
  - New section `components/sections/marquee-strip.tsx` — looping ticker between Hero and ServicesStrip
  - Every home + inner section now uses scroll-triggered reveals; cards have hover lift + glow; hero stats count up; CTAs glow on hover
  - All animations respect `prefers-reduced-motion`
  - See [docs/14-motion-cinematics.md](docs/14-motion-cinematics.md)
- **2026-05-11** — Initial scaffold complete:
  - Next.js 16.2.6 + React 19.2.4 + Tailwind v4 + TypeScript
  - shadcn/ui (base-nova preset, @base-ui/react primitives) — button, card, dialog, input, label, select, separator, sheet, textarea. Custom `asChild` support added to Button via `@radix-ui/react-slot`.
  - Foundation: `lib/site-config.ts`, `lib/services.ts`, `lib/amenities.ts`, `lib/testimonials.ts`, `lib/contact-schema.ts`, `lib/nav.ts`
  - Layout: `app/layout.tsx`, `components/layout/site-header.tsx`, `components/layout/site-footer.tsx`, `components/structured-data.tsx`
  - Home page with all 9 sections in `app/page.tsx`
  - Inner pages: `/about`, `/services`, `/amenities`, `/contact`
  - Contact form: client component + Server Action with Resend (or friendly fallback when not configured)
  - SEO: `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, per-page metadata, JSON-LD LocalBusiness/TruckStop
  - Deployment: `vercel.ts`, `.env.local.example`
  - `npm run build` passes — all 9 routes prerendered as static content
- **2026-05-11** — Initial project plan approved. See `docs/` for per-feature designs.

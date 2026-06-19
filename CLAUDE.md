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
| Business name | Blue Mountain Travel Center LLC | Confirmed (Google Business listing) |
| Street | 511 PA-61 S | Confirmed (Google Maps + GasBuddy 2026-05-21) |
| City / State / ZIP | Schuylkill Haven, PA 17972 | Confirmed |
| Coordinates | 40.6448189, -76.1412458 | Confirmed (Google Maps share link) |
| Highway access | I-81 Exit 116 (PA-901) → PA-61 South | Confirmed by geocoding |
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

- **2026-05-21** — Marathon brand retheme:
  - Theme moved from amber/gold to Marathon-aligned **blue + red + white** (primary blue ≈ Tailwind blue-600 / Marathon #003DA5; accent red for the OG icon border; rating stars stay yellow because that's the universal Google convention)
  - Bulk sed swap of every `amber-*` Tailwind class to `blue-*` equivalents across 20 files (sections, pages, layout, motion components)
  - Cinematic CSS in `app/globals.css` retuned: aurora now blends Marathon blue, brand blue, and a hint of red; light streaks shifted to near-white (modern LED headlight feel) with a faint blue glow; hover-lift shadow uses Marathon blue
  - Hero/CTA buttons `bg-amber-400 text-slate-950` → `bg-blue-600 text-white` with blue glow shadow on hover
  - `app/opengraph-image.tsx` re-themed: blue logo chip with a thin Marathon-red border on dark gradient
  - Build clean; all 9 routes still prerendered as static; no `amber-*` or `rgba(251,191,36*` references remain
- **2026-05-21** — Real photos + verified business info:
  - 8 owner-provided photos copied to `public/images/` with descriptive names
  - Hero now uses `hero-marathon-sky.jpg` as a backdrop layer (50% opacity behind aurora + streaks)
  - About preview shows `station-dusk.jpg` (replacing the placeholder panel)
  - Fuel service row shows `fuel-marathon-pumps.jpg`; Food/Store row shows `store-categories.jpg`
  - Location section now includes `roadside-sign-sunset.jpg` above the map
  - Gallery rebuilt with 8 real photos + 4 gradient icon tiles (for items we don't have photos of yet — showers, parking, coffee, WiFi)
  - `lib/services.ts` updated to reflect fuel brand is **Marathon** and store is **Eagle Mart**; added `hasPhoto: boolean` flag so service rows branch between `<Image>` and the gradient placeholder cleanly
  - Phone confirmed: (570) 968-4037 — `tel:` link now reaches the real line
  - JSON-LD schema adds `aggregateRating` (5.0★ on Google, 10 reviews), `contactPoint`, and `sameAs` for the Google Business listing
  - New `<GoogleRatingBadge />` component placed in Hero and Testimonials
- **2026-05-21** — Confirmed location:
  - Updated `lib/site-config.ts` with the real address: 511 PA-61 S, Schuylkill Haven, PA 17972
  - Coords: 40.6448189, -76.1412458 (from owner's Google Maps share link)
  - Highway: I-81 Exit 116 (PA-901) → PA-61 South
  - `googleMapsEmbedSrc()` now uses coordinates directly with a labeled pin (more accurate than a name+address search)
  - JSON-LD `LocalBusiness` schema auto-picks up new coords + address
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

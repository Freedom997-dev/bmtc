# 02 — Home Page

**Route:** `/`
**File:** `app/page.tsx`
**Status:** planned

## Goal

Communicate in five seconds: *what we offer, where we are, how to reach us.* Give a clear path to call or get directions.

## Sections (in order)

1. **Hero** — `components/sections/hero.tsx`
   Full-width facility photo, H1 ("Your Highway Home — 24/7 Diesel, Food, Showers & Parking"), location pill, CTAs: **Call Now** (`tel:`) and **Get Directions** (Google Maps deep link).
   Backdrop photo is `public/images/hero-marathon-plaza.webp` (Marathon canopy + storefront), passed to `CinematicHeroBg` via its `photoSrc` prop.

2. **Quick services strip** — `components/sections/services-strip.tsx`
   Four icon cards: Fuel · Food · Showers · Parking. Reads from `lib/services.ts`.

3. **About preview** — `components/sections/about-preview.tsx`
   Short paragraph + photo, "Learn more →" link to `/about`.

4. **Services detail** — `components/sections/service-detail-row.tsx` (repeated)
   Alternating image-left/right rows for each of the four services with 2–3 bullets each.

5. **Amenities highlights** — `components/sections/amenities-grid.tsx`
   Grid of small icon cards: Free WiFi · ATM · Convenience Store · Driver Lounge · Laundry · Pet-friendly area · 24/7 Open. Reads from `lib/amenities.ts`.

6. **Why drivers choose us** — `components/sections/why-us.tsx`
   Three value props (e.g., "Spotless showers", "300+ truck spots", "Hot food till midnight").

7. **Location preview** — `components/sections/location-preview.tsx`
   Embedded Google Map + address + nearest exit. Uses `components/map-embed.tsx`.

8. **Testimonials** — `components/sections/testimonials.tsx`
   Three short driver quotes — Carousel on mobile, grid on desktop. Reads from `lib/testimonials.ts`.

9. **Footer CTA banner** — `components/sections/cta-banner.tsx`
   "Pulling in tonight? Call ahead." with phone number.

## Data dependencies

- `lib/site-config.ts` — name, tagline, address, phone, hours
- `lib/services.ts` — service cards copy
- `lib/amenities.ts` — amenity grid
- `lib/testimonials.ts` — driver quotes

## SEO

- `<title>` and `<description>` set in page-level `metadata`
- JSON-LD `LocalBusiness` schema injected from root layout
- Hero image has `priority` for fast LCP

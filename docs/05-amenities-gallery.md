# 05 — Amenities & Gallery Page

**Route:** `/amenities`
**File:** `app/amenities/page.tsx`
**Status:** planned

## Goal

Show off the facility visually and list every extra amenity that doesn't fit cleanly under the four main services.

## Sections

1. **Page hero** — H1 "Amenities & Gallery"
2. **Amenities grid** — Icon + label tiles for: Free WiFi · ATM · Convenience Store · Driver Lounge · Pet-friendly area · 24/7 Open · Well-lit/monitored lot · RVs welcome · Hot coffee 24/7 · CAT scales (if offered) · Truck wash (if offered) · Maintenance partner (if any)

Laundry and showers are **not available at this location** and were removed from the amenities list and gallery (2026-08-14).
3. **Photo gallery** — Responsive grid using `next/image`. Click/tap opens lightbox.
4. **CTA** — "Plan your stop" link to `/contact`

## Components

- `components/sections/amenities-grid.tsx` — reusable, also used on home
- `components/gallery.tsx` — gallery with lightbox

## Data dependencies

- `lib/amenities.ts`
- `public/images/gallery/` — all gallery photos (`gallery-01.jpg`, `gallery-02.jpg`, ...)

## Content needed from owner

- 10–20 photos of the facility (lot at night, pumps, restaurant, showers, lounge, store)
- Final list of amenities to highlight

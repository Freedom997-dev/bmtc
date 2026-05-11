# 08 — Footer

**File:** `components/layout/site-footer.tsx`
**Status:** planned

## Goal

Repeat the essentials at the bottom of every page so visitors never have to scroll back up to find contact info.

## Sections (three or four columns on desktop, stacked on mobile)

1. **Logo + tagline** + short description
2. **Quick links** — Home, About, Services, Amenities, Contact
3. **Visit us** — Full address, "Get Directions" button, hours table
4. **Reach us** — Phone (`tel:`), email (`mailto:`), social links (if provided)

Bottom row: copyright `© {year} Blue Mountain Travel Center LLC. All rights reserved.` and a Privacy / Terms link placeholder.

## Data dependencies

- `lib/site-config.ts` — everything

## Notes

- Server Component — no client interactivity needed
- `<address>` semantic element wraps the address block
- Year computed at render time via `new Date().getFullYear()`

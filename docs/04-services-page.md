# 04 — Services Page

**Route:** `/services`
**File:** `app/services/page.tsx`
**Status:** planned

## Goal

Give drivers a complete, scannable breakdown of every service the center offers. Each service has its own focused block.

## Sections

1. **Page hero** — H1 "Services" + tagline
2. **Fuel** — Diesel + gas details, DEF, propane (if offered), bays/lanes count, fleet card acceptance
3. **Food** — Restaurant name(s), cuisine, hours, convenience store / deli, coffee
4. **Showers, laundry & driver lounge** — Shower count, cleanliness commitment, laundry machines, WiFi, TVs
5. **Truck parking & overnight stay** — Number of spots, free vs. reserved, security/lighting, RV welcome
6. **Bottom CTA** — "Questions? Call us" with phone number

Each block: image on one side, copy + bullets on the other (alternating).

## Data dependencies

- `lib/services.ts` — full service descriptions, bullets, image paths

## Content needed from owner

- Fuel brand (Sunoco / Shell / Pilot / independent?)
- Fleet card / EFS accepted
- Restaurant names on-site
- Shower count + price (or "free with fuel purchase")
- Parking spot count, free vs. reserved
- Photos of each service area

# 06 — Contact Page

**Route:** `/contact`
**File:** `app/contact/page.tsx`
**Status:** planned

## Goal

Make it trivial to reach the center: call, get directions, or send a message.

## Sections

1. **Page hero** — H1 "Contact & Location"
2. **Two-column block**
   - Left: address (with `Get Directions` button), phone (`tel:` link), email (`mailto:`), hours table
   - Right: contact form (`components/contact-form.tsx`)
3. **Embedded Google Map** — Full-width map, prominent
4. **From the highway** — One paragraph with exit number, mile marker, on-ramp direction

## Components

- `components/map-embed.tsx` — embeds Google Maps iframe with the configured address
- `components/contact-form.tsx` — Client Component, react-hook-form + zod, submits to Server Action

## Server Action

- `app/actions/contact.ts` — validates with zod, sends email via Resend if `RESEND_API_KEY` is set, otherwise returns instructions to fall back to `mailto:`

## Data dependencies

- `lib/site-config.ts` — address, phone, email, hours, map coordinates

## Content needed from owner

- Confirmed mailing address
- Phone number(s) — main + after-hours if different
- Email for contact form recipient
- Exit / mile marker info
- (Optional) Resend API key for email delivery

# 07 — Header & Navigation

**File:** `components/layout/site-header.tsx`
**Status:** planned

## Goal

Persistent top navigation that adapts cleanly to mobile and keeps the "Call Now" action one tap away.

## Behavior

### Desktop (≥ lg)

- Logo on the left (links to `/`)
- Horizontal nav: Home · About · Services · Fuel Card · Amenities · Blog · Reviews · Contact
  - **Reviews** is an external link (`siteConfig.googleBusinessUrl`, opens in a new tab) — not a route on this site
- Right side: phone number + **Call Now** button (`tel:` link)
- Breakpoint moved from `md` to `lg` once the nav grew from 5 to 8 items, to avoid crowding at tablet widths

### Mobile / tablet (< lg)

- Logo on the left
- Hamburger button on the right
- Tapping the hamburger opens a **Sheet** (slide-out drawer) with the nav links and a large Call Now button
- A sticky bottom bar persists a `Call Now | Directions` action on every page

## Implementation notes

- Built with shadcn `Sheet`, `Button`, and `NavigationMenu` primitives
- Active route is highlighted using `usePathname()` from `next/navigation`
- Header is a Client Component (needs `useState` for the drawer) — keep the rest of the layout server-rendered

## Data dependencies

- `lib/site-config.ts` — name (for logo alt), phone

## Accessibility

- Logo `alt="Blue Mountain Travel Center home"`
- Hamburger button has `aria-label="Open navigation menu"`
- Drawer traps focus while open; `Esc` closes it (shadcn Sheet handles this)

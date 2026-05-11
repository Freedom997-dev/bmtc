# 12 — Deployment

**File:** `vercel.ts`
**Status:** planned

## Hosting

**Vercel** — Next.js native host. Fluid Compute (default) runs the Server Actions on Node.js 24 LTS in regional functions. No Edge runtime needed; nothing here is latency-critical to that degree.

## `vercel.ts` (replaces `vercel.json`)

```ts
import { routes, type VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  framework: "nextjs",
  buildCommand: "pnpm build",
  installCommand: "pnpm install --frozen-lockfile",
  headers: [
    routes.cacheControl("/images/(.*)", {
      public: true,
      maxAge: "1 year",
      immutable: true,
    }),
    routes.cacheControl("/_next/static/(.*)", {
      public: true,
      maxAge: "1 year",
      immutable: true,
    }),
  ],
};
```

## Environment variables

Set on Vercel (Production + Preview):

- `RESEND_API_KEY` — optional, enables real email delivery
- `CONTACT_TO_EMAIL` — recipient for contact form
- `CONTACT_FROM_EMAIL` — verified sender (must match a Resend domain)
- `NEXT_PUBLIC_SITE_URL` — production URL, used for canonical links and OG

Pull locally with the Vercel CLI:

```bash
vercel link
vercel env pull .env.local
```

## CI/CD

Vercel auto-deploys on `git push`:

- `main` → Production
- Any other branch / PR → Preview URL

## Pre-deploy checklist

- [ ] `lib/site-config.ts` has confirmed business facts (no `TODO:` markers)
- [ ] All hero / facility photos exist in `public/images/`
- [ ] Logo at `public/logo.svg`
- [ ] `pnpm build` succeeds locally
- [ ] `pnpm lint` passes
- [ ] Lighthouse: Performance ≥ 90, A11y ≥ 95, SEO ≥ 95
- [ ] `/sitemap.xml` and `/robots.txt` resolve
- [ ] Contact form delivers (test submission)
- [ ] Custom domain attached, HTTPS confirmed

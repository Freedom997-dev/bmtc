# 09 — Contact Form

**Files:**
- `components/contact-form.tsx` (Client Component)
- `app/actions/contact.ts` (Server Action)

**Status:** planned

## Goal

Let visitors send a message without needing a separate email client. Validate on the client AND server. Don't depend on a backend service unless one is configured.

## Form fields

- Name (required, 1–80 chars)
- Email (required, valid email format)
- Phone (optional, free-form)
- Subject (required, dropdown: General · Fuel / Fleet · Lodging / Parking · Lost & Found · Other)
- Message (required, 10–2000 chars)
- Honeypot field (`company_website`, hidden, must be empty — spam filter)

## Validation

`zod` schema in `lib/contact-schema.ts`, imported on BOTH client (via react-hook-form `zodResolver`) and server (revalidated inside the Server Action). Never trust client-side validation alone.

## Submission flow

1. Client validates with zod → if errors, render inline
2. Submit calls Server Action `submitContact(formData)`
3. Server Action re-validates with zod
4. If `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set → send email via Resend
5. Otherwise return `{ ok: false, fallbackTo: "mailto:..." }` and the UI shows a "Email us directly" button

## Success / error states

- Optimistic loading state while submitting (`useFormStatus` from `react-dom`)
- On success: show a success card replacing the form
- On error: keep form values, show error banner

## Env vars

- `RESEND_API_KEY` — Resend API key (optional)
- `CONTACT_TO_EMAIL` — recipient email (required if Resend is configured)
- `CONTACT_FROM_EMAIL` — defaults to `noreply@<domain>` (must be a verified sender in Resend)

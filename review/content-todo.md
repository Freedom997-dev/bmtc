# Business facts to confirm with the owner before launch

These are currently **live on the public site** even though `CLAUDE.md`
marks them unconfirmed. Pulled from `lib/site-config.ts` — cross-check with
the owner, then update that file and remove this list item.

| Field | Currently shown on site | CLAUDE.md status |
|---|---|---|
| Hours | "Open 24 hours" every day, footer + Google-indexable JSON-LD | TBD — likely 24/7, **not confirmed** |
| Email | `info@bluemountaintravelcenter.com`, clickable footer link + form fallback address | TBD, **not confirmed** |
| Street suffix | "511 PA-61" (no directional suffix) | Confirmed value has suffix: "511 PA-61 S" |

See [findings.md](findings.md) items #3, #4, #6 for exactly where each value
is used and why publishing a wrong value is worse than leaving it blank for
a "diesel near me" audience relying on the site to actually find the place
and reach someone.

# Site Review — 2026-08-11

Full-codebase review of the Blue Mountain Travel Center site: build health, code
quality, SEO/structured data, and content accuracy against `CLAUDE.md`. This
folder is a point-in-time audit (not a living feature doc like `docs/`) —
re-run it after major changes rather than editing these files in place.

## Scorecard

| Area | Status |
|---|---|
| `npm run build` | ✅ Clean — all 9 routes prerender static |
| `npm run lint` | ✅ Clean — 1 informational warning (React Compiler, harmless) |
| TypeScript | ✅ No errors |
| Visual bugs | ⚠️ 1 systemic bug — see [findings.md](findings.md) #1 |
| SEO / structured data | ⚠️ 1 broken image reference — see #2 |
| Content accuracy vs. `CLAUDE.md` | ⚠️ 2 unconfirmed facts published as real — see #3, #4 |
| Dependency audit | ⚠️ 17 `npm audit` findings (2 low/3 moderate/12 high) — not yet triaged |
| Accessibility basics | ✅ Semantic `<address>`, labeled form fields, alt text present, skip-worthy landmarks |

## Files in this folder

- **[findings.md](findings.md)** — every bug found, with file:line, root cause, and fix.
- **[content-todo.md](content-todo.md)** — business facts currently hard-coded as real but not actually confirmed by the owner (phone/email/hours), for follow-up.

## Top priority

The single highest-value fix is **#1 in findings.md** — a malformed Tailwind
arbitrary-value class (`rgba(37, 99, 235,...)` with a literal space) that
silently no-ops the blue/red glow and radial-gradient effects on **8 files**
across every inner page and several shared components. It doesn't throw an
error anywhere (build, lint, and TypeScript all pass), which is why it's
survived multiple change-log entries — worth a visual pass in the browser
after fixing to confirm the glows now render.

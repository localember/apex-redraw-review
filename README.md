# Apex redraw — design review preview

The **Apex static source** (`tools/static-build/designs/apex/` in the `localember` repo), frozen so
it has a link that outlives the local sandbox. `noindex, nofollow` on every page.

This is a **design review**, not a client preview: it is the redraw of the Apex Breakdance reference
build (`apex-solo`, localhost:8098), page by page, and each page is only here once every band on it
passes a property-level computed-style diff AND a behaviour diff against that reference.

## Nine archetypes

| | archetype | session |
| --- | --- | --- |
| [Home](./index.html) | home | 1–3 |
| [About](./about.html) | about | 4 |
| [Services](./services.html) | services index | 6 |
| [Conditions](./conditions.html) | conditions index | 7 |
| [Back pain](./back-pain.html) | condition single | 8 |
| [Chiropractic care](./chiropractic.html) | service single | 9 |
| [Contact](./contact.html) | **contact — native form, info card, map** | **10** |
| [Patient stories](./patient-stories.html) | **testimonials** | **10** |
| [Blog](./blog.html) | **blog index** | **10** |

## Two things on these pages are the REFERENCE's, not ours — and want your ruling

- **The contact form's input text is near-invisible.** It computes as `cloud` (#e2e8f0) on a white
  field, so anything typed into it is white-on-white. Reproduced faithfully because fidelity is what
  the gate measures; a one-line change once ruled.
- **Every blog post title renders as a dark navy pill button.** The reference builds the title as a
  Breakdance Button and never sets its colours, so it falls through to the default. It reads as an
  unstyled control where a headline belongs.

Both are filed in `designs/apex-PUNCHLIST.md`.

## Not here yet

- **New patient special** — scouted and fully measured, not built. Its four bands are described in
  the design's own `README.md`.
- **Practitioner** (`/dr-sarah-whitfield/`) and **legal** (`/privacy-policy/`) exist on the reference
  and have never been in a session brief.

## What is not real here

- **`preview-nav.js` is a preview-only shim, not part of the build.** The redraw's internal links are
  absolute (`/services/`, `/contact/`), which is right for a real site and wrong on a GitHub Pages
  project path. The shim points the nine built pages at each other and visibly disables every other
  link rather than letting a dead one look live. Nothing else differs from the build.
- **Forms do not submit** and the Google Maps embeds load from Google, same as on the real site.
- **Two service-card images 404 on the CDN** (`Red Light Therapy`, `Weight Loss`) — a filed registry
  defect, not a redraw bug.

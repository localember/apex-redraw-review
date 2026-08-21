# Apex redraw — design review preview

The **Apex static source** (`tools/static-build/designs/apex/` in the `localember` repo), frozen so
it has a link that outlives the local sandbox. `noindex, nofollow` on every page.

This is a **design review**, not a client preview: it is the redraw of the Apex Breakdance reference
build (`apex-solo`, localhost:8098), page by page, and each page is only here once every band on it
passes a property-level computed-style diff AND a behaviour diff against that reference.

## Six pages so far

| | archetype | session |
| --- | --- | --- |
| [Home](./index.html) | home | 1–3 |
| [About](./about.html) | about | 4 |
| [Services](./services.html) | services index | 6 |
| [Conditions](./conditions.html) | conditions index | 7 |
| [Back pain](./back-pain.html) | condition single | 8 |
| [Chiropractic care](./chiropractic.html) | **service single** | **9** |

## What is NOT real here

- **`preview-nav.js` is a preview-only shim, not part of the build.** The redraw's internal links are
  absolute (`/services/`, `/back-pain/`), which is right for a real site and wrong on a GitHub Pages
  project path. The shim points the six built pages at each other and visibly disables every other
  link rather than letting a dead one look live. Nothing else on these pages differs from the build.
- **Forms do not submit** and the Google Maps embed loads from Google, same as on the real site.
- **Two service-card images 404 on the CDN** (`Red Light Therapy`, `Weight Loss`) — a filed registry
  defect, not a redraw bug. See `designs/apex-PUNCHLIST.md`.

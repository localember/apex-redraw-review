# Apex redraw — design review preview

The **Apex static source** (`tools/static-build/designs/apex/` in the `localember` repo), frozen so
it has a link that outlives the local sandbox. `noindex, nofollow` on every page.

This is a **design review**, not a client preview: it is the redraw of the Apex Breakdance reference
build (`apex-solo`, localhost:8098), page by page, and each page is only here once every band on it
passes four checks against that reference — a property-level computed-style diff, a behaviour diff,
an icon-glyph comparison, and a role-coverage check that asks what the other three never looked at.

## Twelve archetypes — the set is COMPLETE against the reference

| | archetype | session |
| --- | --- | --- |
| [Home](./index.html) | home | 1–3 |
| [About](./about.html) | about | 4 |
| [Services](./services.html) | services index | 6 |
| [Conditions](./conditions.html) | conditions index | 7 |
| [Back pain](./back-pain.html) | condition single | 8 |
| [Chiropractic care](./chiropractic.html) | service single | 9 |
| [Contact](./contact.html) | contact — native form, info card, map | 10 |
| [Patient stories](./patient-stories.html) | testimonials | 10 |
| [Blog](./blog.html) | blog index | 10 |
| [New patient special](./new-patient-special.html) | **offer page — ember hero, included grid, booking** | **11** |
| [Dr. Sarah Whitfield](./dr-sarah-whitfield.html) | **practitioner** | **11** |
| [Privacy policy](./privacy-policy.html) | **legal (one of seven)** | **11** |

**Every page on the reference now has a redraw.** Nothing on `apex-solo` is unbuilt.

## The two things you ruled on are done

- **The contact form's input text now reads.** The reference paints it `cloud` (#e2e8f0) on a white
  field, so anything typed disappeared; it is the design's ink now, on both this page and the new
  patient special's booking form. Its placeholder keeps the reference's own grey.
- **Blog post titles are headings again.** They were rendering as Breakdance's default navy pill
  button, because the reference's emitter built the title as a Button and never set its colours.
  They now use the same Outfit/ink treatment as every other card title in the design, with the
  brand-colour hover the rest of the links use.

Both are written up in the design's `WAIVERS.md`, with you named as the reason.

**And one more that came out from under the first:** the reference's form inputs all carry
placeholder text and the redraw was emitting none — so with the invisible input colour, our contact
form was five empty boxes. Fixed. No automated check could have found it: a placeholder is an
attribute, and every gate we run compares computed styles.

## One thing on the practitioner page wants your eye

The "rest of the team" cards each link to that person's own page — **including the front-desk member,
who has no letters after their name.** That follows your 2026-08-07 ruling that every named staff
member gets a page. The reference predates it and shows no link on that card, so this is the one
place the redraw deliberately shows MORE than the thing it copies.

## One question left over from the reference

The new patient special's "What's Included" grid has six cards, and **the third has no heading** —
just the emoji and the body text, where the other five have a title. That is the reference's own
gap, not a transcription slip. It is reproduced as-is. If it should read something ("Digital
X-Rays"?), that is one line to add and it is your call, not ours to invent.

## What is not real here

- **`preview-nav.js` is a preview-only shim, not part of the build.** The redraw's internal links are
  absolute (`/services/`, `/contact/`), which is right for a real site and wrong on a GitHub Pages
  project path. The shim points the twelve built pages at each other and visibly disables every other
  link rather than letting a dead one look live. Nothing else differs from the build.
- **Forms do not submit** and the Google Maps embeds load from Google, same as on the real site.
- **Two service-card images 404 on the CDN** (`Red Light Therapy`, `Weight Loss`) — a filed registry
  defect, not a redraw bug.
- **Team photos are the fleet placeholder silhouette.** `apex-solo` is a demo record with no real
  headshots; a real client's own photos drop straight in.

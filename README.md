# Apex redraw — design review preview

The **Apex static source** (`tools/static-build/designs/apex/` in the `localember` repo), frozen so
it has a link that outlives the local sandbox. `noindex, nofollow` on every page.

Each page is only here once every band on it passes four checks against the Breakdance reference
build (`apex-solo`, localhost:8098) — a property-level computed-style diff, a behaviour diff, an
icon-glyph comparison, and a role-coverage check that asks what the other three never looked at.

## 55 pages — the navigation works now

**Your eye pass of 2026-08-22 is done.** The biggest change is that the preview is no longer twelve
pages with dead links: every service, condition, legal page and staff profile the site links to is
now built, so you can actually click through it.

| | |
| --- | --- |
| [Home](./index.html) · [About](./about.html) · [Contact](./contact.html) · [Patient stories](./patient-stories.html) · [Blog](./blog.html) | the core pages |
| [Services](./services.html) · [Conditions](./conditions.html) | the two archives — every card links to its page |
| [New patient special](./new-patient-special.html) | the offer page |
| [Dr. Sarah Whitfield](./dr-sarah-whitfield.html) · [Dr. Alan Reyes](./dr-alan-reyes.html) · [Marta Quinn](./marta-quinn.html) · [Jo Ellery](./jo-ellery.html) | all four staff profiles |
| [Chiropractic](./chiropractic.html) · [Back pain](./back-pain.html) · …and 33 more | every catalog page |
| [Privacy policy](./privacy-policy.html) · [Terms](./terms-of-service.html) · …and 5 more | all seven legal pages |

## What changed, item by item

1. **Condition and service cards link to their pages.** They always did in the build — the *preview*
   only had twelve pages, so the shim greyed out every link that pointed anywhere else. 43 more
   pages are built now and the links are live.
2. **The homepage review cards have gold five-star rows.** The reference has none, so this is a
   deliberate departure — the same one you ruled for the service page on 2026-08-21.
3. **All seven legal pages are wired and reachable** from the footer of every page.
4. **The two missing service images are in** (red light therapy, weight loss), plus two condition
   images that turned out to be missing the same way. One image is still broken and it is not ours
   to guess at — see below.
5. **The FAQ accordion clips its corners** when a panel is open. The reference does not; you ruled
   it should.
6. **CTA wording follows the record.** When a practice has an active special, the calls to action
   read the offer; with no offer they read generic booking wording. **This demo record has no
   offer, so the preview shows the generic wording** — the mechanism is what changed, not the words
   on this page.

## Two things want your eye

- **The step numbers on [prenatal](./prenatal.html) are invisible** — white on white. That is the
  reference's own defect, faithfully reproduced, and one line to fix the day you say so.
- **The prenatal hero has no picture.** The shared catalog names a file left over from an old build
  and it does not exist. Picking a replacement is a content call, so nothing was substituted.

## Still missing

**Blog post pages.** The three posts on [the blog index](./blog.html) are the only dead links left.
The reference has real pages for them and the redraw has never built that page type — so the
archetype set is one short of complete, which an earlier note got wrong.

## What is not real here

- **`preview-nav.js` is a preview-only shim, not part of the build.** The build's internal links are
  absolute (`/services/`), which is right for a real site and wrong on a GitHub Pages project path.
  The shim points the 55 built pages at each other and visibly disables anything else rather than
  letting a dead link look live. Nothing else differs from the build.
- **Forms do not submit** and the Google Maps embeds load from Google, same as on the real site.
- **Team photos are the fleet placeholder silhouette.** `apex-solo` is a demo record with no real
  headshots; a client's own photos drop straight in.

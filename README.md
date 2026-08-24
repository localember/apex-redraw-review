# Apex redraw — design review preview

The **Apex static source** (`tools/static-build/designs/apex/` in the `localember` repo), frozen so
it has a link that outlives the local sandbox. `noindex, nofollow` on every page.

Each page is only here once every band on it passes four checks against the Breakdance reference
build (`apex-solo`, localhost:8098) — a property-level computed-style diff, a behaviour diff, an
icon-glyph comparison, and a role-coverage check that asks what the other three never looked at.

## 58 pages — every link on the site works now

**The blog posts are built.** They were the only dead links left after your 08-24 eye pass; the
archetype set is genuinely complete now, checked by crawling the reference site's own navigation
rather than assumed.

| | |
| --- | --- |
| [Home](./index.html) · [About](./about.html) · [Contact](./contact.html) · [Patient stories](./patient-stories.html) · [Blog](./blog.html) | the core pages |
| [Services](./services.html) · [Conditions](./conditions.html) | the two archives — every card links to its page |
| [New patient special](./new-patient-special.html) | the offer page |
| [What to expect at your first visit](./what-to-expect-first-chiropractic-visit.html) · [Desk posture](./desk-posture-tips-prevent-back-pain.html) · [Five signs](./5-signs-you-need-to-see-a-chiropractor.html) | the three blog posts |
| [Dr. Sarah Whitfield](./dr-sarah-whitfield.html) · [Dr. Alan Reyes](./dr-alan-reyes.html) · [Marta Quinn](./marta-quinn.html) · [Jo Ellery](./jo-ellery.html) | all four staff profiles |
| [Chiropractic](./chiropractic.html) · [Back pain](./back-pain.html) · …and 33 more | every catalog page |
| [Privacy policy](./privacy-policy.html) · [Terms](./terms-of-service.html) · …and 5 more | all seven legal pages |

## What changed, item by item

1. **The three blog posts render**, sharing one new page type: a title band, the featured photo, the
   article body, a "Keep Reading" strip of the other two posts, the offer card and patient reviews.
2. **The blog titles on the index no longer look like navy pill buttons.** The same fix landed in
   the actual WordPress build this session too, so this is no longer a redraw-only fix.
3. **A FAQ-accordion hover no longer bleeds past its rounded corner**, on every catalog page —
   the harness could not see this property before this session; it can now.
4. **A credential badge on the team page was quietly correct and unverified** — now it's verified.

## What is not real here

- **`preview-nav.js` is a preview-only shim, not part of the build.** The build's internal links are
  absolute (`/services/`), which is right for a real site and wrong on a GitHub Pages project path.
  The shim points the 58 built pages at each other and visibly disables anything else rather than
  letting a dead link look live. Nothing else differs from the build.
- **Forms do not submit** and the Google Maps embeds load from Google, same as on the real site.
- **Team photos are the fleet placeholder silhouette.** `apex-solo` is a demo record with no real
  headshots; a client's own photos drop straight in.
- **The blog posts' related-reading strip correctly excludes the post you're reading.** The real
  WordPress build (`apex-solo` :8098) does not do this yet — a separate, filed bug in how it reads
  which post you're on. This preview shows the fleet's INTENDED behaviour, not the reference site's
  current one.

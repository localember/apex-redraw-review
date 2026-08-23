/* PREVIEW-ONLY SHIM — not part of the build, and deliberately not in design-system/apex/.
   The redraw's internal links are absolute (`/services/`, `/back-pain/`), which is correct for a
   real site and wrong on a GitHub Pages PROJECT site served from /apex-redraw-review/. Without
   this every nav click leaves the preview and 404s.
   It rewrites only the links whose target actually exists as a page here, and visibly marks the
   rest as unavailable rather than letting them look live — the same rule the inline bundler uses
   for a missing asset: never make an absence look like a design decision.
   GENERATED from the built page list, so it cannot drift from what was published. */
(function () {
  var PAGES = {
  "/": "index.html",
  "/about/": "about.html",
  "/accessibility-statement/": "accessibility-statement.html",
  "/acupuncture/": "acupuncture.html",
  "/anti-discrimination/": "anti-discrimination.html",
  "/arthritis/": "arthritis.html",
  "/auto-injury/": "auto-injury.html",
  "/back-pain/": "back-pain.html",
  "/blog/": "blog.html",
  "/carpal-tunnel/": "carpal-tunnel.html",
  "/chiropractic/": "chiropractic.html",
  "/conditions/": "conditions.html",
  "/contact/": "contact.html",
  "/decompression/": "decompression.html",
  "/disc-injury/": "disc-injury.html",
  "/dr-alan-reyes/": "dr-alan-reyes.html",
  "/dr-sarah-whitfield/": "dr-sarah-whitfield.html",
  "/extremity-pain/": "extremity-pain.html",
  "/functional-medicine/": "functional-medicine.html",
  "/good-faith-estimate/": "good-faith-estimate.html",
  "/headaches/": "headaches.html",
  "/healthcare-disclaimer/": "healthcare-disclaimer.html",
  "/hip-pain/": "hip-pain.html",
  "/hipaa-privacy-practices/": "hipaa-privacy-practices.html",
  "/irritable-bowel-syndrome/": "irritable-bowel-syndrome.html",
  "/jo-ellery/": "jo-ellery.html",
  "/knee-decompression/": "knee-decompression.html",
  "/knee-pain/": "knee-pain.html",
  "/laser-therapy/": "laser-therapy.html",
  "/marta-quinn/": "marta-quinn.html",
  "/massage-therapy/": "massage-therapy.html",
  "/neck-pain/": "neck-pain.html",
  "/neuropathy/": "neuropathy.html",
  "/new-patient-special/": "new-patient-special.html",
  "/nutrition/": "nutrition.html",
  "/patient-stories/": "patient-stories.html",
  "/pediatric/": "pediatric.html",
  "/plantar-fasciitis/": "plantar-fasciitis.html",
  "/pregnancy/": "pregnancy.html",
  "/prenatal/": "prenatal.html",
  "/privacy-policy/": "privacy-policy.html",
  "/red-light-therapy/": "red-light-therapy.html",
  "/sciatica/": "sciatica.html",
  "/scoliosis/": "scoliosis.html",
  "/services/": "services.html",
  "/shockwave/": "shockwave.html",
  "/shoulder-pain/": "shoulder-pain.html",
  "/sports-injury/": "sports-injury.html",
  "/terms-of-service/": "terms-of-service.html",
  "/thyroid/": "thyroid.html",
  "/vertigo/": "vertigo.html",
  "/weight-loss/": "weight-loss.html",
  "/wellness-care/": "wellness-care.html",
  "/whiplash/": "whiplash.html",
  "/work-injury/": "work-injury.html"
};
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="/"]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (PAGES[href]) { a.setAttribute('href', './' + PAGES[href]); return; }
      a.setAttribute('href', '#');
      a.setAttribute('title', 'Not part of this preview — ' + href + ' has no page in the redraw yet.');
      a.style.cursor = 'not-allowed';
      a.addEventListener('click', function (e) { e.preventDefault(); });
    });
  });
})();

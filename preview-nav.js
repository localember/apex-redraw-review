/* PREVIEW-ONLY SHIM — not part of the build, and deliberately not in design-system/apex/.
   The redraw's internal links are absolute (`/services/`, `/back-pain/`), which is correct for a
   real site and wrong on a GitHub Pages PROJECT site served from /apex-redraw-review/. Without
   this every nav click leaves the preview and 404s.
   It rewrites only the links whose target actually exists as a page here, and visibly marks the
   rest as unavailable rather than letting them look live — the same rule the inline bundler uses
   for a missing asset: never make an absence look like a design decision. */
(function () {
  var PAGES = { '/': 'index.html', '/about/': 'about.html', '/services/': 'services.html',
                '/conditions/': 'conditions.html', '/back-pain/': 'back-pain.html',
                '/chiropractic/': 'chiropractic.html', '/contact/': 'contact.html',
                '/patient-stories/': 'patient-stories.html', '/blog/': 'blog.html' };
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="/"]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (PAGES[href]) { a.setAttribute('href', './' + PAGES[href]); return; }
      a.setAttribute('href', '#');
      a.setAttribute('title', 'Not part of this preview — ' + href + ' is not one of the six pages built so far.');
      a.style.cursor = 'not-allowed';
      a.addEventListener('click', function (e) { e.preventDefault(); });
    });
  });
})();

/* Apex behaviour. One block, because it becomes one WPCodeBox snippet.
   FOUNDATION: the only behaviour the first three bands have is the header's
   scrolled state. The reveal/lift/float classes the Breakdance build carries
   (apx-reveal, apx-lift, apx-float) are band decoration and land with the bands
   that use them. */
(function () {
  var header = document.querySelector('.apx-header');
  if (!header) return;

  // The flip point is the hero's own top padding minus the tall bar: past it the
  // overlay has nothing dark left to sit on. Read once; it does not change.
  var TRIGGER = 40;
  var on = false;

  function update() {
    var should = window.scrollY > TRIGGER;
    if (should === on) return;      // never touch the DOM on a scroll that changed nothing
    on = should;
    header.classList.toggle('apx-header--scrolled', on);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });

  // ── scroll reveal ─────────────────────────────────────────────────────
  // Arm ONLY what starts below 90% of the viewport. Anything already on screen
  // is left alone, so nothing that the visitor can already see can flash.
  (function () {
    var els = [].slice.call(document.querySelectorAll('.apx-reveal'));
    if (!els.length) return;
    var vh = window.innerHeight || 800;
    var armed = els.filter(function (el) {
      return el.getBoundingClientRect().top >= vh * 0.9;
    });
    armed.forEach(function (el) { el.classList.add('apx-armed'); });
    if (!armed.length) return;

    var REVEAL_DELAY_MS = 400;
    function revealNow(el) { el.classList.add('apx-in'); }
    // No observer, or a document that cannot deliver callbacks: reveal everything
    // immediately rather than leaving armed elements at opacity 0 forever.
    if (!('IntersectionObserver' in window) || document.hidden) {
      armed.forEach(revealNow);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        setTimeout(function () { revealNow(entry.target); }, REVEAL_DELAY_MS);
        io.unobserve(entry.target);
      });
    // 🔴 DELIBERATE DEVIATION FROM THE REFERENCE, RULED BY JOHN (2026-08-20, supersedes the
    // 2026-08-19 rootMargin ruling below). Session 3's "-13%" fix moved WHERE the reveal
    // triggers, 5 percentage points of scroll later than the reference. Measured against a real
    // scroll it was invisible: -8% vs -13% is only 45-65px apart on a typical viewport, easily
    // covered in a single scroll gesture or trackpad flick, so it read as "unchanged" — which is
    // exactly what John reported. Tested two mechanisms side by side (an interactive comparison,
    // this session): a bigger rootMargin gap, and a plain time delay after the reference's own
    // -8% trigger. The delay is what reads as "later" reliably, because it plays out on a clock
    // rather than depending on scroll speed. Tuned live against the real homepage: 600ms felt
    // right in direction but slow, 400ms is the one John confirmed ("that feels good").
    // rootMargin restored to the reference's own -8% (unchanged, matches). See
    // tools/static-build/designs/apex/WAIVERS.md and HOUSE-STANDARDS.json (candidate entry
    // 'reveal-timing') — a setTimeout delay is JS-internal, invisible to both harnesses the same
    // way rootMargin was, so it is declared here rather than caught by a diff.
    }, { rootMargin: '0px 0px -8% 0px' });
    armed.forEach(function (el) { io.observe(el); });
  })();

  // ── accordion (faq) ───────────────────────────────────────────────────
  document.querySelectorAll('.apx-accordion__button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!open));
      if (open) {
        panel.style.height = panel.scrollHeight + 'px';
        void panel.offsetHeight;
        panel.style.height = '0px';
        panel.addEventListener('transitionend', function done() {
          panel.removeEventListener('transitionend', done);
          panel.hidden = true;
          panel.style.height = '';
        });
      } else {
        panel.hidden = false;
        panel.style.height = '0px';
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + 'px';
        panel.addEventListener('transitionend', function done() {
          panel.removeEventListener('transitionend', done);
          panel.style.height = '';
        });
      }
    });
  });

  var toggle = document.querySelector('.apx-menu-toggle');
  var list = document.querySelector('.apx-nav__list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      list.classList.toggle('apx-nav__list--open', !open);
    });
  }
})();

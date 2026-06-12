/* =============================================================
   script.js  —  Navigation logic for "Sigamos Construyendo"

   How the deck works at a high level
   ────────────────────────────────────────────────────────────
   All slides are in the DOM at once, stacked on top of each
   other with position:absolute (see styles.css).

   Only the slide with class "active" is visible — CSS handles
   the fade + translateY transition automatically.

   go(n) is the single function that drives everything:
     1. Remove "active" from the current slide and its dot.
     2. Clamp n so navigation wraps around at both ends.
     3. Add "active" to the new slide and its dot.
     4. Update the "X / total" counter text.
     5. Swap the nav colour scheme for light-background slides.

   Input sources that all call go():
     • Prev / Next buttons
     • Progress dot clicks
     • Keyboard arrow keys (+ Home / End)
     • Touch swipe left / right
   ============================================================= */

/* Wrap everything in an IIFE (Immediately Invoked Function Expression).
   This keeps all variables private — nothing leaks onto window. */
(function () {

  /* ── State ───────────────────────────────────────────────── */

  /* Build arrays from the DOM once so we never query it again */
  const slides  = Array.from(document.querySelectorAll('.slide'));
  const dots    = Array.from(document.querySelectorAll('.dot'));
  const counter = document.getElementById('counter');
  const total   = slides.length;
  let   cur     = 0;              /* index of the currently visible slide */

  /* Slides whose background is light (gray-50, #f9fafb) carry a
     data-light attribute in the HTML. When one of these is active,
     <body> gets the "light-slide" class so CSS flips the nav buttons
     and counter from amber to navy — they'd be near-invisible on a
     white background otherwise. Reading the attribute (instead of
     hardcoding indices) lets any deck reuse this script unchanged. */
  const LIGHT_SLIDES = new Set(
    slides.map((s, i) => (s.hasAttribute('data-light') ? i : -1)).filter(i => i !== -1)
  );


  /* ── Core navigation ────────────────────────────────────── */

  function go(n) {
    if (n === cur) return; /* already on this slide — nothing to do */

    /* Deactivate the slide we're leaving */
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');

    /* Wrap the index so it loops around at both ends.
       The double-mod handles negative numbers correctly:
         go(-1) when cur=0  →  ((−1 % 12) + 12) % 12  =  11  ✓
         go(12) when cur=11 →  ((12 % 12) + 12) % 12  =  0   ✓  */
    cur = ((n % total) + total) % total;

    /* Activate the target slide */
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');

    /* Update the "X / total" counter (display is 1-based) */
    counter.textContent = (cur + 1) + ' / ' + total;

    /* Toggle the light-slide body class for slides marked data-light */
    document.body.classList.toggle('light-slide', LIGHT_SLIDES.has(cur));
  }


  /* ── Button listeners ───────────────────────────────────── */

  document.getElementById('btn-prev').addEventListener('click', () => go(cur - 1));
  document.getElementById('btn-next').addEventListener('click', () => go(cur + 1));

  /* Each dot knows its own index and jumps straight to that slide */
  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));


  /* ── Keyboard navigation ────────────────────────────────── */

  document.addEventListener('keydown', e => {
    /* Forward: right arrow, down arrow, or Page Down */
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') go(cur + 1);
    /* Back: left arrow, up arrow, or Page Up */
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp'   || e.key === 'PageUp')   go(cur - 1);
    /* Jump to first / last slide */
    if (e.key === 'Home') go(0);
    if (e.key === 'End')  go(total - 1);
  });


  /* ── Touch / swipe navigation ───────────────────────────── */

  /* Store the X position where the finger first touched the screen */
  let touchStartX = 0;

  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true }); /* passive:true tells the browser we won't call
                            preventDefault(), so it can scroll/zoom freely */

  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;

    /* Only navigate if the swipe was more than 50px — avoids triggering
       on accidental taps or tiny micro-swipes */
    if (Math.abs(dx) > 50) {
      go(dx < 0 ? cur + 1 : cur - 1); /* swipe left → next, swipe right → prev */
    }
  }, { passive: true });

})();

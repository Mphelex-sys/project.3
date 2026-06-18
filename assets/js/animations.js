// Animations for elements on scroll (fade-in, slide-up)
(function () {
  function applyVisibilityOnScroll() {
    const targets = Array.from(document.querySelectorAll('.fade-in, .slide-up'));
    if (!targets.length) return;

    // If IntersectionObserver isn't available, reveal everything.
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', applyVisibilityOnScroll);
})();


// animations.js
// CSS-class-based scroll animations using IntersectionObserver
// Adds 'visible' class to elements with .fade-in or .slide-up when they enter viewport

document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once only
        }
      });
    }, { threshold: 0.15 });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately in older browsers
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }
});

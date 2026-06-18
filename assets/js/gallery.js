// gallery.js
// Filter buttons to show/hide product categories
// Lightbox to display images in a larger view when clicked

document.addEventListener('DOMContentLoaded', function () {

  // ─── FILTER ────────────────────────────────────────────────────────────────
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      // Show/hide gallery items with a CSS transition
      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
          item.classList.remove('fade-in');
        }
      });
    });
  });

  // ─── LIGHTBOX ──────────────────────────────────────────────────────────────
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightbox-img');
  const lightboxCap  = document.getElementById('lightbox-caption');
  const closeBtn     = document.getElementById('lightbox-close');
  const triggers     = document.querySelectorAll('.lightbox-trigger');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxCap.textContent = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  // Close on clicking outside the image
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});

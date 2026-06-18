// accordion.js
// Interactive accordion for "What We Offer" section on index.html

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.parentElement;
      const content = item.querySelector('.accordion-content');
      const icon = btn.querySelector('.acc-icon');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.accordion-content').style.maxHeight = null;
        el.querySelector('.acc-icon').style.transform = 'rotate(0deg)';
      });

      // Open clicked one if it was closed
      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
});


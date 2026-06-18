// form.js
// Client-side form validation and success message for enquiry.html

document.addEventListener('DOMContentLoaded', function () {
  const form        = document.getElementById('order-form');
  const successMsg  = document.getElementById('form-success');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // ─── Full Name ──────────────────────────────────────────────────────────
    const fullname      = document.getElementById('fullname');
    const errorFullname = document.getElementById('error-fullname');
    if (fullname.value.trim() === '') {
      errorFullname.textContent = 'Please enter your full name.';
      isValid = false;
    } else {
      errorFullname.textContent = '';
    }

    // ─── Phone ──────────────────────────────────────────────────────────────
    const phone      = document.getElementById('phone');
    const errorPhone = document.getElementById('error-phone');
    const phoneRegex = /^[0-9\s\+\-]{7,15}$/;
    if (phone.value.trim() === '') {
      errorPhone.textContent = 'Please enter your phone number.';
      isValid = false;
    } else if (!phoneRegex.test(phone.value.trim())) {
      errorPhone.textContent = 'Please enter a valid phone number.';
      isValid = false;
    } else {
      errorPhone.textContent = '';
    }

    // ─── Order ──────────────────────────────────────────────────────────────
    const order      = document.getElementById('order');
    const errorOrder = document.getElementById('error-order');
    if (order.value === '') {
      errorOrder.textContent = 'Please select a product.';
      isValid = false;
    } else {
      errorOrder.textContent = '';
    }

    // ─── Submit ─────────────────────────────────────────────────────────────
    if (isValid) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

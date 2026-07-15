import { qs } from './helpers.js';

export function initContactForm() {
  const form = qs('#contact-form');
  if (!form) return;
  const successBox = qs('#form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const submitBtn = qs('button[type="submit"]', form);
    submitBtn.disabled = true;
    submitBtn.textContent = 'جارِ الإرسال...';

    // Placeholder for async submission (Fetch/AJAX) to be connected to backend later.
    setTimeout(() => {
      form.hidden = true;
      successBox.classList.add('show');
      submitBtn.disabled = false;
    }, 900);
  });

  const newsletter = qs('#newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = qs('button', newsletter);
      const original = btn.textContent;
      btn.textContent = 'تم الاشتراك ✓';
      newsletter.querySelector('input').value = '';
      setTimeout(() => { btn.textContent = original; }, 2500);
    });
  }
}

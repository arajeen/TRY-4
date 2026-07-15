import { qsa } from './helpers.js';

export function initAccessibility() {
  // Ensure mobile nav toggle has proper aria attributes
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-nav');
    toggle.setAttribute('aria-label', 'فتح قائمة التنقل');
  }

  // Keyboard support: journey dots
  qsa('.journey-progress .dot').forEach((dot, i) => {
    dot.setAttribute('role', 'button');
    dot.setAttribute('tabindex', '0');
    dot.setAttribute('aria-label', `الانتقال إلى المرحلة ${i + 1}`);
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') dot.click();
    });
  });
}

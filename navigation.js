import { qs, qsa } from './helpers.js';

export function initNavigation() {
  const header = qs('.site-header');
  const toggle = qs('.nav-toggle');
  const mobileNav = qs('.mobile-nav');

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    qsa('a', mobileNav).forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

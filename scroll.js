import { qs, qsa, prefersReducedMotion } from './helpers.js';

export function initSplash() {
  const splash = qs('#splash');
  if (!splash) return;
  const finish = () => splash.classList.add('hide');
  const t = setTimeout(finish, prefersReducedMotion() ? 200 : 2400);
  window.addEventListener('load', () => {
    // allow the tagline animation to be seen even on fast loads
  });
  splash.addEventListener('click', () => { clearTimeout(t); finish(); });
}

export function initScrollReveal() {
  const items = qsa('.reveal, .reveal-scale, .section-head');
  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );
  items.forEach((el) => io.observe(el));
}

export function initHeroParallax() {
  const box = qs('.hero-box');
  if (!box || prefersReducedMotion() || window.matchMedia('(max-width: 1023px)').matches) return;
  const hero = qs('.hero');
  hero.addEventListener('mousemove', (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w - 0.5) * 14;
    const y = (e.clientY / h - 0.5) * 14;
    box.style.transform = `translate(${x}px, ${y}px)`;
  });
}

export function initJourneyProgress() {
  const stages = qsa('.journey-stage');
  const dotsWrap = qs('.journey-progress');
  if (!stages.length || !dotsWrap) return;

  const dots = qsa('.dot', dotsWrap);
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stages[i].scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = stages.indexOf(entry.target);
          dots.forEach((d) => d.classList.remove('active'));
          if (dots[idx]) dots[idx].classList.add('active');
        }
      });
    },
    { threshold: 0.5 }
  );
  stages.forEach((s) => io.observe(s));
}

export function initCursorRing() {
  if (window.matchMedia('(hover: none)').matches || prefersReducedMotion()) return;
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  window.addEventListener('mousemove', (e) => {
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
    ring.classList.add('active');
  });
  window.addEventListener('mouseleave', () => ring.classList.remove('active'));

  qsa('a, button, .glass-card, .masonry-item').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('grow'));
    el.addEventListener('mouseleave', () => ring.classList.remove('grow'));
  });
}

export function initBackToTop() {
  const btn = qs('.back-to-top');
  if (!btn) return;
  window.addEventListener(
    'scroll',
    () => btn.classList.toggle('show', window.scrollY > 800),
    { passive: true }
  );
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
}

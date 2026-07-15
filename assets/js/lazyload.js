import { qsa } from './helpers.js';

/**
 * Stub ready for real production images.
 * Usage once real photography is added:
 * <img data-src="path.avif" class="lazy" alt="...">
 */
export function initLazyLoad() {
  const lazyImgs = qsa('img.lazy[data-src]');
  if (!lazyImgs.length) return;

  if (!('IntersectionObserver' in window)) {
    lazyImgs.forEach((img) => { img.src = img.dataset.src; });
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.remove('lazy');
        io.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImgs.forEach((img) => io.observe(img));
}

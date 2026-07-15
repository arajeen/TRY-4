import { qs, qsa } from './helpers.js';

export function initProductFilter() {
  const buttons = qsa('.filter-btn[data-filter-target="products"]');
  const cards = qsa('[data-category]', qs('#products'));
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

export function initGalleryFilter() {
  const buttons = qsa('.filter-btn[data-filter-target="gallery"]');
  const items = qsa('.masonry-item');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach((item) => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });
}

export function initLightbox() {
  const items = qsa('.masonry-item');
  const lightbox = qs('#lightbox');
  if (!items.length || !lightbox) return;

  const content = qs('.lightbox-content', lightbox);
  let currentIndex = 0;

  function openAt(index) {
    currentIndex = index;
    const el = items[currentIndex];
    content.innerHTML = el.querySelector('.ph').innerHTML;
    qs('.lightbox-caption', lightbox).textContent = el.dataset.label || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => openAt(i));
  });

  qs('.lightbox-close', lightbox)?.addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  });
  qs('.lightbox-next', lightbox)?.addEventListener('click', () => openAt((currentIndex + 1) % items.length));
  qs('.lightbox-prev', lightbox)?.addEventListener('click', () => openAt((currentIndex - 1 + items.length) % items.length));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    if (e.key === 'ArrowLeft') openAt((currentIndex + 1) % items.length);
    if (e.key === 'ArrowRight') openAt((currentIndex - 1 + items.length) % items.length);
  });
}

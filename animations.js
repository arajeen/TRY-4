import { qsa, prefersReducedMotion } from './helpers.js';

export function initGlassGlow() {
  if (prefersReducedMotion() || window.matchMedia('(hover: none)').matches) return;
  qsa('.glass-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}

export function initHeroParticles() {
  const canvas = document.querySelector('#hero-particles');
  if (!canvas || prefersReducedMotion()) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function makeParticles() {
    const count = window.matchMedia('(max-width: 767px)').matches ? 22 : 45;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vy: Math.random() * 0.15 + 0.04,
      o: Math.random() * 0.5 + 0.15,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.y -= p.vy;
      if (p.y < -4) p.y = h + 4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(231,198,106,${p.o})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  makeParticles();
  draw();
  window.addEventListener('resize', () => { resize(); makeParticles(); });
}

export function initSplashParticles() {
  const canvas = document.querySelector('#splash-particles');
  if (!canvas || prefersReducedMotion()) return;
  const ctx = canvas.getContext('2d');
  const w = (canvas.width = window.innerWidth);
  const h = (canvas.height = window.innerHeight);
  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.8 + 0.4,
    vy: Math.random() * 0.3 + 0.08,
  }));
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.y -= p.vy;
      if (p.y < 0) p.y = h;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(231,198,106,0.5)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

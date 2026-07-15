import { initNavigation } from './navigation.js';
import { initSplash, initScrollReveal, initHeroParallax, initJourneyProgress, initCursorRing, initBackToTop } from './scroll.js';
import { initCounters } from './counters.js';
import { initProductFilter, initGalleryFilter, initLightbox } from './gallery.js';
import { initContactForm } from './forms.js';
import { initAccessibility } from './accessibility.js';
import { initLazyLoad } from './lazyload.js';
import { initGlassGlow, initHeroParticles, initSplashParticles } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initSplash();
  initSplashParticles();
  initNavigation();
  initScrollReveal();
  initHeroParallax();
  initHeroParticles();
  initJourneyProgress();
  initCursorRing();
  initBackToTop();
  initCounters();
  initProductFilter();
  initGalleryFilter();
  initLightbox();
  initContactForm();
  initAccessibility();
  initLazyLoad();
  initGlassGlow();
});

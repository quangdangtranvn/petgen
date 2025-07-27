import * as index from 'anim.js';

// Với container có .feature
export const animGallery = new index.OBBAnimator('#features');
animGallery.run();

// Với thẻ đơn lẻ như .pet-card
export const animCards = new index.OBBAnimator('.pet-card', { duration: 1000 });
animCards.run();// File: /petgen.js
export class OBBAnimator {
  constructor(selector, options = {}) {
    this.elements = document.querySelectorAll(selector);
    this.duration = options.duration || 800;
    this.easing = options.easing || 'ease-in-out';
  }

  animate() {
    this.elements.forEach((on, index) => {
      on.style.transform = 'scale(0.95) translateY(20px)';
      on.style.opacity = '0';
      on.style.transition = `all ${this.duration}ms ${this.easing}`;
      setTimeout(() => {
        on.style.transform = 'scale(1) translateY(0)';
        on.style.opacity = '1';
      }, 100 * index);
    });
  }
}
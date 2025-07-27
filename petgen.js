// File: /petgen.js
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
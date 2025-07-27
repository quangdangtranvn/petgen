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
// ES module: petgen.js
export class OBBAnimator {
  constructor(input, options = {}) {
    this.duration = options.duration || 800;
    this.easing = options.easing || 'ease-in-out';

    if (typeof input === 'string') {
      const container = document.querySelector(input);
      if (container?.querySelector('.feature')) {
        this.mode = 'gsap';
        this.container = container;
        this.features = container.querySelectorAll('.feature');
      } else {
        this.mode = 'simple';
        this.elements = document.querySelectorAll(input);
      }
    } else if (input instanceof Element) {
      this.mode = 'gsap';
      this.container = input;
      this.features = input.querySelectorAll('.feature');
    } else if (input instanceof NodeList || Array.isArray(input)) {
      this.mode = 'simple';
      this.elements = input;
    } else {
      this.mode = 'simple';
      this.elements = [];
    }
  }

  prepare() {
    if (this.mode === 'gsap') {
      gsap.set(this.features, { opacity: 0, y: 40 });
    }
  }

  animate() {
    if (this.mode === 'gsap') {
      this.features.forEach((f, i) => this.anim(f, i));
    } else {
      this.elements.forEach((el, index) => {
        el.style.transform = 'scale(0.95) translateY(20px)';
        el.style.opacity = '0';
        el.style.transition = `all ${this.duration}ms ${this.easing}`;
        setTimeout(() => {
          el.style.transform = 'scale(1) translateY(0)';
          el.style.opacity = '1';
        }, 100 * index);
      });
    }
  }

  anim(feature, index) {
    gsap.to(feature, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.3,
      ease: 'power2.out'
    });
  }

  run() {
    this.prepare();
    this.animate();
  }
}
export class OBBAnimator {
  constructor(elements, options = {}) {
    this.elements = elements;
    this.duration = options.duration || 800;
    this.easing = options.easing || 'ease-in-out';
  }

  static fromSelector(selector, options) {
    const els = document.querySelectorAll(selector);
    return new OBBAnimator(els, options);
  }

  static fromContainer(containerSelector, options) {
    const container = document.querySelector(containerSelector);
    const els = container?.querySelectorAll('.feature') || [];
    return new OBBAnimator(els, options);
  }

  animate() {
    this.elements.forEach((el, index) => {
      el.style.transform = 'scale(0.95) translateY(20px)';
      el.style.opacity = '0';
      el.style.transition = `all ${this.duration}ms ${this.easing}`;
      setTimeout(() => {
        el.style.transform = 'scale(1) translateY(0)';
        el.style.opacity = '1';
      }, 100 * index);
    });
  }
}
export class OBBAnimator {
  constructor(input, options = {}) {
    this.duration = options.duration || 800;
    this.easing = options.easing || 'ease-in-out';

    // Kiểm tra nếu là selector chuỗi
    if (typeof input === 'string') {
      const container = document.querySelector(input);

      // Nếu có .feature bên trong → xài GSAP
      if (container?.querySelector('.feature')) {
        this.mode = 'gsap';
        this.container = container;
        this.features = container.querySelectorAll('.feature');
      } else {
        // Nếu không → tween đơn giản
        this.mode = 'simple';
        this.elements = document.querySelectorAll(input);
      }
    }

    // Nếu là DOM Element
    else if (input instanceof Element) {
      this.mode = 'gsap';
      this.container = input;
      this.features = input.querySelectorAll('.feature');
    }

    // Nếu là NodeList
    else if (input instanceof NodeList || Array.isArray(input)) {
      this.mode = 'simple';
      this.elements = input;
    } else {
      this.mode = 'simple';
      this.elements = [];
    }
  }

  prepare() {
    if (this.mode === 'gsap') {
      gsap.set(this.features, { opacity: 0, y: 40 });
    }
  }

  animate() {
    if (this.mode === 'gsap') {
      this.features.forEach((f, i) => this.anim(f, i));
    } else {
      this.elements.forEach((el, index) => {
        el.style.transform = 'scale(0.95) translateY(20px)';
        el.style.opacity = '0';
        el.style.transition = `all ${this.duration}ms ${this.easing}`;
        setTimeout(() => {
          el.style.transform = 'scale(1) translateY(0)';
          el.style.opacity = '1';
        }, 100 * index);
      });
    }
  }

  anim(feature, index) {
    gsap.to(feature, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.3,
      ease: 'power2.out'
    });
  }

  run() {
    this.prepare();
    this.animate();
  }
}// OBB Tween Animation Class
class OBBAnimator {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.features = this.container?.querySelectorAll('.feature') || [];
  }

  // Thiết lập trạng thái ban đầu
  prepare() {
    gsap.set(this.features, { opacity: 0, y: 40 });
  }

  // Tween từng feature tuần tự
  animate() {
    this.features.forEach((feature, index) => {
      this.anim(feature, index);
    });
  }

  // Hàm riêng xử lý một feature
  anim(feature, index) {
    gsap.to(feature, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.3,
      ease: 'power2.out'
    });
  }

  // Hàm chạy tổng thể
  run() {
    this.prepare();
    this.animate();
//Có một nhân vật tĩnh thì dùng một anim line này:
// this.anim();
  }
}

// Khởi động animation khi DOM sẵn sàng
window.addEventListener('DOMContentLoaded', () => {
  const animator = new OBBAnimator('#features');
  animator.run();
});
// OBB Tween Animation Class
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
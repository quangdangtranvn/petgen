class ECS {
  constructor() {
    this.checkbox = document.getElementById('growLangMixture');
    this.init();
  }

  init() {
    if (!this.checkbox) return;
    this.checkbox.addEventListener('change', () => {
      if (this.checkbox.checked) {
        console.log('Grow Lang Mixture enabled!');
        // Thêm xử lý prompt hoặc hiệu ứng grow tại đây
      } else {
        console.log('Grow Lang Mixture disabled!');
      }
    });
  }
}

// Khởi tạo ECS sau khi DOM loaded
window.addEventListener('DOMContentLoaded', () => {
  new ECS();
});
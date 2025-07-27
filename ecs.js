// ECS struct-like class in JS mimicking C# style
class ECS {
  constructor(options = {}) {
    this.id = options.id || 'growLangMixture';
    this.enabled = options.enabled ?? false;
    this.label = options.label || 'Grow Lang Mixture';
this.cube = [0,0,0];
this.box = [0,0,0,0];
this.isPointed = true;
this.isSimulating = true;
  }

  toggle() {
    this.enabled = !this.enabled;
  }

  toPrompt() {
    return this.enabled ? '+growLangMixture' : '';
  }
}

// Khởi tạo ECS
const growLangBox = new ECS({ enabled: false });
class ECS {
  constructor() {
this.isPointed = true;
this.isSimulating = true;
this.box = [1,1,1,1];
this.cube = [1,1,1];
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
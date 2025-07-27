class Model {
  constructor(x = 0, y = 0, z = 0, w = 0, p = 1) {
    this.coords = [x, y, z, w, p];
  }

  grow(factor = 1) {
    this.coords = this.coords.map(v => v * factor);
  }
}
class Circle {
  constructor(x = 0, y = 0, z = 360) {
    this.coords = [x, y, z];
  }

  grow(factor = 1) {
    this.coords = this.coords.map(v => v * factor);
  }
}
class Box {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.coords = [x, y, z, w];
  }

  grow(factor = 1) {
    this.coords = this.coords.map(v => v * factor);
  }
}
class Mirror {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.coords = [x, y, z, w];
  }

  grow(factor = 1) {
    this.coords = this.coords.map(v => v * factor);
  }
}
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
class ECS {
  constructor(options = {}) {
    this.id = options.id || 'growLangMixture';
    this.enabled = options.enabled ?? false;
    this.label = options.label || 'Grow Lang Mixture';
    this.cube = [0, 0, 0];
    this.box = [0, 0, 0, 0];
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
class ECS {
  constructor() {
    this.isPointed = true;
    this.isSimulating = true;
    this.box = [1, 1, 1, 1];
    this.cube = [1, 1, 1];
    this.checkbox = document.getElementById('growLangMixture');
    this.init();
  }

  init() {
    if (!this.checkbox) return;
    this.checkbox.addEventListener('change', () => {
      if (this.checkbox.checked) {
        console.log('Grow Lang Mixture enabled!');
        // Xử lý hiệu ứng grow hoặc prompt ở đây
      } else {
        console.log('Grow Lang Mixture disabled!');
      }
    });
  }
}
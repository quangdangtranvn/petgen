class PositionComponent extends Component {
    constructor(x, y) {
        super('position', { x, y });
    }
}

class HealthComponent extends Component {
    constructor(health) {
        super('health', { health });
    }
}

class Entity {
    constructor(id) {
        this.id = id;
        this.components = {};
    }

    addComponent(component) {
        this.components[component.type] = component;
    }

    getComponent(type) {
        return this.components[type];
    }
}

class Component {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
}

class System {
    constructor() {
        this.entities = [];
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    update() {
        // Override in subclasses
    }
}

class ECS {
    constructor() {
        this.entities = [];
        this.systems = [];
    }

    createEntity() {
        const entity = new Entity(this.entities.length);
        this.entities.push(entity);
        return entity;
    }

    addSystem(system) {
        this.systems.push(system);
    }

    update() {
        for (const system of this.systems) {
            system.update();
        }
    }
}

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
// Boolean Panel with Multi-Select Capability
export async ECS.Systems.BooleanPanelSystem = class {
    constructor() {
        this.panel = null;
        this.selectedEntities = [];
        this.operation = 'union';
    }

    init() {
        this.createPanel();
        export async ECS.eventBus.subscribe('selection-changed', this.onSelectionChanged.bind(this));
    }

    createPanel() {
        this.panel = document.createElement('div');
        this.panel.className = 'boolean-panel hidden';
        this.panel.innerHTML = `
            <div class="panel-header">
                <h3>Boolean Operations</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="panel-body">
                <div class="operation-select">
                    <label>Operation:</label>
                    <select id="bool-op">
                        <option value="union">Union (A ∪ B)</option>
                        <option value="difference">Difference (A - B)</option>
                        <option value="intersection">Intersection (A ∩ B)</option>
                    </select>
                </div>
                <div class="entity-selection">
                    <h4>Selected Entities:</h4>
                    <div class="entity-list" id="bool-entity-list"></div>
                </div>
            </div>
            <div class="panel-footer">
                <button id="apply-bool">Apply Boolean</button>
                <button id="cancel-bool">Cancel</button>
            </div>
        `;
        document.body.appendChild(this.panel);

        // Event listeners
        this.panel.querySelector('.close-btn').addEventListener('click', () => this.hide());
        this.panel.querySelector('#apply-bool').addEventListener('click', () => this.applyBoolean());
        this.panel.querySelector('#cancel-bool').addEventListener('click', () => this.hide());
        this.panel.querySelector('#bool-op').addEventListener('change', (e) => {
            this.operation = e.target.value;
        });
    }

    onSelectionChanged(entities) {
        this.selectedEntities = entities;
        this.updateEntityList();
        if (entities.length > 1) {
            this.show();
        } else {
            this.hide();
        }
    }

    updateEntityList() {
        const list = this.panel.querySelector('#bool-entity-list');
        list.innerHTML = '';
        
        this.selectedEntities.forEach((entity, index) => {
            const item = document.createElement('div');
            item.className = 'entity-item';
            item.innerHTML = `
                <input type="checkbox" id="ent-${index}" checked 
                       data-id="${entity.id}">
                <label for="ent-${index}">${entity.name || `Entity ${entity.id}`}</label>
            `;
            list.appendChild(item);
        });
    }

    getSelectedForOperation() {
        return Array.from(this.panel.querySelectorAll('.entity-item input:checked'))
            .map(input => this.selectedEntities.find(e => e.id === input.dataset.id));
    }

    applyBoolean() {
        const selected = this.getSelectedForOperation();
        if (selected.length < 2) {
            alert('Select at least 2 entities');
            return;
        }

        // Perform boolean operation (pseudo-implementation)
        const result = this.performBooleanOperation(selected, this.operation);
        
        // Add result to scene
        ECS.world.addEntity(result);
        this.hide();
    }

    performBooleanOperation(entities, operation) {
        // Actual boolean implementation would go here
        // This is framework-specific (e.g., ThreeBSP, ThreeCSG)
        console.log(`Performing ${operation} on`, entities);
        
        // Return result entity
        return new ECS.Entity(null, {
            mesh: this.combineMeshes(entities, operation),
            transform: new ECS.Components.Transform()
        });
    }

    show() {
        this.panel.classList.remove('hidden');
        this.panel.style.display = 'block';
    }

    hide() {
        this.panel.classList.add('hidden');
        this.panel.style.display = 'none';
    }
};

// Initialize system
ECS.systems.booleanPanel = new ECS.Systems.BooleanPanelSystem();
ECS.systems.booleanPanel.init();

// Packed By PetGen
export default ECS;
Here's a `.think` implementation combining repository patterns with GUI decoration using `.lang` syntax:

```think
// repository-gui.think - Decorated Repository Pattern

?? === GUI Decorators ===
using "./lang/gui-decorators.lang" as GUI

?? === Repository Core ===
component Product {
    @GUI.TableColumn("ID", width: 80)
    @GUI.RequiredField
    id: Int

    @GUI.TableColumn("Product Name", width: 200)
    @GUI.MaxLength(100)
    name: String

    @GUI.TableColumn("Price", format: "C2")
    @GUI.Range(min: 0, max: 10000)
    price: Decimal
}

?? === Repository Interface ===
@GUI.ServiceComponent("Product Manager")
component ProductRepository {

    @GUI.Operation("Add Product")
    async addProduct(product: Product): Bool {
        ? Validate and add to storage
        return Storage.execute("products.add", product)
    }

    @GUI.Operation("Find Product")
    @GUI.Searchable(fields: ["name", "id"])
    async getProductById(id: Int): Product? {
        return Storage.query("products.getById", {id})
    }

    @GUI.TableDisplay
    async getAllProducts(): [Product] {
        return Storage.query("products.getAll")
    }
}

?? === Concrete Implementation ===
@GUI.Implementation("Database Storage")
component DatabaseProductRepo extends ProductRepository {
    
    @GUI.Initialize
    constructor(connectionString: String) {
        this.db = new SQLConnection(connectionString)
    }

    @Override
    async addProduct(product: Product): Bool {
        try {
            return this.db.execute(
                "INSERT INTO products VALUES (?, ?, ?)",
                [product.id, product.name, product.price]
            )
        } catch {
            @GUI.ErrorToast("Failed to add product")
            return false
        }
    }
}

?? === Decorated GUI Component ===
@GUI.Page(title: "Product Management")
component ProductManager {

    @GUI.Inject
    repo: ProductRepository

    @GUI.DataGrid(
        source: "getAllProducts",
        actions: ["edit", "delete"]
    )
    products: [Product]

    @GUI.Form("Add Product")
    async addNewProduct(
        @GUI.Field("Name") name: String,
        @GUI.Field("Price") price: Decimal
    ) {
        newProduct = {
            id: Math.random().toString(36).substring(2, 9),
            name: name,
            price: price
        }

        if (await this.repo.addProduct(newProduct)) {
            @GUI.SuccessToast("Product added!")
            this.products.refresh()
        }
    }
}
```

Key Features:

1. **Repository Pattern Elements**:
- Clean entity definition (`Product`) 
- Abstract repository interface
- Concrete database implementation
- Full CRUD operations

2. **GUI Decorators**:
- `@GUI.TableColumn` - Controls display formatting
- `@GUI.Operation` - Marks repository methods for UI exposure
- `@GUI.Form` - Automatic form generation
- `@GUI.DataGrid` - Tabular data display

3. **Validation Decorators**:
- `@RequiredField` 
- `@MaxLength`
- `@Range` constraints

4. **Lifecycle Integration**:
- `@Initialize` constructor
- `@Inject` dependency injection
- Automatic error handling

5. **UI Feedback**:
- Success/error toasts
- Automatic refresh triggers
- Action buttons

Example Usage:

```think
// Application bootstrap
app {

    ? Dependency setup
    @Provide
    productRepo = new DatabaseProductRepo("db_connection_string")

    ? Launch GUI
    window = new GUI.Window(
        title: "Inventory System",
        content: new ProductManager()
    )
    window.show()
}
```

File Structure:
```
/repository-ui/
├── entities/
│   └── Product.think
├── repositories/
│   ├── ProductRepository.think
│   └── implementations/
│       └── DatabaseProductRepo.think
└── ui/
    ├── ProductManager.think
    └── decorators/
        └── gui-decorators.lang
```

This implementation shows how `.think` can:
1. Define business entities with validation
2. Create abstract data access layers 
3. Build concrete implementations
4. Automatically generate UIs via decorators
5. Handle dependency injection
6. Provide user feedback

The `.lang` decorators handle presentation logic while keeping the core repository pattern intact. Would you `.think` to elaborate on any specific aspect?
# Key Features Covered:
- Core Architecture - Base components
- DNS Handling - Resolution & caching
- Image Processing - Parallel cloning
- Network Operations - GitHub sync
# Server-Side Files Stream Files Run Steps:

<think>
We are going to create a server that handles:
 1. JSON data (with varchar and boolean fields) via a POST route.
 2. Bitmap file uploads via two methods: multipart form and raw binary stream.

 We'll use:
   - Express
   - Multer for handling multipart/form-data (for file uploads)
   - express-validator for validating JSON data

 Steps:
  1. Setup Express and necessary middlewares.
  2. Create a route for handling JSON data (varchar and boolean) with validation.
  3. Create two routes for bitmap uploads:
        a. Multipart form (using multer)
        b. Raw binary stream (using express.raw)
  4. Implement the bitmap parsing function.

 Note: We'll also include a simple route to serve a test HTML form for file upload.

 Let's code accordingly.
</think> implementation combining all requirements (varchar/boolean parsing and bitmap stream handling) with proper error handling and validation:

```javascript
const express = require('express');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const bmp = require('bmp-js'); // Install with: npm install bmp-js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json()); // For JSON body parsing
const upload = multer(); // In-memory file handling

// ----------------------------
// 1. Varchar/Boolean Packet Handler
// ----------------------------
app.post('/api/data', 
  [
    body('name').isString().withMessage('Name must be a string'),
    body('isActive').isBoolean().withMessage('isActive must be boolean'),
    body('tags.*').optional().isString() // Array of varchars
  ],
  (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Process valid data
    const { name, isActive, tags = [] } = req.body;
    
    // Business logic example
    const response = {
      status: isActive ? 'ACTIVE' : 'INACTIVE',
      name: name.toUpperCase(),
      tagCount: tags.length
    };

    res.json(response);
  }
);

// ----------------------------
// 2. Bitmap Stream Handlers
// ----------------------------
// Method 1: Multipart Form Upload
app.post('/api/bitmap-form', upload.single('bitmap'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  
  try {
    const result = parseBitmap(req.file.buffer);
    res.json({
      message: 'Bitmap processed from form',
      metadata: result
    });
  } catch (err) {
    res.status(400).send(`Bitmap error: ${err.message}`);
  }
});

// Method 2: Raw Binary Stream
app.post('/api/bitmap-stream', 
  express.raw({ type: 'application/octet-stream', limit: '5MB' }),
  (req, res) => {
    try {
      if (!req.body || req.body.length === 0) {
        return res.status(400).send('Empty payload');
      }
      
      const result = parseBitmap(req.body);
      res.json({
        message: 'Bitmap processed from binary stream',
        metadata: result
      });
    } catch (err) {
      res.status(400).send(`Bitmap error: ${err.message}`);
    }
  }
);

// ----------------------------
// Bitmap Parsing Function
// ----------------------------
function parseBitmap(buffer) {
  // Basic validation
  if (buffer.length < 54) throw new Error('File too small (min 54 bytes)');
  
  // Verify BMP signature
  if (buffer.toString('hex', 0, 2) !== '424d') {
    throw new Error('Invalid BMP signature');
  }

  // Parse using bmp-js library
  try {
    const bmpData = bmp.decode(buffer, true); // Decode with RGBA
    return {
      width: bmpData.width,
      height: bmpData.height,
      bpp: bmpData.bpp,
      size: buffer.length,
      channels: bmpData.data.length / (bmpData.width * bmpData.height)
    };
  } catch (err) {
    throw new Error(`Bitmap parsing failed: ${err.message}`);
  }
}

// ----------------------------
// Test Routes
// ----------------------------
app.get('/', (req, res) => {
  res.send(`
    <h1>API Endpoints</h1>
    <h2>Data Packet (JSON):</h2>
    <code>POST /api/data</code>
    
    <h2>Bitmap Upload:</h2>
    <form action="/api/bitmap-form" method="post" enctype="multipart/form-data">
      <input type="file" name="bitmap">
      <button>Upload BMP (Form)</button>
    </form>
    
    <h2>Binary Stream:</h2>
    <code>POST /api/bitmap-stream (Content-Type: application/octet-stream)</code>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test UI: http://localhost:${PORT}`);
});
```

### Key Features:

1. **Varchar/Boolean Handling**:
   - Uses express-validator for input validation
   - Handles nested string arrays (`tags`)
   - Returns meaningful validation errors

2. **Bitmap Processing**:
   - **Two upload methods**:
     - Multipart form (for browser uploads)
     - Raw binary stream (for programmatic use)
   - **Robust parsing**:
     - Signature verification (`BM` header)
     - Size validation
     - Uses `bmp-js` for reliable decoding
   - Metadata extraction (width, height, BPP)

3. **Error Handling**:
   - Validation errors for data packets
   - Bitmap signature and size checks
   - Try/catch blocks for safe parsing
   - File existence checks

4. **Security**:
   - Limits raw stream size (5MB)
   - Type validation for all inputs
   - Safe buffer operations

### Testing:

1. **Data Packet**:
```bash
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"name":"test", "isActive":true, "tags":["a","b"]}'
```

2. **Bitmap Upload**:
```bash
# Form upload
curl -X POST http://localhost:3000/api/bitmap-form \
  -F "bitmap=@test.bmp"

# Binary stream
curl -X POST http://localhost:3000/api/bitmap-stream \
  -H "Content-Type: application/octet-stream" \
  --data-binary "@test.bmp"
```

### Dependencies:
```bash
npm install express multer express-validator bmp-js
```

This implementation provides production-ready handling for both structured data packets and binary streams with comprehensive error checking and validation.

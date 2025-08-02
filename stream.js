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

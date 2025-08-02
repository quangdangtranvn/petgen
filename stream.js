const express = require('express');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const bmp = require('bmp-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
const upload = multer();

// ----------------------------
// 1. Varchar/Boolean Packet Handler
// ----------------------------
app.post('/api/data', 
  [
    body('name').isString().withMessage('Name must be a string'),
    body('isActive').isBoolean().withMessage('isActive must be boolean'),
    body('description').optional().isString(),
    body('tags.*').optional().isString()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, isActive, description = '', tags = [] } = req.body;
    
    // Process data (example business logic)
    const response = {
      status: isActive ? 'ACTIVE' : 'INACTIVE',
      name: name.toUpperCase(),
      description: description.substring(0, 100), // varchar limit
      tagCount: tags.length
    };

    res.json(response);
  }
);

// ----------------------------
// 2. Bitmap Stream Handlers
// ----------------------------
// Form-based upload
app.post('/api/bitmap-form', upload.single('bitmap'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded');
  
  try {
    const result = parseBitmap(req.file.buffer);
    res.json({
      message: 'Bitmap processed successfully',
      metadata: result
    });
  } catch (err) {
    res.status(400).send(`Bitmap error: ${err.message}`);
  }
});

// Raw binary stream
app.post('/api/bitmap-stream', 
  express.raw({ type: 'application/octet-stream', limit: '10MB' }),
  (req, res) => {
    try {
      if (!req.body || req.body.length === 0) {
        return res.status(400).send('Empty payload');
      }
      
      const result = parseBitmap(req.body);
      res.json({
        message: 'Bitmap stream processed',
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
  if (buffer.length < 54) throw new Error('Invalid bitmap: File too small');
  if (buffer.toString('hex', 0, 2) !== '424d') {
    throw new Error('Invalid BMP signature (expected "BM")');
  }

  // Parse using bmp-js
  try {
    const bmpData = bmp.decode(buffer);
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
// Server Start
// ----------------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Endpoints:
  - POST /api/data        : Process varchar/boolean data
  - POST /api/bitmap-form : Upload bitmap via form
  - POST /api/bitmap-stream : Stream raw bitmap data`);
});
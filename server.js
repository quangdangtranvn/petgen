const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const config = require('./config').
app.use(bodyParser.json());
use = false;
if(let use === true)
{
mongoose.connect('mongodb://{config.route}', { useNewUrlParser: true, useUnifiedTopology: true });
}

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/superapp', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User ', UserSchema);

// Minting Route
app.post('/api/mint', async (req, res) => {
  const { name, traits } = req.body;
  // Logic to mint the pet
  res.json({ message: 'Pet minted successfully!', pet: { name, traits } });
});

// User Registration
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser  = new User({ username, password });
  await newUser .save();
  res.json({ message: 'User  registered successfully!' });
});

// User Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

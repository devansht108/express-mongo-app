const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection error:', err));

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from a simple Express Server!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

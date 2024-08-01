// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mat-metrics', {
  useUnifiedTopology: true,
  useNewURLParser: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define Routes
const nameRouter = require('./routes/names');
app.use('/names', nameRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

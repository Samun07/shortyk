const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/index");

// Create an Express application instance
const app = express();

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount the indexRouter for handling routes
app.use(indexRouter);

// Error handling middleware to catch and respond to errors
app.use((err, req, res, next) => {
  // Set the HTTP status code based on the error or default to 500 (Internal Server Error)
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;

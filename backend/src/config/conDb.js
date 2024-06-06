// Load environment variables from a .env file into process.env
require("dotenv").config();

const mongoose = require("mongoose");

// Function to connect to the MongoDB database
const conDb = async () => {
  try {
    // Connect to the MongoDB database using the URL from environment variables
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB database successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB database:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado externamente
  }
};

module.exports = conDb;

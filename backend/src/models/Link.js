const mongoose = require("mongoose");

// Define the schema for the Link model
const LinkSchema = new mongoose.Schema({
  // Field for storing the original link
  originalLink: {
    type: String,
    required: true,
  },
  // Field for storing the shortened link
  shortLink: {
    type: String,
    required: true,
  },
});

// Export the Link model based on the defined schema
module.exports = mongoose.model("Link", LinkSchema);

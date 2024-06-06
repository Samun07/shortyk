const catchAsync = require("../utils/catchAsync"); // Import the catchAsync utility function
const linksService = require("../services/linksService"); // Import the linksService module

// Async function to handle retrieving the original link using the shortened link
const getShortenedLink = catchAsync(async (req, res) => {
  try {
    // Retrieve the original link using the shortened link from the request parameters
    const originalLink = await linksService.getShortenedLink(
      req.params.shortLink
    );
    // Redirect to the original link
    res.redirect(originalLink);
  } catch (error) {
    // Handle errors by sending a 404 JSON response with the error message
    res.status(404).json({ error: error.message });
  }
});

// Async function to handle creating a shortened link from an original link
const createShortenedLink = catchAsync(async (req, res) => {
  try {
    // Extract the original link from the request body
    const { originalLink } = req.body;
    // Create a shortened link using the linksService module
    const link = await linksService.createShortenedLink(originalLink);
    // Send the created link as a JSON response
    res.json(link);
  } catch (error) {
    // Handle errors by sending a 400 JSON response with the error message
    res.status(400).json({ error: error.message });
  }
});

// Export the functions to be used as route handlers
module.exports = {
  createShortenedLink,
  getShortenedLink,
};

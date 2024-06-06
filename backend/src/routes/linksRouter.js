const { Router } = require("express");

const linksController = require("../controllers/linksController");

// Create a new router instance
const linksRouter = Router();

// Define a POST route to create a shortened link, handled by createShortenedLink controller function
linksRouter.post("/api/link/narrowlink", linksController.createShortenedLink);

// Define a GET route to retrieve the original link using the shortened link, handled by getShortenedLink controller function
linksRouter.get("/:shortLink", linksController.getShortenedLink);

module.exports = linksRouter;

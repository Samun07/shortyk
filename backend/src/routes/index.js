const { Router } = require("express");

const linksRouter = require("./linksRouter");

// Create a new router instance
const indexRouter = Router();

// Use the linksRouter for all routes starting with "/"
indexRouter.use("/", linksRouter);

module.exports = indexRouter;

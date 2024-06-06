const Link = require("../models/Link");

require("dotenv").config();

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://shortyk-backend.vercel.app/"
    : `http://localhost:${process.env.PORT}/`;

// Function to retrieve the original link using the shortened link
const getShortenedLink = async (shortLink) => {
  // Find a link document in the database using the full shortened link
  const link = await Link.findOne({
    shortLink: baseURL + shortLink,
  });

  // If the link exists, return the original link
  if (link) {
    return link.originalLink;
  } else {
    // If the link doesn't exist, throw an error
    throw new Error("That short link does not exist, try again.");
  }
};

// Function to create a shortened link from an original link
const createShortenedLink = async (originalLink) => {
  // Check if the original link already exists in the database
  const existingLink = await Link.findOne({ originalLink });

  // If the original link exists, return it
  if (existingLink) {
    return existingLink;
  }

  // Characters used to generate the short link
  const characters =
    "abc1234567890ABCDEopqrsFGHIJVWXYZdKLMNOPQRSTUefghijklmntuvwxyz";
  let shortLink = "";
  for (let i = 0; i < 5; i++) {
    // Generate a random 5-character short link
    shortLink += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Construct the full short link URL
  const fullShortLink = baseURL + shortLink;

  // Check if the generated short link already exists in the database
  const linkExists = await Link.findOne({ shortLink: fullShortLink });

  // If the short link exists, return it
  if (linkExists) {
    return linkExists;
  }

  // Create a new Link object with the original and short links
  const link = new Link({
    originalLink,
    shortLink: fullShortLink,
  });

  // Save the new link object to the database and return it
  await link.save();
  return link;
};

module.exports = {
  getShortenedLink,
  createShortenedLink,
};

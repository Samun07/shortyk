// Higher-order function to wrap asynchronous controller functions and handle errors
const catchAsync = (controller) => {
  // Return a middleware function that executes the controller function
  return (req, res, next) => {
    // Execute the controller function and handle any errors
    controller(req, res).catch((err) => {
      // Pass the error to the next middleware in the chain
      next(err);
    });
  };
};

module.exports = catchAsync;

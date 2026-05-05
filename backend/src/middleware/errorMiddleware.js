/**
 * BYND Global Error Handling Middleware
 * Ensures all errors are returned in a consistent JSON format.
 */

const notFound = (req, res, next) => {
  const error = new Error(`Protocol Breach: Endpoint Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Handle Zod Validation Errors
  if (err.name === 'ZodError' || err.issues) {
    statusCode = 400;
    message = err.issues ? err.issues.map(i => i.message).join(', ') : err.message;
  }

  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }

  // Handle MongoDB Duplicate Key Error (Code 11000)
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists in the sovereign node.`;
  }

  res.status(statusCode).json({
    msg: message,
    stack: process.env.NODE_ENV === 'production' ? '🔒' : err.stack,
    timestamp: new Date().toISOString(),
    path: req.originalUrl
  });
};

module.exports = { notFound, errorHandler };

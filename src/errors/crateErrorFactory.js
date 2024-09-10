class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = "AppError"
    this.message = message
    this.statusCode = statusCode
  }
}

class ValidationError extends AppError {
  constructor(message, statusCode) {
    super(message)
    this.name = "ValidationError"
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = { AppError, ValidationError }

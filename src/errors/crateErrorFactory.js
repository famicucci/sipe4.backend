class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = "AppError"
    this.statusCode = statusCode
    this.message = message
  }
}

class ValidationError extends AppError {
  constructor(message, statusCode) {
    super(message)
    this.message = message
    this.name = "ValidationError"
    this.statusCode = statusCode
  }
}

module.exports = { AppError, ValidationError }

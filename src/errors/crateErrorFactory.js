const errorFactory = function (name) {
  return class ErrorBusiness extends Error {
    constructor(message, statusCode) {
      super(message)
      this.name = name
      this.message = message
      this.statusCode = statusCode
      // this.stack = ''
    }
  }
}

const AppError = errorFactory("AppError")
module.exports = { AppError }

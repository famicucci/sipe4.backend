const errorFactory = function (name) {
  return class ErrorBusiness extends Error {
    constructor(message, statusCode) {
      super(message)
      this.name = name
      this.message = message
      this.statusCode = statusCode
      //   this.stack = ""
    }
  }
}

const AppError = errorFactory("AppError")
module.exports = { AppError }
// class AppError extends Error {
//   constructor(message, statusCode) {
//     super(message)
//     this.statusCode = statusCode
//     this.status = statusCode.startsWith("4") ? "fail" : "error"
//     this.isOperational = true

//     Error.captureStackTrace(this, this.constructor)
//   }
// }

// module.exports = { AppError }

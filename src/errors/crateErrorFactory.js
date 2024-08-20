const errorFactory = function (name) {
  return class ErrorBusiness extends Error {
    constructor(message) {
      super(message)
      this.name = name
      //   this.stack = ""
    }
  }
}
const Error = errorFactory("Error")

module.exports = { Error }

const errorFactory = function (name) {
  return class ErrorBusiness extends Error {
    constructor(message) {
      super(message)
      this.name = name
      //   this.stack = ""
    }
  }
}
const ErrosValidations = errorFactory("ValidationError")

module.exports = { ErrosValidations }

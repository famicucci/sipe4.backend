const errorValidation = function (name) {
  return class ErrorBusiness extends Error {
    constructor(message) {
      super(message)
      this.name = name
      //   this.stack = ""
    }
  }
}
const ErrosValidations = errorValidation("ValidationError")

module.exports = { ErrosValidations }

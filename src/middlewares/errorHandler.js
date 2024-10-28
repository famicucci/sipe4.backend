const { AppError } = require("../errors/crateErrorFactory")

const errorHandler = (error, req, res, next) => {
  console.log(error)
  if (!(error instanceof AppError)) {
    error = new AppError("Algo salió mal", 500)
  }

  res.status(error.statusCode).send({
    error: error.name,
    message: error.message,
    status: error.statusCode,
  })
}

module.exports = errorHandler

const errorHandler = (err, req, res, next) => {
  try {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
      error: err.name || "Error",
      message: err.message || "Something went wrong",
      statusCode: statusCode,
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = errorHandler

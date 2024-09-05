const jwt = require("jsonwebtoken")
const { AppError } = require("../errors/crateErrorFactory.js")

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]

  if (!authHeader) {
    throw new AppError("unauthorized", 401)
  }

  const token = authHeader.split(" ")[1]

  if (!token) {
    throw new AppError("Token invalid", 401)
  }
  let payload = {}

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = payload.userId
    req.userRol = payload.userRol
    req.userCompanyId = payload.CompanyId

    next()
  } catch (error) {
    next(error)
  }
}
module.exports = authToken

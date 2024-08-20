const jwt = require("jsonwebtoken")
const { AppError } = require("../errors/crateErrorFactory")

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]

  if (!authHeader) {
    throw new AppError("unauthorized")
  }

  const token = authHeader.split(" ")[1]
  if (!token) {
    throw new AppError("Token invalid")
  }
  let payload = {}

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = payload.userId
    req.userRol = payload.userRol
    req.userCompanyId = payload.CompanyId

    next()
  } catch (error) {
    if (error instanceof AppError) {
      res.status(401).send({ error: error.message })
    }
  }
}
module.exports = authToken

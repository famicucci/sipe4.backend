const jwt = require("jsonwebtoken")
const { Error } = require("../errors/crateErrorFactory")

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]

  if (!authHeader) {
    throw new Error("unauthorized")
  }

  const token = authHeader.split(" ")[1]
  if (!token) {
    throw new Error("Token invalid")
  }
  let payload = {}

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = payload.userId
    req.userRol = payload.userRol
    req.userCompanyId = payload.payload.CompanyId
    next()
  } catch (error) {
    if (err instanceof Error) {
      res.status(401).json({ error: err.message })
    }
  }
}
module.exports = authToken

const jwt = require("jsonwebtoken")

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]

  if (!authHeader) {
    return res.status(400).json({ msj: "unauthorized" })
  }

  const token = authHeader.split(" ")[1]
  if (!token) {
    return res.status(401).json({ msj: "Token invalid" })
  }
  let payload = {}

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = payload.userId
    req.userRol = payload.userRol
    req.userCompanyId = payload.userCompanyId

    next()
  } catch (error) {
    res.statusMessage = "Error token"
    return res.status(401).end()
  }
}
module.exports = authToken

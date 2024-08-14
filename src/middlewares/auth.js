const jwt = require("jsonwebtoken")

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]

  if (!authHeader) {
    res.statusMessage = "unauthorized"
    return res.status(400).end()
  }

  const token = authHeader.split(" ")[1]
  if (!token) {
    res.statusMessage = "Token invalid"
    return res.status(401).end()
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

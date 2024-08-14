const jwt = require("jsonwebtoken")

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]

  if (!authHeader) {
    return res.status(400).send({ msj: "must register" })
  }
  const token = authHeader.split(" ")[1]
  let payload = {}

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = payload.userId
    req.userRol = payload.userRol
    req.userCompanyId = payload.userCompanyId

    next()
  } catch (error) {
    console.error("Token verification error:", error)
    res.statusMessage = "Token is invalid"
    return res.status(401).end()
  }
}

module.exports = authToken

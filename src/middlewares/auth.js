const jwt = require("jsonwebtoken")

const authToken = (req, res, next) => {
  if (!req.headers["user-token"]) {
    return res.status(400).send({ msj: "must register" })
  }
  const userToken = req.headers["user-token"]
  let payload = {}

  try {
    const payload = jwt.verify(userToken, process.env.JWT_SECRET)

    req.userId = payload.userId
    req.userRol = payload.userRol
    req.userCompanyId = payload.userCompanyId

    next()
  } catch (error) {
    res.statusMessage = "Token is invalid"
    return res.status(401).end()
  }
}

module.exports = authToken

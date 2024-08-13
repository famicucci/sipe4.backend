const jwt = require("jsonwebtoken")

const authToken = (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth) {
    res.statusMessage = "is not authorized"
    return res.status(401).end()
  }

  const token = auth.split(" ")[1]
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // if(decoded.expiredIn<)
    req.user = decoded
    next()
  } catch (error) {
    res.statusMessage = "token invalid"
    return res.status(500).end()
  }
}
module.exports = authToken

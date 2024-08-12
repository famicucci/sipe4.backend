const jwt = require("jsonwebtoken")

export const generateJWT = () => {
  const token = jwt.sign(process.env.JWT_SECRET, {
    expiresIn: "2d",
  })
  return token
}

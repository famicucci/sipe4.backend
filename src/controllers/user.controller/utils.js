const jwt = require("jsonwebtoken")
const { serialize } = require("cookie")

const generateJWT = (user) => {
  const token = jwt.sign(
    { userType: user.rol ? "admin" : "user" },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  )
  return token
}

const createCookie = (token) => {
  return serialize("userToken", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "strict",
    secure: false,
  })
}
module.exports = { generateJWT, createCookie }

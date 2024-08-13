const db = require("../models")
const { User } = db
const { serialize } = require("cookie")
const bcryptjs = require("bcryptjs")
const generateJWT = require("../utils/token")

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { user: req.body.user } })
    if (user) {
      const verifyPassword = bcryptjs.compareSync(
        req.body.password,
        user.password
      )

      if (verifyPassword) {
        const token = generateJWT(user)
        const serialized = serialize("userToken", token, {
          // httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
          sameSite: "strict",
          secure: false,
        })
        res.send({ success: token, userType: usuario.rol ? "admin" : "user" })
      } else {
        res.statusMessage = "Error in username or password"
        return res.status(400).end()
      }
    }
  } catch (error) {
    res.statusMessage = "error"
    return res.status(500).end()
  }
}

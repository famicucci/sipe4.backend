const { serialize } = require("cookie")
const bcryptjs = require("bcryptjs")
const { generateJWT } = require("../utils/jwt")
const db = require("../models")
const { User } = db

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { user: req.body.user } })

    if (!user) {
      res.statusMessage = "Error in username or password"
      return res.status(400).end()
    }

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

      res.setHeader("Set-Cookie", serialized)
      return res.send({ success: token, userType: user.rol ? "admin" : "user" })
    } else {
      res.statusMessage = "Error in username or password"
      return res.status(400).end()
    }
  } catch (error) {
    console.error(error)
    res.statusMessage = "Error"
    return res.status(500).end()
  }
}

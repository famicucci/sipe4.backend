const { serialize } = require("cookie")
const bcryptjs = require("bcryptjs")
const { generateJWT } = require("../utils/jwt")
const db = require("../models")
const { User } = db
const { ErrosValidations } = require("../Error/errorUser")

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { user: req.body.user } })

    if (!user) {
      throw new ErrosValidations("Error in username and/or password")
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
      throw new ErrosValidations("Error in username and/or password")
    }
  } catch (err) {
    if (err instanceof ErrosValidations) {
      res.status(400).json({ error: err.message })
    }
  }
}

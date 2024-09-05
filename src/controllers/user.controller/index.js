const bcryptjs = require("bcryptjs")
const { generateJWT, createCookie } = require("./utils")
const db = require("../../models")
const { User } = db
const { ValidationError } = require("../../errors/crateErrorFactory")

exports.loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { user: req.body.user } })

    if (!user) {
      throw new ValidationError("Error in username and/or password", 401)
    }

    const verifyPassword = bcryptjs.compareSync(
      req.body.password,
      user.password
    )

    if (verifyPassword) {
      const token = generateJWT(user)
      const serialized = createCookie(token)

      res.setHeader("Set-Cookie", serialized)
      return res.json({ success: token, userType: user.rol ? "admin" : "user" })
    } else {
      throw new ValidationError("Error in username and/or password", 401)
    }
  } catch (error) {
    next(error)
  }
}

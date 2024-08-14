const express = require("express")
const authToken = require("../middlewares/auth")
const userController = require("../controllers/userController")

const router = express.Router()

router.post("/login", userController.loginUser)

module.exports = router

const express = require("express")
const userController = require("../controllers/user.controller/index")

const router = express.Router()

router.post("/login", userController.loginUser)

module.exports = router

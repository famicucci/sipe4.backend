const express = require("express")
const authToken = require("../middlewares/auth")
const priceController = require("../controllers/price.controller/index")

const router = express.Router()

router.get("/prices", authToken, priceController.getPrices)

module.exports = router

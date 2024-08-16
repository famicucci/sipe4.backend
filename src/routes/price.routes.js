const express = require("express")
const priceController = require("../controllers/price.controller/index")

const router = express.Router()

router.get("/price", priceController.getPrices)

module.exports = router

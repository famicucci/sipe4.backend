const express = require("express")
const authToken = require("../middlewares/auth")
const productController = require("../controllers/productController")

const router = express.Router()

router.get("/products", authToken, productController.getProducts)

module.exports = router

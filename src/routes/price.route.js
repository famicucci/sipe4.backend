const { Router } = require("express");
const priceController = require("../controllers/price.controller.js");
const router = Router();

router.get("/prices", priceController.getPrices);

module.exports = router;

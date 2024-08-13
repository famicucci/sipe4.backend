const { Router } = require("express");
const priceController = require("../controllers/priceController.js");
const router = Router();

router.get("/price", priceController.getPrices);

module.exports = router;

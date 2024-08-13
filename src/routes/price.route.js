const { Router } = require("express");
const priceController = require("../controllers/priceController.js");
const router = Router();

router.get("/price", priceController.getPrices);

router.get("/price/:id", priceController.getPrice);

router.post("/price", priceController.postPrice);

router.put("/price/:id", priceController.putPrice);

router.delete("/price/:id", priceController.deletePrice);

module.exports = router;

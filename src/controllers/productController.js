// const { Product } = require("../models/productModel")

const db = require("../models")
const { Product } = db

exports.getProduct = async (req, res) => {
  try {
    const productsList = await Product.findAll({
      attributes: ["code", "description"],
    })

    res.json(productsList)
  } catch (error) {
    res.statusMessage = "product list not found"
    return res.status(404).end()
  }
}

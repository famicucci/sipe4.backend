const db = require("../models")
const { Product } = db

exports.getProduct = async (req, res) => {
  try {
    const productsList = await Product.findAll({
      attributes: ["code", "description"],
    })

    res.status(200).send(productsList)
  } catch (error) {
    res.statusMessage = "product list not found"
    return res.status(404).end()
  }
}

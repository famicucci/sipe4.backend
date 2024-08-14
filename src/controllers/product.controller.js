const db = require("../models")
const { Product } = db

exports.getProducts = async (req, res) => {
  try {
    const productList = await Product.findAll({
      attributes: ["code", "description"],
    })

    res.status(200).send(productList)
  } catch (error) {
    res.statusMessage = "product list not found"
    return res.status(404).end()
  }
}

const db = require("../../models/index")
const { Product } = db

exports.getProducts = async (req, res, next) => {
  try {
    const productList = await Product.findAll({
      attributes: ["code", "description"],
    })

    res.status(200).send(productList)
  } catch (error) {
    next(error)
  }
}
  
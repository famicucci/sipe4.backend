// const { Product } = require("../models/productModel")

const db = require("../models")
const { Product } = db

exports.getProduct = async (req, res) => {
  try {
    const getProductsList = await Product.findAll({
      attributes: ["code", "description"],
    })

    if (!getProductsList.length > 0) {
      res.statusMessage = "No hay lista aun"
      return res.status(404).end()
    }

    res.json({ msg: "Lista de productos encontrada", getProductsList })
  } catch (error) {
    res.statusMessage = "Lista no encontrada"
    return res.status(404).end()
  }
}

const db = require("../../models/index")
const { Product } = db
const { Op } = require("sequelize")

exports.getProducts = async (req, res, next) => {
  const searchQuery = req.query.search

  try {
    const productList = await Product.findAll({
      attributes: ["code", "description"],
      where: {
        [Op.or]: [
          { code: { [Op.like]: `%${searchQuery}%` } },
          { description: { [Op.like]: `%${searchQuery}%` } },
        ],
      },
    })

    res.status(200).send(productList)
  } catch (error) {
    next(error)
  }
}

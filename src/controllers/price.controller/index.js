const db = require("../../models/index")
const { Price, Product } = db
const { Op } = require("sequelize")

exports.getPrices = async (req, res, next) => {
  const searchQuery = req.query.search

  try {
    const prices = await Price.findAll({
      attributes: ["productCode", "amount"],
      include: [
        {
          model: Product,
          attributes: ["description"],
        },
      ],
      where: {
        [Op.or]: [
          { productCode: { [Op.like]: `%${searchQuery}%` } },
          {
            "$Product.description$": { [Op.like]: `%${searchQuery}%` },
          },
        ],
      },
      raw: true,
    })
    res.status(200).send(prices)
  } catch (error) {
    next(error)
  }
}

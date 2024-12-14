const db = require("../../models/index")
const { Price, Product } = db
const { Op } = require("sequelize")

exports.getPrices = async (req, res, next) => {
  const searchQuery = req.query.search
  const page = req.query.page
  const pageSize = 20

  try {
    const prices = await Price.findAll({
      attributes: ["productCode", "amount"],
      where: {
        [Op.or]: [
          { productCode: { [Op.like]: `%${searchQuery}%` } },
          {
            "$Product.description$": { [Op.like]: `%${searchQuery}%` },
          },
        ],
      },
      include: [
        {
          model: Product,
          attributes: ["description"],
        },
      ],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    })
    res.status(200).send(prices)
  } catch (error) {
    next(error)
  }
}

const db = require("../../models/index")
const { Price, Product } = db

exports.getPrices = async (req, res, next) => {
  try {
    const prices = await Price.findAll({
      attributes: ["productCode", "amount"],
      include: [
        {
          model: Product,
          attributes: ["description"],
        },
      ],
    })

    res.status(200).send(prices)
  } catch (error) {
    next(error)
  }
}

const db = require("../../models/index")
const { Price } = db
const { AppError, ValidationError } = require("../../errors/crateErrorFactory")

exports.getPrices = async (req, res, next) => {
  try {
    const prices = await Price.findAll({
      attributes: ["id", "amount"],
    })

    throw new ValidationError("Error precios", 400)

    res.status(200).send(prices)
  } catch (error) {
    next(error)
  }
}

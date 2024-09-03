const db = require("../../models/index")
const { Price } = db
const { AppError } = require("../../errors/crateErrorFactory")

exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.findAll({
      attributes: ["id", "amount"],
    })

    res.status(200).send(prices)
  } catch (error) {
    const newError = new AppError(error.message)
    res.status(400).send({ error: newError.name, message: newError.message })
  }
}

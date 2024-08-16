const db = require("../../models/index")
const { Price } = db

exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.findAll({
      attributes: ["id", "amount"],
    })

    res.status(200).send(prices)
  } catch (error) {
    console.error("Error in getPrices:", error)
    res.statusMessage = "prices not found"
    return res.status(400).end()
  }
}

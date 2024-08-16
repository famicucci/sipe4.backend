const db = require("../../models/index")
const { Price } = db

exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.findAll({
      attributes: ["id", "description"],
      where: { companyId: req.userCompanyId, state: "current" },
    })

    res.status(200).send(prices)
  } catch (error) {
    res.statusMessage = "prices not found"
    return res.status(404).end()
  }
}

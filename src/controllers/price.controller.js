const db = require("../models");
const { Price } = db;

exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.findAll();
    res.status(200).send(prices);
  } catch (error) {
    res.statusMessage = "prices not found";
    return res.status(404).end();
  }
};

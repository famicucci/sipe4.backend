const db = require("../models");
const { Price } = db;

exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.findAll();

    res.status(200).send({
      ok: true,
      status: 200,
      body: prices,
    });
  } catch (error) {
    res.statusMessage = "prices not found";
    return res.status(404).end();
  }
};

exports.getPrice = async (req, res) => {
  try {
    const id = req.params.id;
    const price = await Price.findOne({
      where: { id },
    });

    res.status(200).json({
      ok: true,
      status: 200,
      body: price,
    });
  } catch (error) {
    res.statusMessage = "price not found";
    return res.status(404).end();
  }
};

exports.postPrice = async (req, res) => {
  try {
    /*  const dataPrice = req.body;
    await Price.sync();
    const createPrice = await Price.create({
      amount: dataPrice.amount,
      currency: dataPrice.currency,
    });
    res.status(201).json({
      ok: true,
      status: 201,
      message: "price created",
    });*/
  } catch (error) {
    /* res.statusMessage = "price not created";
    return res.status(409).end();*/
  }
};

exports.putPrice = async (req, res) => {
  try {
    /*  const id = req.params.id;
    const dataPrice = req.body;
    const updatePrice = await Price.update(
      {
        amount: dataPrice.amount,
        currency: dataPrice.currency,
      },
      { where: { id } }
    );
    res.status(200).json({
      ok: true,
      status: 200,
      body: updatePrice,
    });*/
  } catch (error) {
    /*  res.statusMessage = "price not updated";
    return res.status(409).end();*/
  }
};

exports.deletePrice = async (req, res) => {
  try {
    /* const id = req.params.id;
    const deletePrice = await Price.destroy({ where: { id } });
    res.status(200).json({
      ok: true,
      status: 200,
      body: deletePrice,
    });*/
  } catch (error) {
    /* res.statusMessage = "price not deleted";
    return res.status(500).end();*/
  }
};

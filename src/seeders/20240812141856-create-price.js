"use strict";
const moment = require("moment");

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let precios = [
      {
        productCode: "PJ100027LM",
        amount: "1850",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "PJ100022LM",
        amount: "1760",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "RA100031LM",
        amount: "1320",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "CTC100099SN",
        amount: "1425",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "RDM100103SN",
        amount: "1330",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100104SG",
        amount: "1520",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100105SB",
        amount: "1520",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100110MG",
        amount: "1520",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100111MA",
        amount: "1220",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100112MR",
        amount: "1010",
        listPriceId: "1",
        createdAt: moment().format(),
      },
      {
        productCode: "PJ100027LM",
        amount: "1010",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "PJ100022LM",
        amount: "1200",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "RA100031LM",
        amount: "1200",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "CTC100099SN",
        amount: "1200",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "RDM100103SN",
        amount: "1250",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100104SG",
        amount: "1250",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100105SB",
        amount: "1190",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100110MG",
        amount: "1190",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100111MA",
        amount: "1190",
        listPriceId: "2",
        createdAt: moment().format(),
      },
      {
        productCode: "RDA100112MR",
        amount: "1190",
        listPriceId: "2",
        createdAt: moment().format(),
      },
    ];
    await queryInterface.bulkInsert("price", precios, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("price", null, {});
  },
};

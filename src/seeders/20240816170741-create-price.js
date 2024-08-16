"use strict"
/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let prices = [
      {
        productCode: "PJ100027LM",
        amount: "1850",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "PJ100022LM",
        amount: "1760",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RA100031LM",
        amount: "1320",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "CTC100099SN",
        amount: "1425",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDM100103SN",
        amount: "1330",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100104SG",
        amount: "1520",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100105SB",
        amount: "1520",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100110MG",
        amount: "1520",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100111MA",
        amount: "1220",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100112MR",
        amount: "1010",
        listPriceId: "1",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "PJ100027LM",
        amount: "1010",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "PJ100022LM",
        amount: "1200",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RA100031LM",
        amount: "1200",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "CTC100099SN",
        amount: "1200",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDM100103SN",
        amount: "1250",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100104SG",
        amount: "1250",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100105SB",
        amount: "1190",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100110MG",
        amount: "1190",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100111MA",
        amount: "1190",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
      {
        productCode: "RDA100112MR",
        amount: "1190",
        listPriceId: "2",
        createdAt: new Date().toISOString(),
      },
    ]
    await queryInterface.bulkInsert("price", prices, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("price", null, {})
  },
}

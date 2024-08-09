"use strict"
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    let products = [
      {
        code: "PJ100027LM",
        description: "Pantalon joggin-lineas horizontales-m-marrón",
        companyId: 1,
      },
      {
        code: "PJ100022LM",
        description: "Pantalon joggin-lineas verticales-m-gris",
        companyId: 1,
      },
      {
        code: "RA100031LM",
        description: "Remera algodón-basketball-s-negro",
        companyId: 1,
      },
      {
        code: "CTC100099SN",
        description: "Camiseta termica c/cierre-s-negro",
        companyId: 1,
      },
      {
        code: "RDM100103SN",
        description: "Remera de modal-s-negro",
        companyId: 1,
      },
      {
        code: "RDA100104SG",
        description: "Remera de algodón-s-gris",
        companyId: 1,
      },
      {
        code: "RDA100105SB",
        description: "Remera de algodón-s-blanca",
        companyId: 1,
      },
      {
        code: "RDA100110MG",
        description: "Buzo de algodón frisado-m-gris",
        companyId: 1,
      },
      {
        code: "RDA100111MA",
        description: "Buzo de algodón frisado-m-amarillo",
        companyId: 1,
      },
      {
        code: "RDA100112MR",
        description: "Buzo de algodón frisado-m-rojo",
        companyId: 1,
      },
    ]

    await queryInterface.bulkInsert("Product", products, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Product", null, {})
  },
}

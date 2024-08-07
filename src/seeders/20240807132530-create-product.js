"use strict"
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    let products = [
      {
        code: "PJ100027LM",
        description: "Pantalon joggin-lineas horizontales-m-marrón",
        company: 1,
      },
      {
        code: "PJ100022LM",
        description: "Pantalon joggin-lineas verticales-m-gris",
        company: 1,
      },
      {
        code: "RA100031LM",
        description: "Remera algodón-basketball-s-negro",
        company: 1,
      },
      {
        code: "CTC100099SN",
        description: "Camiseta termica c/cierre-s-negro",
        company: 1,
      },
      {
        code: "RDM100103SN",
        description: "Remera de modal-s-negro",
        company: 1,
      },
      {
        code: "RDA100104SG",
        description: "Remera de algodón-s-gris",
        company: 1,
      },
      {
        code: "RDA100105SB",
        description: "Remera de algodón-s-blanca",
        company: 1,
      },
      {
        code: "RDA100110MG",
        description: "Buzo de algodón frisado-m-gris",
        company: 1,
      },
      {
        code: "RDA100111MA",
        description: "Buzo de algodón frisado-m-amarillo",
        company: 1,
      },
      {
        code: "RDA100112MR",
        description: "Buzo de algodón frisado-m-rojo",
        company: 1,
      },
    ]

    await queryInterface.bulkInsert("Product", products, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Product", null, {})
  },
}

"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let productos = [
      {
        codigo: "PJ100027LM",
        descripcion: "Pantalon joggin-lineas horizontales-m-marrón",
        company: 1,
      },
      {
        codigo: "PJ100022LM",
        descripcion: "Pantalon joggin-lineas verticales-m-gris",
        company: 1,
      },
      {
        codigo: "RA100031LM",
        descripcion: "Remera algodón-basketball-s-negro",
        company: 1,
      },
      {
        codigo: "CTC100099SN",
        descripcion: "Camiseta termica c/cierre-s-negro",
        company: 1,
      },
      {
        codigo: "RDM100103SN",
        descripcion: "Remera de modal-s-negro",
        company: 1,
      },
      {
        codigo: "RDA100104SG",
        descripcion: "Remera de algodón-s-gris",
        company: 1,
      },
      {
        codigo: "RDA100105SB",
        descripcion: "Remera de algodón-s-blanca",
        company: 1,
      },
      {
        codigo: "RDA100110MG",
        descripcion: "Buzo de algodón frisado-m-gris",
        company: 1,
      },
      {
        codigo: "RDA100111MA",
        descripcion: "Buzo de algodón frisado-m-amarillo",
        company: 1,
      },
      {
        codigo: "RDA100112MR",
        descripcion: "Buzo de algodón frisado-m-rojo",
        company: 1,
      },
    ]

    await queryInterface.bulkInsert("producto", productos, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}

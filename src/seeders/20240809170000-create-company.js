"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let companies = [
      {
        name: "Santas Sport",
      },
      {
        name: "Pepa Pets",
      },
    ]
    await queryInterface.bulkInsert("company", companies, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("company", null, {})
  },
}

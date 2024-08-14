"use strict"
const bcryptjs = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = [
      {
        name: "Fran Micucci",
        password: bcryptjs.hashSync("123456", 10),
        user: "famicucci",
        rol: true,
        companyId: 1,
        createdAt: new Date().toISOString(),
      },
      {
        name: "admin",
        password: bcryptjs.hashSync("admin", 10),
        user: "admin",
        rol: true,
        companyId: 1,
        createdAt: new Date().toISOString(),
      },
    ]
    await queryInterface.bulkInsert("user", users, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {})
  },
}

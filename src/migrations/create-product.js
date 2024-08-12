"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: { type: Sequelize.STRING(15), allowNull: false, unique: true },
      description: { type: Sequelize.STRING(120), allowNull: false },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "company",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("product")
  },
}

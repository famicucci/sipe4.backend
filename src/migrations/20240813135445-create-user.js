"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      user: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      rol: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "company", key: "id" },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user")
  },
}

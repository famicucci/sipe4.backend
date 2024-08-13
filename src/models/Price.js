const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {}
  Price.init(
    {
      amount: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
      },
      listPriceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "price", // Nombre de la tabla en la db
      timestamps: true,
    }
  );
  return Price;
};

const { DataTypes, Model } = require("sequelize");

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

// the defined model is the class itself
console.log("Models are: " + (Price === sequelize.models.Price)); // true

module.exports = Price;

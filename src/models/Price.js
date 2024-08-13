module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define(
    "Price",
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
      modelName: "Price",
      tableName: "price", // Nombre de la tabla en la db
      timestamps: false,
    }
  );

  // Price.associate=(models)=>{

  // }
  return Price;
};

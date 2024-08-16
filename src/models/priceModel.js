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
      tableName: "price",
      timestamps: false,
    }
  )
  Price.associate = (models) => {
    Price.belongsTo(models.Product, {
      foreignKey: { name: "ProductCode", allowNull: false },
      targetKey: "code",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
  }
  return Price
}

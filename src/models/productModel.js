module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      modelName: "Product",
      tableName: "Product",
      timestamps: false,
    }
  )
  Product.associate = (models) => {
    Product.belongsTo(models.Company, {
      foreignKey: "companyId",
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
  }

  return Product
}

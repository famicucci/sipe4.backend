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
      // companyId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "Company",
      //     key: "id",
      //   },
      // },
    },
    {
      modelName: "Product",
      tableName: "product",
      timestamps: false,
    }
  )
  Product.associate = (models) => {
    Product.belongsTo(models.Company, {
      foreignKey: { allowNull: false },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    Product.hasMany(models.Price, {
      foreignKey: {
        name: "ProductCode",
        allowNull: false,
      },
      sourceKey: "code",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
  }

  return Product
}

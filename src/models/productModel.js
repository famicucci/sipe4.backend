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
      company: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "empresa",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
    },
    {
      modelName: "Product",
      tableName: "Product",
      timestamps: false,
    }
  )
  return Product
}

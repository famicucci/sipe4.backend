module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Company",
      tableName: "company",
      timestamps: false,
    }
  )
  return Company
}

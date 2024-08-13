const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require(path.resolve(__dirname, "../config/database.js"));

const basename = path.basename(__filename);

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

/*async function testconnection() {
  try {
    await sequelize.authenticate();
    console.log("todo bien :)");
  } catch (err) {
    console.log("Error  =>   " + err);
  }
}
testconnection();*/

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );

    db[model.name] = model;
  });

// Realiza las asociaciones de los modelos
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

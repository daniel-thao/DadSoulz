"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
  console.log("True\n\n");
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
  console.log("\n\nFalse\n\n");
}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach(function (file) {
    const variableName = file.slice(0, file.length - 3);
    const model = require(path.join(__dirname, variableName));
    db[model(sequelize, DataTypes).name] = model(sequelize, DataTypes);
  });

// this one sync all the models at once in order Synchronously
async () => {
  await sequelize.sync({ force: true });
};

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

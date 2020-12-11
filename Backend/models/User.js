// "use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      accountName: DataTypes.STRING,
      hashedPW: DataTypes.STRING,
      email: DataTypes.STRING,
      level: DataTypes.INTEGER,
      hp: DataTypes.INTEGER,
      // wins: DataTypes.INTEGER,
      // loses: DataTypes.INTEGER,
      // weaponID: DataTypes.INTEGER,
      // headID: DataTypes.INTEGER,
      // chestID: DataTypes.INTEGER,
      // pantsID: DataTypes.INTEGER,
      // feetID: DataTypes.INTEGER
    },
    {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,
    }
  );

  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};

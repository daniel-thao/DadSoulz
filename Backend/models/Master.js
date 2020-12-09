module.exports = function (sequelize, DataTypes) {
  const Master = sequelize.define(
    "Master",
    {
      slot: DataTypes.STRING,
      meleeStat: DataTypes.TEXT,
      defenceStat: DataTypes.INTEGER,
      magicStat: DataTypes.INTEGER,
    },
    {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,
    }
  );
  return Master;
};

module.exports = function(sequelize, DataTypes) {
    var Master = sequelize.define("Master", {
      slot: DataTypes.STRING,
      meleeStat: DataTypes.TEXT,
      defenceStat: DataTypes.INTEGER,
      magicStat: DataTypes.INTEGER
    });
    return Master;
  };
  
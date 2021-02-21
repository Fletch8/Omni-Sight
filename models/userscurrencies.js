'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersCurrencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usersCurrencies.init({
    userId: DataTypes.INTEGER,
    currencyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usersCurrencies',
  });
  return usersCurrencies;
};
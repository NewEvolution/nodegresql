'use strict';
module.exports = function(sequelize, DataTypes) {
  var frienemy = sequelize.define('frienemy', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    friend: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return frienemy;
};
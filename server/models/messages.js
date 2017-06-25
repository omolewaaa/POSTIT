'use strict';
module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define('messages', {
    message: DataTypes.STRING,
    groupname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return messages;
};
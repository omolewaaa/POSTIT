'use strict';
module.exports = function(sequelize, DataTypes) {
  var addMember = sequelize.define('addMember', {
    groups_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return addMember;
};
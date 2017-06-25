'use strict';
module.exports = function(sequelize, DataTypes) {
  var groups = sequelize.define('groups', {
    groupname: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        users.hasMany(groups, {
        foreignKey: {
        name: 'users_id',
        allowNull: false
  }
})
      }
    }
  });
  return groups;
}
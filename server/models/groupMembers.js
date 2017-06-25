
module.exports = function(sequelize, DataTypes) {
  var groupMembers = sequelize.define('groupMembers', {
    groupname: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return groupMembers;
};
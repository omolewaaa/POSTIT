
module.exports = (sequelize, DataTypes) => {
  const groups = sequelize.define('groups', {
    username:{ 
      type: DataTypes.STRING,
    allowNull: false,
  },
    groupname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
  });
  return groups;
};




module.exports = (sequelize, DataTypes) => {
  const messageBoxes = sequelize.define('messageBoxes', {
    message: {
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
  return messageBoxes;
};



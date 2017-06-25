const validate = require("validate.js");
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      isEmail: { msg: 'Invalid email'}
    }
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false,   
   },
   },
   {
    classMethods: {
      associate: (models) => {
        users.hasMany(models.groups, {
         // foreignKey: 'usersId',
         // as: 'users',
        });
     },
    }, 
  });
  return users;
};


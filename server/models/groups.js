module.exports = (sequelize, DataTypes) => {
  const groups = sequelize.define('groups', {
    groupname:{
    type: DataTypes.STRING,
    allowNull:false
  },
   users_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        groups.hasMany(users, {
        //foreignKey: {
       // name: 'users_id',
       // allowNull: false
        });
     },
  },

  });
  return groups;
};


module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('messageBoxes', {
      message: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      groupname: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
 down: (queryInterface  /*, Sequelize*/) =>
    queryInterface.dropTable('messageBoxes');
  }
};
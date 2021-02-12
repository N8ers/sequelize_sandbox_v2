/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('User', {
        userName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        }
      }),
      // queryInterface.removeColumn('Tweet', 'creator'),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('User'),
      // queryInterface.addColumn('Tweet', 'creator', {
      //   type: Sequelize.DataTypes.STRING,
      //   allowNull: false
      // })
    ]) 
  }
};
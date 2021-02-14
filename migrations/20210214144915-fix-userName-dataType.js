/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([
      await queryInterface.removeColumn('Users', 'userName'),
      await queryInterface.addColumn('Users', 'userName', {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all ([
      await queryInterface.removeColumn('Users', 'userName'),
      await queryInterface.addColumn('Users', 'userName', {
        allowNull: false,
        type: Sequelize.DATE
      })
    ])
  }
};

/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'userName', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      type: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'userName')
  }
};

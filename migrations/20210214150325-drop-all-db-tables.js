/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([
      await queryInterface.dropTable('Tweets'),
      await queryInterface.dropTable('Users')
    ])
  },

  down: async (queryInterface, Sequelize) => {
  }
};
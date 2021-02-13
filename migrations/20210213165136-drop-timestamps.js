/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([
      await queryInterface.removeColumn('Users', 'updatedAt'),
      await queryInterface.removeColumn('Users', 'createdAt'),
      await queryInterface.removeColumn('Tweets', 'updatedAt'),
      await queryInterface.removeColumn('Tweets', 'createdAt'),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.addColumn('Users', 'updatedAt', {
        type: Sequelize.DATE
      }),
      await queryInterface.addColumn('Users', 'createdAt', {
        type: Sequelize.DATE
      }),
      await queryInterface.addColumn('Tweets', 'updatedAt', {
        type: Sequelize.DATE
      }),
      await queryInterface.addColumn('Tweets', 'createdAt', {
        type: Sequelize.DATE
      }),
    ])
  }
};

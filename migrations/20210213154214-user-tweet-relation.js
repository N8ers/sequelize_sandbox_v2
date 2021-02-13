/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([
      await queryInterface.removeColumn('Tweets', 'creator', {
        type: Sequelize.STRING
      }),
      await queryInterface.addColumn('Tweets', 'creator_id', {
        type: Sequelize.DataTypes.UUID,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE'
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.removeColumn('Tweets', 'creator_id', {
        type: Sequelize.STRING
      }),
      await queryInterface.addColumn('Tweets', 'creator', {
        type: Sequelize.STRING
      })
    ])
  }
};

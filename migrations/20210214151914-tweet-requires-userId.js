/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Tweets', 'creator_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Tweets', 'creator_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE'
  })
  }
};
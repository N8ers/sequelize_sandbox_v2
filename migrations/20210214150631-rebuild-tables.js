/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
      }),
      await queryInterface.createTable('Tweets', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        creator_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE'
        },
        content: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
      }),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
    await queryInterface.dropTable('Tweets');
  }
};
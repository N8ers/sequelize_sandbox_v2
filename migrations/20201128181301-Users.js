/* eslint-disable linebreak-style */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};

const Sequelize = require('sequelize');

const sequelize = require('../database/index');

const Tweet = sequelize.define('tweet', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: Sequelize.STRING,
});

module.exports = Tweet;

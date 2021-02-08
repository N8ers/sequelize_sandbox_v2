const { Sequelize } = require('sequelize');

// connect to the database
const sequelize = new Sequelize({
  databse: process.env.DATABASE,
  username: 'postgres',
  password: process.env.PASSWORD,
  host: process.env.HOST,
  dialect: 'postgres',
});

module.exports = sequelize;

require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'postgres',
  },
};

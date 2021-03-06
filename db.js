const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_sandbox_v3',
  username: 'postgres',
  password: '2345',
  host: 'localhost',
  dialect: 'postgres',
});

const initializeDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('connection good');
  } catch (error) {
    console.log('connection bad ', error);
  }
};

module.export = { sequelize, initializeDatabaseConnection };

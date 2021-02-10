const { Sequelize } = require('sequelize');
const express = require('express');

const PORT = 3000;
const app = express();

const sequelize = new Sequelize({
  database: 'sequelize_sandbox_v3',
  username: 'postgres',
  password: '2345',
  host: 'localhost',
  dialect: 'postgres',
});

async function initializeDatabaseConnection() {
  try {
    sequelize.authenticate();
    console.log('connection good');
  } catch (error) {
    console.log('connection bad ', error);
  }
}

async function init() {
  await initializeDatabaseConnection();
  app.listen(PORT, () => console.log(`sequelize_sandbox_v2 running on ${PORT}`));
}

init();

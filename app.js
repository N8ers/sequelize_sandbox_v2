require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./database/index');

// import models here
const User = require('./models/user');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const userRoutes = require('./routes/user');

app.use('/user', userRoutes);

// put middleware to grab userid here

async function assertDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('db authentication successful');
    await sequelize.sync({ force: true });
    console.log('sync successful');
  } catch (error) {
    console.log('db authentication failed: \n ', error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnection();
  app.listen(PORT, () => console.log(`Express server on port ${PORT}`));
}

init();

// DROPS tables if they exist, then recreates them

require('dotenv').config();

const sequelize = require('../database/index');

function syncModels() {
  console.log('\nFORCING SYNC\n');
  sequelize.sync({
    logging: console.log,
    force: true,
  });
  console.log('\nFORCE SYNC COMPLETE\n');
}

syncModels();

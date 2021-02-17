const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const { initializeDatabaseConnection } = require('./db');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

async function init() {
  try {
    await initializeDatabaseConnection;
    app.listen(PORT, () => console.log(`sequelize_sandbox_v2 running on ${PORT}`));
  } catch (error) {
    console.log('Error starting app ', error);
  }
}

init();

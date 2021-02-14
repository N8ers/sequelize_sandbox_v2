const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize({
  database: 'sequelize_sandbox_v3',
  username: 'postgres',
  password: '2345',
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

const Tweet = sequelize.define('Tweet', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  creator_id: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

// create User
app.post('/createUser', async (req, res) => {
  if (!req.body.userName) {
    res.json({ error: 'userName is required' });
  }
  User.create({ userName: req.body.userName })
    .then((user) => res.json(user))
    .catch((error) => res.json({ error }));
});

// list all Users
app.get('/listUsers', async (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((error) => res.json({ error }));
});

// create Tweet
app.post('/createTweet', async (req, res) => {
  const { creator_id, content } = req.body;
  Tweet.create({ creator_id, content })
    .then((tweet) => res.json(tweet));
});

// list all tweets
app.get('/allTweets', async (req, res) => {
  Tweet.findAll().then((tweets) => res.json(tweets));
});

app.get('/', (req, res) => {
  res.send('welcome to sequelize_sandbox_v2');
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

const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');

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

const Tweet = sequelize.define('Tweet', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Tweet);
Tweet.belongsTo(User, { foreignKey: 'id' });

Tweet.associate = () => {
  Tweet.belongsTo(User, {
    foreignKey: 'id',
    as: 'Creator',
  });
};

// create User
app.post('/createUser', async (req, res) => {
  User.create({ userName: req.body.userName })
    .then((user) => res.json(user));
});

// list all Users
app.get('/listUsers', async (req, res) => {
  User.findAll().then((users) => res.json(users));
});

// create Tweet
app.post('/createTweet', async (req, res) => {
  const { creator, content } = req.body;
  Tweet.create({ creator, content })
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

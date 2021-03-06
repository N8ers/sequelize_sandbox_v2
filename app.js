const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// const { sequelize } = require('./models');
// const routes = require('./routes');

const PORT = 3000;
const app = express();

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
    allowNull: false,
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

Tweet.belongsTo(User);
User.hasMany(Tweet);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/', routes);

app.post('/createUser', async (req, res) => {
  if (!req.body.userName) {
    res.json({ error: 'userName is required' });
  }
  User.create({ userName: req.body.userName })
    .then((user) => res.json(user))
    .catch((error) => res.json({ error }));
});

app.get('/listUsers', async (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((error) => res.json({ error }));
});

app.post('/createTweet', async (req, res) => {
  const { creator_id, content } = req.body;
  if (!req.body.creator_id) {
    res.json({ error: 'creatorId are required' });
  }
  Tweet.create({ creator_id, content })
    .then((tweet) => res.json(tweet));
});

app.get('/allTweets', async (req, res) => {
  Tweet.findAll()
    .then((tweets) => res.json(tweets))
    .catch((err) => res.send('ERROR: ', err));
});

app.delete('/removeAllTweets', async (req, res) => {
  Tweet.destroy({
    truncate: true,
  })
    .then(() => res.send('ok'))
    .catch((error) => res.send(error));
});

app.delete('/removeAllUsers', async (req, res) => {
  User.destroy({
    truncate: true,
  })
    .then(() => res.send('ok'))
    .catch((error) => res.send(error));
});

app.get('/', (req, res) => {
  res.send('welcome to sequelize_sandbox_v2');
});

async function init() {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => console.log(`sequelize_sandbox_v2 running on ${PORT}`));
  } catch (error) {
    console.log('connection bad ', error);
  }
}

init();

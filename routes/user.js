const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => res.send('welcome to user route'));

router.get('/allUsers', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

router.post('/createUser', async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json(user);
});

module.exports = router;

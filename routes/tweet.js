const express = require('express');
const Tweet = require('../models/tweet');

const router = express.Router();

router.get('/', (req, res) => res.send('welcome to tweet route'));

router.get('/allTweets', async (req, res) => {
  const tweets = await Tweet.findAll();
  res.status(200).json(tweets);
});

router.get('/allUserTweets', async (req, res) => {
  const tweets = await Tweet.findAll({ where: userId = req.body });
  res.status(200).json(tweets);
});

router.post('/createTweet', async (req, res) => {
  const tweet = await Tweet.create(req.body);
  res.status(200).json(tweet);
});

module.exports = router;

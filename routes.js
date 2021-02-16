const router = require('express').Router();

router.post('/createUser', async (req, res) => {
  if (!req.body.userName) {
    res.json({ error: 'userName is required' });
  }
  User.create({ userName: req.body.userName })
    .then((user) => res.json(user))
    .catch((error) => res.json({ error }));
});

router.get('/listUsers', async (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((error) => res.json({ error }));
});

router.post('/createTweet', async (req, res) => {
  const { creator_id, content } = req.body;
  if (!req.body.userName || !req.body.creator_id) {
    res.json({ error: 'userName and creatorId are required' });
  }
  Tweet.create({ creator_id, content })
    .then((tweet) => res.json(tweet));
});

router.get('/allTweets', async (req, res) => {
  Tweet.findAll().then((tweets) => res.json(tweets));
});

router.delete('/removeAllTweets', async (req, res) => {
  Tweet.destroy({
    truncate: true,
  })
    .then(() => res.send('ok'))
    .catch((error) => res.send(error));
});

router.delete('/removeAllUsers', async (req, res) => {
  User.destroy({
    truncate: true,
  })
    .then(() => res.send('ok'))
    .catch((error) => res.send(error));
});

router.get('/', (req, res) => {
  res.send('welcome to sequelize_sandbox_v2');
});

module.exports = router;

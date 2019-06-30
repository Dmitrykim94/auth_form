const express = require('express');
const router = express.Router();
const User = require('../public/models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.route('/login')
  .get((req, res) => {
    res.render('login')
  })
  .post(async (req, res) => {
    let oneUser = await User.findOne({ name: req.body.username, password: req.body.password });
    if (oneUser){
      return res.json({answer: 'successful login'})
    }
    return res.json({answer: 'incorrect data, try again'})
  })

router.route('/register')
  .get((req, res) => {
    res.render('reg')
  })
  .post(async (req, res) => {
    console.log('posted');
    let user = await User.findOne({ name: req.body.username });
    if (user) {
      return res.json({ answer: 'already exists' })
    }
    let newUser = new User({
      name: req.body.username,
      password: req.body.password
    })
    await newUser.save()
    return res.json({ answer: 'successful registration' })
  })

module.exports = router;

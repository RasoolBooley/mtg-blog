var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
var data = {
  title: "Magic the Gathering",
  subtitle: 'Ravnica, Planeswalker',
  blog: Posts, 
  message: false
};

res.render("index", data);
});


module.exports = router;

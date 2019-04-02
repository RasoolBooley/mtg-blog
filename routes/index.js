var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Magic' }


var data = {
  title: "Magic the Gathering",
  posts: Posts, 
  message: false
};

// var cont = {
//   content: "Welcome the Planes of Ravnica, here our heroes will fight Nicol Bolas in the final step of his plan."
// }

res.render("index", data);
});


module.exports = router;

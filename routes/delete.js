// Get before you delete

var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

router.get('/', function(req, res, next) {
    console.log(req.params.postId);
    
    // make a post request to our database
    Request({
        url: 'http://localhost:3004/posts' + req.params.postId,
        method: 'DELETE',
    },
    function(error, response, body) {
        var data = {
            title: "Magic the Gathering",
            posts: Posts, 
            message: 'Your post has been deleted'
          };
          
        res.redirect("..");
    });
});
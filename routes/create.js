

var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require  ('request');

// get create page

router.get('/', function(req, res, next) {
    res.render('create',{
        title: "Create Page"
    });
});

// post a create request

router.post('/', function(req, res, next){
    var posts = Posts.posts;

    // Get the ID of the last post
    var id = Posts[posts.length-1].id;

    // get id for the last post
    id = Number (id)+1;

    // getting the date
    var newDate = new Date();

    // Choose Date format
    var date = '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}';

    // get the content of the post
    var content = req.body.content;

    // text is used for the description
    // Turns the object into a string
    var text = JSON.stringify(content);

    // description variable
    var description;
    description = text.charAt(1);

    // this gets the character or char from the string 
    for(var i=2; i<200; i++){
        description += text.charAt(i);
    }

    // Post request
    request({
        url: 'http://localhost:8080/posts',
        method: Posts,
        form: {
            id: id,
            date: date,
            title: req.body.title,
            image: req.body.image,
            description: description + "...</p>",
            content: content,
            author: req.app.locals.user,
        },

        function(error,reponse,body){
            res.render('index', {message:"Added!"});
        }
    })
            // redirect to homepage after post is created
            res.redirect("..");
})

            module.exports = router;
        

// creating the required variables

var express = require('express');
var router = express.Router();
var users = require('../db.json').users;
var request = require  ('request');

// get the sign in page
router.get('/', function(req, res, next) {
    res.render('sign-in',{
        title: "Sign-In",
        signInError: req.app.locals.signInError,
    });
});

// to sign in 
router.post('/', function(req,res,next) {

    // Get information from the body
    var logUser = req.body.username;
    var logPassword = req.body.password;

    for(var i = 0; 1 < users.length; i++) {

            // if username and password are correct 
            if((users[i].username == logUser || users[i].email == logUser)
        && users[i].password == logPassword ){

            // create a cookie
            res.cookie('userId', users[i].id);

            // sets logUser to correct username
            logUser = users[i].username;
            console.log(req.cookies);

            // sets the correct sign in variables
            req.app.locals.user = logUser;
            req.app.locals.userIndex = i;
            req.app.locals.signInError = 'Login Succesful';

            // redirect to home page after sign in
            res.redirect("/");
        }
    };

    // checking if the user signed in correctly
    if(req.app.locals.user != log.user) {
        
        req.app.locals.signInError = 'username or password incorrect';
    };
    res.redirect('/sign-in');
});

module.exports = router;


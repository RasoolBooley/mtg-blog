// creating the required variables

var express = require('express');
var router = express.Router();
var request = require  ('request');

// get sign out page
router.get('/', function(req, res, next) {
    
    // set default
    req.app.locals.login = false;
    req.app.locals.user = '';
    req.app.locals.signIn = '';
    req.app.locals.regError = '';

    // create a cookie
    res.clearCookie('userId');
    console.log(req.cookies.userId);

    // redirect to home page after sign outs
    res.redirect("/");
});

module.exports = router;
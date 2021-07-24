const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/UserModel')

// for the login-and logout page
router.get('/signup-and-login', function(req, res) {
    res.render('signup', {'title':'john'});
});

// for registering the new user received to our database
router.post('/register-user', function(req, res, next) {
    // username, email, password, avatar
    const {Nuser: username, Npass:password, Nemail:email} = req.body;
    const user = new UserModel({username, email, password});

    user.save().then(re => {
        res.json({'msg':'okay'});
    }).catch (err => {
        res.json({'msg':'bad', 'cause':err.message});
    })
});

function CheckIfUserLoggedIn(req, res, next) {
    // console.log('middleware called');
    // console.log(req, res, 'see user last');
    next();
}

// for Logging into a user account
router.post('/login-this-user',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }),
    (req, res, next) => {
        console.log('done');
    }
);

module.exports = router;
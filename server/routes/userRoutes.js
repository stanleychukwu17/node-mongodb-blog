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
        res.json(re);
    }).catch (err => {
        console.log(err.message, 'cannot read it')
        next(err)
    })
});

// for Logging into a user account
router.post('/login-this-user', passport.authenticate('local'), (req, res, next) => {
    console.log('went through now')
    res.json({'msg':'okay'});
});

module.exports = router;
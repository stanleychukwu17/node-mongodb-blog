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
        res.json({'msg':'bad', 'cause':err.message});
    })
});

console.log('see requyest');
// for Logging into a user account
router.post('/login-this-user', (req, res, next) => {
    passport.authenticate('local', function (err, user, info) {     
        console.log('running now', user, info);
 
        if (err) {
            return res.status(401).json(err);
        }
        if (user) {
            const token = user.generateJwt();
            return res.status(200).json({
                "token": token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res, next)
});

module.exports = router;
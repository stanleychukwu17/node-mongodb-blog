const express = require('express');
const router = express.Router();
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
        console.log('saved to the database')
        res.json(re);
    }).catch (err => {
        console.log(err.message, 'cannot read it')
        next(err)
    })
});

module.exports = router;
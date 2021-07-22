const express = require('express');
const router = express.Router();

// for the login-and logout page
router.get('/signup-and-login', function(req, res) {
    res.render('signup', {'title':'john'});
});

// for registering the new user received to our database
router.post('/register-user', function(req, res) {
    console.log(req.body);
    res.json({'msg':'okay'});
});

module.exports = router;
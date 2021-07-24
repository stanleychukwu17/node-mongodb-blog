const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/UserModel')

passport.use(new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
    console.log('finally now!');
}));

module.exports = {
    initialize: passport.initialize(),
    session: passport.session(),
    setUser: (req, res, next) => {
        res.locals.user = req.user;
        // console.log('called', req.user);
        return next();
    }
}
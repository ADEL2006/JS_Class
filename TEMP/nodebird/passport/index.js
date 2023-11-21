const passport = require('passport');
const User = require('../models/user');
const local = require('./local');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((user, done) => {
        User.findOne({where: {id}})
            .then(user => done(null, user))
            .catch(err => done(err));
    });
    local();
}
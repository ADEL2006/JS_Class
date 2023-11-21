const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError) {
            console.error(authError);
            return next(authError);
        }
        if(!user) {
            return res.redirect(`/?error=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if(loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect(`/`);
        });
    })(req, res, next);
}
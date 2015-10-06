var express = require('express');

var app = express();
var passport = require('passport');
 LocalStrategy = require('passport-local');
 app.use(passport.initialize());

app.use(passport.session());

module.exports = function(app){

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    mongoDbConnection.findUserById(id, function(err, user){
        done(err, user);
    });

});

passport.use(new LocalStrategy(
    function(username, password, done) {
        process.nextTick(function () {

            mongoDbConnection.findUser(username, function(err, user) {

                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, { message: 'Unknown user ' + username });
                }

                if (user.password != password) {
                    return done(null, false, { message: 'Invalid password' });
                }

                return done(null, user);
            });
        });
    }
));
}
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const checkTokenFromCookies = (req, res) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies[process.env.COOKIE_NAME];
  }
  return token;
}

const authJWT = passport => {
  const opts = {
    jwtFromRequest = checkTokenFromCookies,
    secretOrKey: process.env.JWT_SECRET
  }

  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    User.findOne({ _id: jwtPayload.id }, (err, user) => {
      if (err) return done(err, false);
      if (user) return done(null, user);
      return done(null, false);
    })
  }))
}

module.exports = {
  setAuthentication: (passport) => {
    authJWT(passport);
  }
}

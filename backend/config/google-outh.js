var GoogleStrategy = require('passport-google-oauth20').Strategy;
 const passport = require("passport")
 const { v4: uuidv4 } = require('uuid');

const {googleModel} = require('../models/google.model')
 require('dotenv').config();


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    //console.log(profile)
    let email = profile._json.email
    //console.log(profile.name)
    const newuser = new googleModel({
        email,
        name: profile._json.name,
        url: profile._json.picture,
        password : uuidv4()
    })
    await newuser.save();
    //const {_id, password} = user;
    // const payload = {
    //     email,
    //     _id,
    //     password,
    //     url: profile._json.picture
    // }
    return cb(null, newuser);
  }
));

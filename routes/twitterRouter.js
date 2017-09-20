// var express = require('express');
// const Twitter = require('twitter');
// const router = express.Router();
// const passport = require('passport');
// const passport = require('passport-twitter').Strategy;

// passport.use(new TwitterStrategy({
//         consumerKey: TWITTER_CONSUMER_KEY,
//         consumerSecret: TWITTER_CONSUMER_SECRET,
//         callbackURL: "http://267585d3.ngrok.io/"
//     },
//     function(token, tokenSecret, profile, cb) {
//         User.findOrCreate({ twitterId: profile.id }, function(err, user) {
//             return cb(err, user);
//         });
//     }
// ));

// app.get('/auth/twitter',
// passport.authenticate('twitter'));

// app.get('http://267585d3.ngrok.io/', 
// passport.authenticate('twitter', { failureRedirect: '/login' }),
// function(req, res) {
//   // Successful authentication, redirect home.
//   res.redirect('/');
// });





// // var client = new Twitter({
// //     consumer_key: process.env.TWITTER_CONSUMER_KEY,
// //     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
// //     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
// //     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// // });

// // router.post('/authenticate', (req, res) => {
// //     client.post('https://api.twitter.com/oauth/request_token', (err, res) => {
// //         if (err) console.log(err)
// //         console.log(res)
// //     })
// // })

// module.exports = router;
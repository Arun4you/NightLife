var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var morgan = require('morgan');
var mongoose = require("mongoose")
var passport = require('passport')
var jwt = require('jsonwebtoken')
var mainRouter = require('./routes/mainRouter')
var twitterRouter = require('./routes/twitterRouter')
const TwitterStrategy = require('passport-twitter').Strategy;
var session = require('express-session');
var TwitterTokenStrategy = require('passport-twitter-token');
var cors = require('cors')

app.use(morgan('dev'));
require('dotenv').config({
    silent: true
});

mongoose.connect(process.env.DB, () => {
    console.log("DB connected");
})

//app.set('views', path.join(__dirname,'client')); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, './views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRouter);
// app.use('/user', twitterRouter);

passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackUrl: ""
    },
    function(token, tokenSecret, profile, cb) {
        User.findOrCreate({ twitterId: profile.id }, function(err, user) {
            return cb(err, user);
        });
    }
));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
var corsOptions = {
        origin: 'https://nightlifebyarun.herokuapp.com/',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
    // app.use(function(req, res, next) {
    //     res.header('Access-Control-Allow-Credentials', true);
    //     res.header('Access-Control-Allow-Origin', req.headers.origin)
    //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //     res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    //     if (req.method == 'OPTIONS') res.send(200);
    //     else next();
    // });
app.get('/auth/twitter/', cors(corsOptions),
    passport.authenticate('twitter'));

// app.get('/', (req, res) => {
//         console.log('plesase login')
//     })
// router.get('/',
//     passport.authenticate('twitter', { failureRedirect: '/login' }),
//     function(req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('http://localhost:3000');
//     });

app.listen(process.env.PORT, function(err) {
    if (err) throw err;
    console.log("Server is Running on port " + process.env.PORT);
});
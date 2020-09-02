require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local');
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var User = require('./models/user');
var Review = require('./models/review');

var commentsRoutes = require('./routes/comments');
var campgroundsRoutes = require('./routes/campgrounds');
var indexRoutes = require('./routes/index');
var reviewsRoutes = require('./routes/reviews');
var usersRoutes = require('./routes/users');


mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  process.env.MONGOOSE_URI,
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(flash());

app.locals.moment = require('moment');
//PASSPORT CONFIGURATION
app.use(
  require('express-session')({
    secret: 'shhh..',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//MIDDLEWARE HAS TO HAVE NEXT();
app.use(function (req, res, next) {
  res.locals.currUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  res.locals.warning = req.flash('warning');
  next();
});

//requiring routes
app.use(indexRoutes);
app.use('/campgrounds/:id/comments', commentsRoutes);
app.use('/campgrounds', campgroundsRoutes);
app.use('/campgrounds/:id/reviews', reviewsRoutes);
app.use('/users', usersRoutes);

app.listen(process.env.PORT || 3000, function () {
  console.log('The CAMPDISCOVER server has started!');
});

require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const db = require('./models');
const methode_override = require('method-override')

const SECRET_SESSION = process.env.SECRET_SESSION;

app.set('view engine', 'ejs');
app.use(methode_override('_method'));

app.use(require('morgan')('dev'));
///to create string or array data type 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);



///midleware
//to create flash message alert to the user
app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

app.use(flash());            // flash middleware


app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session


//a middle to store flash messages and user on res.locals
//currrentuser is used as currentUser for the back end 
app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
})




app.get('/', (req, res) => {
  res.render('index');
});




//  a GET route to /profile and include isLoggedIn 
//middleware to check to see if user is logged in beforehand inside of server.js
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});










// app.use('/journal', require('./controllers/journal'));
app.use('/auth', require('./controllers/auth'));
app.use('/articles', require('./controllers/articles'));
app.use('/dreams', require('./controllers/dreams'));
app.use('/journal', require('./controllers/journal'));






const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;


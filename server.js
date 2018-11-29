const express        = require('express');
const app            = express();
const path           = require("path");
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session');
// const requireLogin = require('./middleware/requireLogin')
require("dotenv").config();

require('./db/db');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

//middleware
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: process.env.REACT_APP_ADDRESS,
    credentials: true,
    optionsSuccessStatus: 200 
  }
  app.use(cors(corsOptions));

  //controllers
const authCon = require('./controllers/authcontroller');
const usersCon = require('./controllers/userscontroller');

app.use('/api/v1/users', usersCon); //if users doesn't work
app.use('/api/v1/auth', authCon);
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log('listening on port' + port);
});
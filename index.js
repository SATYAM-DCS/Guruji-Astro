require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));


//redirecting routes
app.use('/', require('./routes'));

app.listen(PORT, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${PORT}`);
});

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//const bcrypt = require('bcryptjs');

const app = express();
//const jwt    = require('jsonwebtoken');
//const pg = require('pg');
const router = require('./server/routes');


require('dotenv').config();

app.use(logger('dev'));

app.post('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('env');
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'welcome to postit application.',

}));



module.exports = app;
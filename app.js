const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//const bcrypt = require('bcryptjs');

const app = express();

require('dotenv').config();
const path = require('path');

const db = require('./server/models/index');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//app.get('env');
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'welcome to postit application.',

}));
//const router = require('./server/routes');
//app.use('/', router)


module.exports = app;

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const jwt    = require('jsonwebtoken');
//const config = require('../config/config.json');


app.use(logger('dev'));

//app.set('superSecret', config.secret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Its ewa.',

}));
//app.post('*', (req, res) => res.status(200).send(users));

module.exports = app;
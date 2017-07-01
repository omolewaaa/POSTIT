const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
//const userRoute = require("./server/routes");
const app = express();
const jwt    = require('jsonwebtoken');
//const pg = require('pg');
const router = require('./server/routes');

//const config = require('../config/config.json');
require('dotenv').config();

app.use(logger('dev'));

//app.set('superSecret', config.secret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/', userRoute);
//pg.connect(process.env.DATABASE_URL);

//app.use('/', router);
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'welcome to postit application.',

}));

//app.get('/', messages (req, res) => {
//	res.send(messages)
//}));

module.exports = app;
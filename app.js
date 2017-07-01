const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//const bcrypt = require('bcryptjs');
const db = require('./server/models/index');
const app = express();
require('dotenv').config();



app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//db.sequelize.sync().then(()=>{
   //app.listen(port,() => {
   //console.log(`Server running on port ${port}`)
//})

//app.get('env');
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'welcome to postit application.',

}));


module.exports = app;

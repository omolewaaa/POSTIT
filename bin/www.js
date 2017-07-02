const http = require('http');
const app = require('../app'); // The express app we just created
//const db = require('./server/models/index');

//db.sequelize.sync().then(()=>{
const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
//})
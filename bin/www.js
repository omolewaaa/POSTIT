const http = require('http');
const app = require('../app'); // The express app we just created
//const config = require('../config/config.json');

const port = parseInt(process.env.PORT, 10) || 8000;
//app.set('superSecret', config.secret);
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
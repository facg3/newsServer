const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;
server.listen(port, hostname, () => {
  console.log(`the server work on port :hostname ${hostname} port : ${port}`);
});

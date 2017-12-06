const handlers = require('./handlers.js');

const router = (req, res) => {
 const endpoint = req.url;
 if (endpoint === '/') {
   handlers.homePageHandler(req, res);
 }
 else if (endpoint.startsWith('/public')) {
   handlers.publicFileHandler(req, res);
 }
 else if (endpoint.startsWith('/front-end-src')) {
   handlers.publicFileHandler(req, res);
 }
 else if (endpoint === '/allNews') {
   handlers.publicNewsHandler(req, res);
 }
 else if (endpoint === '/sportNews') {

 }
 else if (endpoint === '/musicNews') {

 }
 else {
    res.writeHead(404, 'Content-type : text/html');
    res.end('<h1>Erorr not found</h1>');
 }
}
module.exports = router;

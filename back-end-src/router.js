const handlers = require('./handlers.js');

const router = (req, res) => {
 const endpoint = req.url;
 if (endpoint === '/') {
   handlers.homePageHandler(req, res);
 }
 else if (endpoint.startsWith('/public') || endpoint.startsWith('/front-end-src')) {
   handlers.publicFileHandler(req, res);
 }
 else if (endpoint === '/allNews') {
   handlers.publicNewsHandler(req, res);
 }
 else if (endpoint === '/sportNews') {
   handlers.sportNewsHandler(req, res);
 }
 else if (endpoint === '/musicNews') {
   handlers.musicNewsHandler(req, res);
 }
 else {
    res.writeHead(404, 'Content-type : text/html');
    res.end('<h1>Erorr not found</h1>');
 }
}
module.exports = router;

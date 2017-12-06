const fs = require('fs');
const path = require('path');


const homePageHandler = (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (error, file) => {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, 'Content-Type: text/html');
      res.end(file);
    }
  });
};
const publicFileHandler = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);
  const arr = req.url.split('.');
  console.log(arr);
  const type = arr[arr.length - 1];
  console.log(type);
  console.log(type);
  const fileType = {
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpeg',
    png: 'image/png',
  }; //
  fs.readFile(path.join(__dirname, '..', endpoint), (err, file) => {
    if (err) {
      console.log('Erorr Handling', err.message);
    } else {
      res.writeHead(200, 'Content-type:' + fileType[type]);
      res.end(file);
    }
  });
};
const publicNewsHandler = (req, res) => {
  let dataStream = '';
  req.on('data', (chunck) => {
    dataStream += chunck;
  });
  req.on('end', () => {

  });
};
module.exports = {
  homePageHandler,
  publicFileHandler,
  publicNewsHandler
};

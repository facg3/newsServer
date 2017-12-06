const fs = require('fs');
const path = require('path');
const request = require('request');

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
  const arr = req.url.split('.');
  const type = arr[arr.length - 1];
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

};

const sportNewsHandler = (req, res) => {

};

const musicNewsHandler = (req, res) => {

};

module.exports = {
  homePageHandler,
  publicFileHandler,
  publicNewsHandler,
  sportNewsHandler,
  musicNewsHandler
};

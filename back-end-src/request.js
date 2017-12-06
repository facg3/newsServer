const request = require('request');
const http = require('http');

const myRequest = (url, callback) => {
  http.get(url, (response) => {
  response.setEncoding('utf8');

    let body = '';
    response.on('data', (data) => {
     body = data;
    });

    response.on('end', () => {
      callback(null, response, body);
    });

  }).on('error', (error) => {
    callback(error);
  });
};

const request = require('request');

const myRequest = (url) => {

  var option = {
    url: url,
    method :'GET'
  };
  request(option, (err, res) => {

    if (err) {
      return console.log(err.message);
    } else {
      console.log(JSON.parse(res.body));
    }
  });

};

module.exports = {
  myRequest
};

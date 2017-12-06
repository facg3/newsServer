const request = require('request');
const myRequest = (url,response) => {
  var option = {
    url: url,
    method :'GET'
  };
  request(option, (err, res) => {

    if (err) {
      return console.log(err.message);
    } else {
      var poster = [];
      var data = JSON.parse(res.body);
      var arr = data.articles;
      arr.forEach((item) => {
        var obj = {
          title:item.title,
          img:item.urlToImage,
          date:item.publishedAt,
          description:item.description,
          url:item.url
        };
        poster.push(obj);
      });

       response.end(JSON.stringify(poster));
 }
  });
};

module.exports = {
  myRequest
};

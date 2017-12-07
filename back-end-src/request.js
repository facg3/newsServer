const request = require('request');

const myRequest = (url, response) => {
  const option = {
    url,
    method: 'GET',
  };
  request(option, (err, res) => {
    if (err) {
      res.end('<h1>Request Failed, internal server error occured</h1>');
    } else {
      const poster = [];
      const data = JSON.parse(res.body);
      const arr = data.articles;
      arr.forEach((item) => {
        const obj = {
          title: item.title,
          img: item.urlToImage,
          date: item.publishedAt,
          description: item.description,
          url: item.url,
        };
        poster.push(obj);
      });

      response.end(JSON.stringify(poster));
    }
  });
};

module.exports = {
  myRequest,
};

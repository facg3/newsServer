const test = require('tape');
const shot = require('shot');
const router = require('../router');
const fs = require('fs');


var index = fs.readFile(process.cwd() + '/' + 'public/index.html' ,'UTF-8',(err,contentFile) =>{
  if(err){
    process.stdout.write('The file does not exist')
  }else{
    index = contentFile;
  }

})



test('home route returns a status code of 200', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/'
  }, (res) => {

    t.equal(res.statusCode, 200, 'should return a status code of 200');
    t.equal(res.payload,index, 'should return an html page');

    t.end();
  })
})

test('allNews route returns a status code of 200', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/allNews'
  }, (res) => {
    t.equal(res.statusCode, 200, 'should return a status code of 200');
    t.equal(res.headers['content-type'], 'application/json', 'should return an html page');
    t.end();
  })
})
test('sportNews route returns a status code of 200', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/sportNews'
  }, (res) => {
    t.equal(res.statusCode, 200, 'should return a status code of 200');
    t.equal(res.headers['content-type'], 'application/json', 'should return an html page');
    t.end();
  })
})
test('musicNews route returns a status code of 200', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/musicNews'
  }, (res) => {
    t.equal(res.statusCode, 200, 'should return a status code of 200');
    t.equal(res.headers['content-type'], 'application/json', 'should return an html page');
    t.end();
  })
})

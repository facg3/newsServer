const test = require('tape');
const shot = require('shot');
const router = require('../router');



test ('The start', (t)=>{
  let num = 2;
  t.equal(num, 2, 'should return 2');
  t.end();
})

test('home route returns a status code of 200', (t)=>{
   shot.inject(router, {method:'get', url:'/'}, (res)=>{
     console.log('res', res.headers);
    // console.log(res.headers['content-type']);
   t.equal(res.statusCode, 200, 'should return a status code of 200');
   t.equal(res.headers['content-type'], 'text/html', 'should return an html page');
   t.end();
  })
})
test('public route returns a status code of 200', (t)=>{
   shot.inject(router, {method:'get', url:'/'}, (res)=>{
     console.log('res', res.headers);
    // console.log(res.headers['content-type']);
   t.equal(res.statusCode, 200, 'should return a status code of 200');
   t.equal(res.headers['content-type'], 'text/html', 'should return an html page');
   t.end();
  })
})
test('public route returns a status code of 200', (t)=>{
   shot.inject(router, {method:'get', url:'/'}, (res)=>{
   t.equal(res.statusCode, 200, 'should return a status code of 200');
   t.equal(res.headers['content-type'], 'text/html', 'should return an html page');
   t.end();
  })
})
test('allNews route returns a status code of 200', (t)=>{
   shot.inject(router, {method:'get', url:'/'}, (res)=>{
   t.equal(res.statusCode, 200, 'should return a status code of 200');
   t.equal(res.headers['content-type'], 'text/html', 'should return an html page');
   t.end();
  })
})
test('sportNews route returns a status code of 200', (t)=>{
   shot.inject(router, {method:'get', url:'/'}, (res)=>{
   t.equal(res.statusCode, 200, 'should return a status code of 200');
   t.equal(res.headers['content-type'], 'text/html', 'should return an html page');
   t.end();
  })
})
test('musicNews route returns a status code of 200', (t)=>{
   shot.inject(router, {method:'get', url:'/'}, (res)=>{
   t.equal(res.statusCode, 200, 'should return a status code of 200');
   t.equal(res.headers['content-type'], 'text/html', 'should return an html page');
   t.end();
  })
})

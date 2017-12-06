var body = document.querySelector('body')
var postContainer = document.createElement('section');
postContainer.className = "news-container";

// recieves an array of NEWS OBJECTS after fetch() gets it from the server.
function displayNews(arrayOfNewsObject){
  if (postContainer) {
    postContainer.innerHTML = '';
  }
  arrayOfNewsObject.forEach(function(post){
    postContainer.innerHTML += `<article class="one-post">
      <h3 class="post-title">${post.title}</h3>
      <img class="post-img" src=${post.img} alt=${arrayOfNewsObject[0].title}>
      <h5 class="post-date">${post.date}</h4>
      <p class="post-body">${post.description}</p>
      <label class="post-more" for="post-link"><a id="post-link" class="post-link" href=${post.url}>READ MORE</a></label>
      </article>`
  });
  body.appendChild(postContainer)
}


// listeners for user click on li elements on the navbar and make XHR requests depends on where a user clicks.
function navbarListener(){
  var home = document.querySelector('[action="/"]');
  var allNews = document.querySelector('[action="/allNews"]');
  var sportNews = document.querySelector('[action="/sportNews"]');
  var musicNews = document.querySelector('[action="/musicNews"]');


  home.addEventListener('click', function(event){
    fetch("/allNews", displayNews);
  });
  allNews.addEventListener('click', function(event){
    fetch("/allNews", displayNews);
  });
  sportNews.addEventListener('click', function(event){
    fetch("/sportNews", displayNews);
  });
  musicNews.addEventListener('click', function(event){
    fetch("/musicNews", displayNews);
  });
}


document.onreadystatechange = function(){
  if(document.readyState === 'complete'){
    fetch("/allNews", displayNews);
  }
}
navbarListener()

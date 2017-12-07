const body = document.querySelector('body');
const postContainer = document.createElement('section');
postContainer.className = 'news-container';

// recieves an array of NEWS OBJECTS after fetch() gets it from the server.
function displayNews(arrayOfNewsObject) {
  if (postContainer) {
    postContainer.innerHTML = '';
  }
  arrayOfNewsObject.forEach((post) => {
    postContainer.innerHTML += `<article class="one-post">
      <h3 class="post-title">${post.title}</h3>
      <img class="post-img" src=${post.img} alt=${arrayOfNewsObject[0].title}>
      <h5 class="post-date">${post.date}</h4>
      <p class="post-body">${post.description}</p>
      <label class="post-more" for="post-link"><a id="post-link" class="post-link" href=${post.url}>READ MORE</a></label>
      </article>`;
  });
  body.appendChild(postContainer);
}


// listeners for user click on li elements on the navbar and make XHR requests depends on where a user clicks.
function navbarListener() {
  const home = document.querySelector('[action="/"]');
  const sportNews = document.querySelector('[action="/sportNews"]');
  const musicNews = document.querySelector('[action="/musicNews"]');


  home.addEventListener('click', (event) => {
    fetch('/allNews', displayNews);
    home.className = 'active';
    if (sportNews.className === 'active' || musicNews.className === 'active') {
      sportNews.className = '';
      musicNews.className = '';
    }
  });
  sportNews.addEventListener('click', (event) => {
    fetch('/sportNews', displayNews);
    sportNews.className = 'active';
    if (home.className === 'active' || musicNews.className === 'active') {
      home.className = '';
      musicNews.className = '';
    }
  });
  musicNews.addEventListener('click', (event) => {
    fetch('/musicNews', displayNews);
    musicNews.className = 'active';
    if (home.className === 'active' || sportNews.className === 'active') {
      home.className = '';
      sportNews.className = '';
    }
  });
}


document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    fetch('/allNews', displayNews);
  }
  navbarListener();
};

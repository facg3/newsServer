var fetch = (url, callback)=>{
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        callback(JSON.parse(xhr.responseText));
      } else {
        console.log('Error!!');
        console.log(xhr.responseText);
      }
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
};

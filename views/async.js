window.onload = function() {
  const http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if(http.readystate === 4 && http.status === 200) {
      console.log('Ready state and Okay');
    }
  }

  http.open("Get", "data/tweets.json", true);
  http.send();

  console.log('Last line');
}

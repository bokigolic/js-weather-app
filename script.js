const api = {
  key: "a74651e23a58482de7e9ff599ab3358a",
  baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)

function setQuery(evt) {
  if(evt.keyCode == 13){
   // getResults(searchbox.value);
    console.log(searchbox.value)
  }
}
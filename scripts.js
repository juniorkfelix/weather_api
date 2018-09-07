const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
 // Begin accessing JSON data here
var data = JSON.parse(this.response);

data.forEach(movie => {
  // Log each movie's title
  console.log(movie.title);
});
}

request.send();
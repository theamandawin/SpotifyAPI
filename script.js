let colorMapping = {
  "blue": "#0a52efff",
  "yellow": "#f5e02dff",
  "green": "#42bb52ff",
  "purple": "#9b04eaff",
  "red": "#d01e17ff",
  "orange": "#fa9b15ff",
  "white": "#fff",
  "black": "#000", 
}

function createBox(data) {
let color = colorMapping[data.name.toLowerCase()];
console.log(color);

let container = document.getElementById('container');

//Code to create Box

let createBox = document.createElement('div');
let box = container.appendChild(createBox);

box.classList.add('playlist-box');
box.style.background = color;

box.addEventListener('click', function() {
  let songNumber = randomInt(0, data.tracks.length - 1);
  window.open(data.tracks[songNumber].url);
});

}

function randomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
/* 
    Example Use 
        randomInt(4,10);
*/
}


fetch('playlist.json')
.then(response => response.json())
.then(data => {

  let playlists = data.playlists;

  for (let i = 0; i < playlists.length; i++) {
    let playlist = playlists[i];
    createBox(playlist);
  }
})
.catch(error => console.error(error));



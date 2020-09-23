let song;
let start = 1;


function setup() {
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
}


x = document.getElementById("bgaudio")
function playAudio(){
	console.log("playing");
	x.play();
}
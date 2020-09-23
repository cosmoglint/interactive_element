var w_width = window.innerWidth;
var w_height = window.innerHeight;
var xs = 0;
var ys = 0;
var ms = 0;
//let coords = [40, 40, 80, 60, 100, 100, 60, 120, 50, 150];
let coords = [];

var bgsound ;

//function preload(){
//	bgsound = loadSound("../audio/wind_chimes_short.wav");
//}

function rand(){
	return random(10,20);
}

function init(){
	bgsound = loadSound("../audio/wind_chimes_short.wav");
	ww = window.innerWidth;
	wh = window.innerHeight;
	canvas = createCanvas(ww,wh);
	background(52);
	canvas.position(0,0);
	canvas.style('z-index','-1');
}


function drawcurve(){
	mx = mouseX;
	my = mouseY;
	rad = 20;
	point_numbers = 10;
	for (let i = 0; i<point_numbers; i+=2){
		if (i <= point_numbers/4){
			coords.push(mx+rand() + rad);
			coords.push(my-rand() - rad);
		 }
		else if(i <= point_numbers/2){
			coords.push(mx+rand() + rad);
			coords.push(my+rand() + rad);
		}
		else if(i <= point_numbers*3/4){
			coords.push(mx-rand() - rad);
			coords.push(my+rand() + rad);
		}
		else if(i <= point_numbers){
			coords.push(mx-rand() - rad);
			coords.push(my-rand() - rad);
		}
		else{
			coords.push(rad);
			coords.push(rad);
			
		}
	}
	console.log(coords);
	stroke(5);
	beginShape();
	curveVertex(coords[0],coords[1]);
	for (let i=0; i < coords.length; i+=2){
		nn = noise(xs,ys,ms);
		curveVertex(coords[i],coords[i+1]);
//		console.log(coords[i]);
	}
	curveVertex(coords[coords.length-1],coords[coords.length-2]);
	endShape();
	coords = [];
}


function setup(){
	init();
}

function draw(){
	background(52);
	strokeWeight(0);
//	circle(mouseX,mouseY,50);
	drawcurve(xs,ys,ms);
}
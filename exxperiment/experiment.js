var w_width = window.innerWidth;
var w_height = window.innerHeight;
var x = 80;
var y = 80;
//var wn = w_width/x;
//var hn = w_height/y;
var the_tr;

function avg(p1,p2){
	ans = createVector((p1.x+p2.x)/2,(p1.y+p2.y)/2);
	return ans;
}
	
function random_color(){
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	var col = color(r,g,b);
	return col;
}


function aversion(){
	the_tr.changer();
}
function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
	init();
}

window.addEventListener('resize', reportsize);

window.addEventListener('mousemove', aversion);

function init(){
	ww = window.innerWidth;
	wh = window.innerHeight;
	wn = round(ww/x) + 2;
	hn = round(wh/x) + 2;
	canvas = createCanvas(ww,wh);
	background(49,49,49);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	p = createVector(50,50);
	q = createVector(ww/2,wh-50);
	r = createVector(ww-300,wh-50);
//	p = createVector(50,50);
//	q = createVector(ww-200,50);
//	r = createVector(ww/2,wh-50);
	the_tr = new tris(p,q,r);
}


function setup(){
	init();
	
}

function draw(){
	background(49,49,49);
	the_tr.show();
}
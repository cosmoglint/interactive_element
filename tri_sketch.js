var w_width = window.innerWidth;
var w_height = window.innerHeight;
var x = 80;
var y = 80;
//var wn = w_width/x;
//var hn = w_height/y;
var tries = [];

function random_color(){
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	var col = color(r,g,b);
	return col;
}

function lister(ll,bb){
	tries = new Array(ll);
	for (var i=0;i<ll;i++){
		tries[i] = new Array(bb);
	}
	setter();
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
	init();
}

function aversion(){
	for (i = 0; i < wn; i++){
	for (j = 0; j < hn; j++){
//		tries[i][j].mover();
		}
	}
}
window.addEventListener('resize', reportsize);

//window.addEventListener('mousemove', aversion);

//function point(){
//	
//}

function init(){
	ww = window.innerWidth;
	wh = window.innerHeight;
	wn = round(ww/x) + 2;
	hn = round(wh/x) + 2;
	console.log(wn,hn)
	canvas = createCanvas(ww,wh);
	background(49,49,49);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	lister(wn,hn);
}

function setter(){
	for (i = 0; i < wn; i++){
		for (j = 0; j < hn; j++){
//			tries[i][j] = new tris(i*x,j*y);
			tries[i][j] = new tris(random(0,ww),random(0,wh));
		}
	}
}


function setup(){
	init();
	console.log(tries );
	
}

function draw(){
	background(49,49,49);
	
	for (i = 0; i < wn; i++){
		for (j = 0; j < hn; j++){
			var t = tries[i][j];
			t.show();
		}
	}
}
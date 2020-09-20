var w_width = window.innerWidth;
var w_height = window.innerHeight;
var x = 30;
var y = 30;
//var wn = w_width/x;
//var hn = w_height/y;
var tries = [];

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
	wn = round(ww/x);
	hn = round(wh/x);
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
			tries[i][j] = new tris(i*x,j*y);
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
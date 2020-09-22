var w_width = window.innerWidth;
var w_height = window.innerHeight;
var x = 80;
var y = 80;
//var wn = w_width/x;
//var hn = w_height/y;
var noise_scale = 30;
var tries = [];
var moving = 0;

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

function lister(ll,bb){
	tries = new Array(ll);
	for (var i=0;i<ll;i++){
		tries[i] = new Array(bb);
	}
	setter();
}

function setter(){
	for (i = 0; i < wn; i++){
		for (j = 0; j < hn; j++){
			l = i*x;
			m = j*x
			p = createVector(l,m-50);
			q = createVector(l+50,m);
			r = createVector(l-50,m);
//			tries[i][j] = new tris(i*x,j*y);
			tries[i][j] = new tris(p,q,r);
		}
	}
	console.log(tries);
}



function aversion(){
	for (i = 0; i < wn; i++){
	for (j = 0; j < hn; j++){
//		tries[i][j].mover();
		tries[i][j].changer();
		}
	}
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
	lister(wn,hn);
//	p = createVector(50,50);
//	q = createVector(ww/2,wh-50);
//	r = createVector(ww-300,wh-50);
//	the_tr = new tris(p,q,r);
	i_off = 0;
	for (i = 0; i < wn; i++){
		j_off = 0;
		for (j = 0; j < hn; j++){
			tries[i][j].set_und(map(noise(i_off,j_off),0,1,0,30));
			j_off += 0.1;
		}
		i_off += 0.1;
	}
}


function setup(){
	init();
//	frameRate(10);
	
}

function draw(){
	moving += 0.01;
	i_off = moving;
	for (i = 0; i < wn; i++){
		j_off = 0;
		for (j = 0; j < hn; j++){
			tries[i][j].set_und(map(noise(i_off,j_off),0,1,0,30));
			j_off += 0.1;
		}
		i_off += 0.1;
	}
	background(49,49,49);
	for (i = 0; i < wn; i++){
		for (j = 0; j < hn; j++){
			var t = tries[i][j];
			t.undulate();
			t.show()
		}
	}
} 
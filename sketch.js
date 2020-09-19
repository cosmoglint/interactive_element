w_width = window.innerWidth;
w_height = window.innerHeight;

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
	init();
}

window.addEventListener('resize', reportsize);


function init(){
	ww = windowWidth;
	wh = windowHeight;
	x = 30;
	y = 30;
	wn = ww/x;
	hn = wh/x;
	canvas = createCanvas(ww,wh);
	background(49,49,49);
	canvas.position(0,0);
	canvas.style('z-index','-1');
}


function setup(){
	init();
	stroke('red');
	strokeWeight(5);
}

function draw(){
	for (i = 1; i<wn; i++){
		for (j = 1; j < wh; j++){
			point(i*x,j*y);
		}
	}
}
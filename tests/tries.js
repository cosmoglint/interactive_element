function tris(p,q,r){
	//o is original position
	//m is midpoint of the points opposite line
	//c is current position
	this.op = p;
	this.oq = q;
	this.or = r;
	this.mp = p5.Vector.div(p5.Vector.add(this.oq,this.or),2);
	this.mq = p5.Vector.div(p5.Vector.add(this.op,this.or),2);
	this.mr = p5.Vector.div(p5.Vector.add(this.oq,this.op),2);
	this.ang_p = atan((this.mp.y-this.op.y)/(this.mp.x-this.op.x));// * Math.PI/180;
	this.ang_q = atan((this.mq.y-this.oq.y)/(this.mq.x-this.oq.x));// * Math.PI/180;
	this.ang_r = atan((this.mr.y-this.or.y)/(this.mr.x-this.or.x));// * Math.PI/180;	
	this.cp = p;
	this.cq = q;
	this.cr = r;
	this.diff = 300;
}
tris.prototype.show = function(){
	triangle(this.cp.x,this.cp.y,this.cq.x,this.cq.y,this.cr.x,this.cr.y);
}

tris.prototype.reseter = function(){
//	console.log(this.op,this.cp);
		this.cp = this.op;
		this.cq = this.oq;
		this.cr = this.or;
}

tris.prototype.changer = function(){
	console.log(this.ang_p);
	
	dp = dist(mouseX,mouseY,this.op.x,this.op.y);
	dq = dist(mouseX,mouseY,this.oq.x,this.oq.y);
	dr = dist(mouseX,mouseY,this.or.x,this.or.y);
//	console.log(p5.Vector.sub(this.p,this.op));
//	console.log(dp)
	if (dp<this.diff){
		rem = this.diff -dp;
		mov_x = Math.cos(this.ang_p) * rem;
		mov_y = Math.sin(this.ang_p) * rem;
		this.cp = createVector(this.op.x + mov_x,this.op.y+mov_y);
//		this.cq = createVector(this.oq.x+rem,this.oq.y);
//		this.cr = createVector(this.or.x-rem,this.or.y);
	}
	else if (dq<this.diff){
		rem = this.diff -dq;
		mov_x = Math.cos(this.ang_q) * rem;
		mov_y = Math.sin(this.ang_q) * rem;
		this.cq = createVector(this.oq.x + mov_x,this.oq.y+mov_y);
//		this.cq = createVector(this.oq.x+rem,this.oq.y);
//		this.cr = createVector(this.or.x-rem,this.or.y);
	}
	else if (dr<this.diff){
		rem = this.diff -dr;
		mov_x = Math.cos(this.ang_r) * rem;
		mov_y = Math.sin(this.ang_r) * rem;
		this.cr = createVector(this.or.x + mov_x,this.or.y+mov_y);
//		this.cq = createVector(this.oq.x+rem,this.oq.y);
//		this.cr = createVector(this.or.x-rem,this.or.y);
	}
//	else if (dp==50){
//		this.cp = this.cp;
//	}
	else{
		this.reseter();
	}
	this.show();
}
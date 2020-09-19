function vehicle(xx,yy){
	this.pos = createVector(xx,yy);
	this.target = createVector(xx,yy);
	this.vel = createVector();
	this.acc = createVector();
}

vehicle.prototype.update = function(){
	this.pos.add(this.vel);
	this.vel.add(this.acc); 
}

vehicle.prototype.show = function(){
	stroke('red');
	strokeWeight(8);
	point(this.pos.x,this.pos.y);
}
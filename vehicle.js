function vehicle(xx,yy){
	this.pos = createVector(xx,yy);
	this.target = createVector(xx,yy);
	this.vel = createVector();
	this.acc = createVector();
	this.r = 8;
	this.maxspeed = 5;
}

vehicle.prototype.update = function(){
	this.pos.add(this.vel);
	this.vel.add(this.acc); 
	this.acc.mult(0);
}

vehicle.prototype.show = function(){
	stroke('red');
	strokeWeight(8);
	point(this.pos.x,this.pos.y);
}

vehicle.prototype.mover = function(){
	var d = dist(mouseX,mouseY,this.pos.x,this.pos.y);
 		this.pos.x += 10
		this.pos.y += 10
	}

vehicle.prototype.behaviours = function(){
 var seek = this.seek(this.target);
	this.applyForce(seek);
}

vehicle.prototype.applyForce = function(f){
	this.acc.add(f);
}

vehicle.prototype.seek = function(target){
	var desired = p5.Vector.sub(target,this.pos);
	desired.setMag(this.maxspeed);
	var steer = p5.Vector.sub(desired,this.vel);
	return steer;
}
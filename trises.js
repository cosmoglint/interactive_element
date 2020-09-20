function tris(i,j){
	x_loc = i;
 	y_loc = j;
	this.p1 = createVector(x_loc,y_loc-50);
	this.p2 = createVector(x_loc+50,y_loc+50);
	this.p3 = createVector(x_loc-50,y_loc+50);
}

tris.prototype.show = function(){
	fcol = random_color();
//	fill(fcol);
	triangle(this.p1.x,this.p1.y,this.p2.x,this.p2.y,this.p3.x,this.p3.y);
}
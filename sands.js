class sands {
	constructor(x,y,r){

		var options = {
			'density':0.3,
			'friction': 5,
			'restitution':1.0,
			
		  }

	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()

			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			//ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r)
			

			pop()
	}

}
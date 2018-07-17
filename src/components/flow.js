// Adapted from: https://www.openprocessing.org/sketch/500263

export default function sketch (p5) {
  let particles_a = [];
  let particles_b = [];
  let particles_c = [];
  let nums = 250;
  let noiseScale = 700;

  p5.setup = function(){
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  	p5.background(8, 8, 50);
  	for(let i = 0; i < nums; i++){
  		particles_a[i] = new Particle(p5.random(0, p5.width),p5.random(0,p5.height));
  		particles_b[i] = new Particle(p5.random(0, p5.width),p5.random(0,p5.height));
  		particles_c[i] = new Particle(p5.random(0, p5.width),p5.random(0,p5.height));
  	}
  };

  p5.draw = function(){
  	p5.noStroke();
  	p5.smooth();
		for(let i = 0; i < nums; i++) {
  		let radius = p5.map(i,0,nums,1,2);
  		let alpha = p5.map(i,0,nums,0,250);

  		p5.fill(69,124,33,alpha);
  		particles_a[i].move();
  		particles_a[i].display(radius);
  		particles_a[i].checkEdge();

  		p5.fill(7,242,153,alpha);
  		particles_b[i].move();
  		particles_b[i].display(radius);
  		particles_b[i].checkEdge();

  		p5.fill(0,255,255,alpha);
  		particles_c[i].move();
  		particles_c[i].display(radius);
  		particles_c[i].checkEdge();
	  }
  }

  function Particle(x, y){
  	this.dir = p5.createVector(0, 0);
  	this.vel = p5.createVector(0, 0);
  	this.pos = p5.createVector(x, y);
  	this.speed = p5.random(0.6,0.7);

  	this.move = function(){
  		let angle = p5.noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*p5.TWO_PI*noiseScale;
  		this.dir.x = p5.cos(angle);
  		this.dir.y = p5.sin(angle);
  		this.vel = this.dir.copy();
  		this.vel.mult(this.speed);
  		this.pos.add(this.vel);
  	}

  	this.checkEdge = function(){
  		if(this.pos.x > p5.width || this.pos.x < 0 || this.pos.y > p5.height || this.pos.y < 0){
  			this.pos.x = p5.random(50, p5.width);
  			this.pos.y = p5.random(50, p5.height);
  		}
  	}

  	this.display = function(r){
  		p5.ellipse(this.pos.x, this.pos.y, r, r);
  	}
  }
}

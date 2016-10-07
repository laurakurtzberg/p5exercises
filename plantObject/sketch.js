/*
Venus Fly Trap
A p5 Assignment by Laura Kurtzberg
Creative Coding, University of Miami
Practice creating objects and Functions
*/

//create the fly bugs
var fly, fly2, fly3;

//initialize variables
var angleValue = -15;
var yTranslate = 255;
var speed;
var trapStatus;
var centerX = 370;
var centerY = 250;
var d, d2, d3;

function setup() {
  createCanvas(710, 400);
  strokeCap(ROUND);
  var trapStatus = "open";
  
  //new FlyBug objects
  fly = new FlyBug(2);
  fly2 = new FlyBug(3);
  fly3 = new FlyBug(4);
}

function draw() {
  background(83, 209, 188);
  
  //draw the Venus Fly Trap plant
  strokeWeight(8.0);
  stroke('rgb(3,188,62)');
  line(355,380,355,260);  //plant stem
  strokeWeight(2.0);
  stroke('rgb(60,224,109)')
  fill('rgb(3,188,62)')
  rect(360, 290, 50, 50, 28, 20, 25, 5); //plant leaf
  rect(305, 290, 50, 50, 20, 28, 5, 25); //plant leaf
  
  //top half of 'mouth'
  push();
  translate(centerX ,yTranslate);
  rotate(radians(angleValue));
  arc(0, 0, 80, 80,  radians(180), radians(-20), CHORD);
  pop();
  
  //bottom half of 'mouth'
  push();
  translate(centerX, centerY);
  arc(0, 0, 80, 80,  radians(20), radians(180), CHORD);
  pop();
  
  //base of potted plant
  noStroke();
  fill("rgb(175,0,20)");
  rect(324, 350, 65, 55);
  fill("rgb(170,30,47)");
  rect(319, 350, 75, 15);
  
  //Fly functions
  fly.display();
  fly.move();
  
  fly2.display();
  fly3.display();
  
  fly2.move();
  fly3.move();
  
  //plant eating flies
  d = int(dist(centerX, centerY, fly.x, fly.y));
  d2 = int(dist(centerX, centerY, fly2.x, fly2.y));
  d3 = int(dist(centerX, centerY, fly3.x, fly3.y));
  
  if (d < 40 && trapStatus == "closed") {
    fly.disappear();
  }
  
  if (d2 < 40 && trapStatus == "closed") {
    fly2.disappear();
  }
  
  if (d3 < 40 && trapStatus == "closed") {
    fly3.disappear();
  }
  
  
  if(keyIsDown(DOWN_ARROW)){
    yTranslate= 265;
    angleValue = 25;
    trapStatus = "closed";
  } else {
    angleValue = -15;
    yTranslate = 255;
    trapStatus = "open";
  }
}


function FlyBug(speed) {
  this.x = 0;
  this.y = random(20, height-20);

  this.move = function() {
    if (this.x < width) {
    this.x += speed;
    } else {
      this.x = 0;
      this.y = random(20, height-20);
    }
  };
  
  this.display = function() {
  fill(color("rgba(255,255,255,0.7)"));
  stroke('rgb(150,150,150)');
  rect(this.x +15, this.y, 15, 15, 8, 5, 8, 2); //fly wing
  fill(0);
  noStroke();
  ellipse(this.x + 16, this.y +16, 20, 15); //body
  fill(color("rgba(255,255,255,0.7)"));
  stroke('rgb(150,150,150)');
  rect(this.x, this.y + 1, 15, 15, 5, 8, 2, 8); //fly wing
  }
  
  this.disappear = function() {
    this.x = -20;
    this.y = random(20, height-20);
  }

}
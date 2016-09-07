//Treasure Map
//Creative Coding
//Laura Kurtzberg

//Colors
//Blue ocean rgb(53, 193, 209)
//Muted Blue waves rgb(47, 174, 189)
//Sand Land rgb(255, 219, 121)
//Green Land rgb(66, 194, 88)
//Red X rgb(156, 18, 0)

//Code used from Procesing reference Curves tutorial to create curves,
//and inspiration drawn from http://abandonedart.org/works/267_shmoo/schmoo2.pde
//from zenbullets.com

var radius = 100;
var centX = 200;
var centY = 240;

function setup()
{
  noLoop();
  createCanvas(400, 500);
  background(color(53, 193, 209));
  smooth();
  
  strokeWeight(2);
  strokeJoin(ROUND);
}

function draw() {
  //The island shape is a semi-randomly shaped island
  function island(xpos, ypos) {
    myisland = beginShape();
  
    var initialx = 150;
    var initialy = 300;
 
    myisland.fill(66, 194, 88);
    myisland.stroke(74, 73, 56);
  
    for (var ang = 90; ang <= 450; ang += 15) {
      var rad = radians(ang);
      var radVariance = random(60);
      var thisRadius = radius + radVariance;
      var x = 0;
      var x1 = 0;
      var y = 0;
      var y1 = 0;
      if (ang % 2 === 0){
        x1 = centX + (thisRadius * cos(rad));
        y1 = centY + (thisRadius * sin(rad));
        myisland.curveVertex(x1,y1);
      }
      else {
        x = centX + (thisRadius * cos(rad));
        y = centY + (thisRadius * sin(rad));
        myisland.curveVertex(x,y);
      }
      
      if (ang == 105) {
        initialx = x;
        initialy = y;
  
        myisland.curveVertex(initialx, initialy);
        myisland.curveVertex(initialx, initialy);
      }
    }
    myisland.curveVertex(initialx, initialy);
    myisland.curveVertex(initialx, initialy);
  
    myisland.endShape();
  }

  island(0, 0);

  
  //Arrow to point North
  function arrow(x, y) {
  myarrow = beginShape();
    myarrow.noFill();
    myarrow.stroke(30, 30, 30);
    myarrow.strokeWeight(1.5);
    strokeJoin(ROUND);
    myarrow.vertex(x + 30, y + 15);
    myarrow.vertex(x + 35, y + 5);
    myarrow.vertex(x + 40, y + 15);
    myarrow.endShape();
  }
  
  arrow(300, 450);
   
  //shape(arrow, 300, 450);
  fill(0, 0, 0);
  text("N", 330, 445); //Adds the N for North
  
  function waves(x, y) {
  mywaves = beginShape();
    mywaves.noFill();
    mywaves.stroke(color(47, 174, 189));
    mywaves.strokeWeight(2);
    mywaves.curveVertex(x + 0, y + 0);
    mywaves.curveVertex(x + 0, y +  0);
    mywaves.curveVertex(x + 10, y + 5);
    mywaves.curveVertex(x + 20, y + 0);
    mywaves.curveVertex(x + 30, y + 5);
    mywaves.curveVertex(x + 40, y + 2);
    mywaves.curveVertex(x + 45, y + 5);
    mywaves.curveVertex(x + 45, y + 5);
    mywaves.endShape();
  }
  
  //Many waves in the sea
  waves(356, 200);
 
  waves(10, 100);
 
  waves(2, 50);

  waves(44, 400);
 
  waves(21, 300);

  waves(200, 21);

  waves(360, 70);

  waves(10, 100);
 
  waves(102, 450);

  waves(202, 410);
 
  waves(350, 368);

  
  noStroke();
  fill(53, 193, 209);
  function lake(x, y) {
  var mylake = beginShape();
    mylake.curveVertex(x + 50, y + 50); 
    mylake.curveVertex(x + 50, y + 50); 
    mylake.curveVertex(x + random(10,50), y + random(10,40));
    mylake.curveVertex(x + random(20), y + random(20,40));
    mylake.curveVertex(x + 20, y + 70);
    mylake.curveVertex(x + 50, y + 50);
    mylake.curveVertex(x + 50, y + 50);
    mylake.endShape();
  }
  
  lake(random(110, 150), random(100, 200)); //The lake is randomly placed
  
  fill(255, 219, 121);
  stroke(245, 209, 111);
  //Mountains
  function mountains(x, y) {
  var mount = beginShape();
     mount.vertex(x + 30, y + 30);
     mount.vertex(x + 45, y + 0);
     mount.vertex(x + 60, y + 30);
     mount.endShape();
  }
  mountains(170, 220);
  mountains(185, 230);
  mountains(190, 250);
  mountains(180, 270);
  
  var xPos = 1;
  var yPos = 1;
  
  //X marks the spot
  noFill();
  stroke(156, 18, 0);
  strokeWeight(5);
  
  beginShape();
  vertex(centX - 10,centY - 10);
  vertex(centX - 20,centY - 20);
  vertex(centX - 20,centY - 20);
  endShape();
    
  beginShape();
  vertex(centX - 20, centY - 10);
  vertex(centX - 10,centY - 20);
  vertex(centX - 10,centY - 20);
  endShape();

}

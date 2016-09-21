
 /* Colors
 red  color('rgb(242, 17, 27)') or '#F2111B';
 indigo = color('rgb(64, 49, 117)') or '#403175';
 gold = color('rgb(239, 202, 61)') or '#EFCA3D';
 lightgray = color('rgb(241, 241, 241)') or '#F1F1F1';
 black = color('rgb(11, 11, 11)') or '#0B0B0B';
 */

var holdrandomcolor;
var topBoundary = 0;
var bottomBoundary = 0;

var boundary0 = 0;
var subboundary_a = 0;
var subboundary_b = 0;
var subboundary_c = 0;
var subboundary_d = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var boundary5 = 0;
var boundary6 = 0;

var buttonSize = 100;

var brushSize = 10;

var brushColor = "white";

var currentArea = "";

var colorArray = ['#F2111B', '#403175', '#EFCA3D', '#0B9C67', '#DC0CEA', '#77DA87', '#800020', '#E82C0C', '#574AB9', '#01529F', '#EAEB48', '#F13242', '#49E337', '#4FDBDC'];

function setup() {
  createCanvas(600, 500);
  background(11);

  topBoundary = 400;
  bottomBoundary = height;

  boundary0 = 0;
  boundary1 = 100;
  subboundary_a = boundary1 / 2;
  subboundary_b = topBoundary + buttonSize/2;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = 400;
  boundary5 = 500;
  boundary6 = width;
  
  noStroke();
  holdrandomcolor = color('rgb(11, 11, 11)');
}

function draw() {
    if (mouseY > topBoundary && mouseY < bottomBoundary) { // check if in the color picker area
    if (mouseX > boundary0 && mouseX < boundary1) {
      if (mouseX > subboundary_a && mouseY > subboundary_b) {
        currentArea = "subarea_a";
      } else if (mouseX > subboundary_a && mouseY < subboundary_b) {
        currentArea = "subarea_b";
      } else if (mouseX < subboundary_a && mouseY > subboundary_b) {
        currentArea = "subarea_c";
      } else {
        currentArea = "subarea_d";
      }
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      currentArea = "area2";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      currentArea = "area3";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      currentArea = "area4";
    }else if (mouseX > boundary4 && mouseX < boundary5) {
      currentArea = "area5";
    }else if (mouseX > boundary5 && mouseX < boundary6) {
      currentArea = "area6";
    }
  }else{
    currentArea = "";
  }
  
  fill(color('green'));
  rect(boundary0, topBoundary, buttonSize/2, buttonSize/2);
  fill(color('blue'));
  rect(subboundary_a, topBoundary, buttonSize/2, buttonSize/2);
  fill(color('red'));
  rect(subboundary_a, subboundary_b, buttonSize/2, buttonSize/2);
  fill(color('yellow'));
  rect(boundary0, subboundary_b, buttonSize/2, buttonSize/2);
  fill(color('rgb(64, 49, 117)'));
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill(holdrandomcolor);
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill(color('rgb(241, 241, 241)'));
  rect(boundary3, topBoundary, buttonSize, buttonSize);
  fill(color('rgb(242, 17, 27)'));
  rect(boundary4, topBoundary, buttonSize, buttonSize);
  fill(color('rgb(64, 49, 117)'));
  rect(boundary5, topBoundary, buttonSize, buttonSize);
  
  //Text Labels
  fill(color('rgb(241, 241, 241)'));
  textSize(22);
  textStyle(BOLD);
  text("RANDOM", boundary2, 460);
  textSize(62);
  text("+", boundary4 + 32, 475);
  textSize(75);
  text("-", boundary5 + 38, 475);
  
  fill(color('rgb(11,11,11)'));
  textSize(22);
  text("CLEAR", boundary3 + 10, 460);

  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);

}

function mousePressed() {
  console.log(currentArea);

  if (currentArea == "subarea_a") {
    brushColor = color('red');
  } else if (currentArea == "subarea_b") {
    brushColor = color('blue');
  } else if (currentArea == "subarea_c") {
    brushColor = color('yellow');
  } else if (currentArea == "subarea_d") {
    brushColor = color('green');
  } else if(currentArea == "area2"){
    brushColor = color('rgb(64, 49, 117)');
  }else if(currentArea == "area3"){
    holdrandomcolor = random(colorArray);
    brushColor = holdrandomcolor;
  }else if(currentArea == "area4"){
    clear();
    setup();
    redraw();
    brushColor = "white";
  }else if(currentArea == "area5"){
    brushSize++;
  }else if(currentArea == "area6"){
    brushSize--;
    if(brushSize <= 1){
      brushSize = 1;
    }
  }

}
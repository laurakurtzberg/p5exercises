var rectX = -100;
var rectY = 100;
var fr = 200; //starting FPS
var clr;
var from;
var to;
var lerpRefs = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
var opac;
var w = 40;
var go = false;

function setup() {
  from = color(43,32,249, 0 * 255);
  to = color(239,252,2, 0.5 * 255);
  lerpRef = random(lerpRefs);
  console.log(lerpRef);
  createCanvas(300, 300);
  background(0);
  frameRate(fr); // Attempt to refresh at starting FPS
  opac = 1;
  clr = color(255,0,0, opac * 255);
  noStroke();
}

function draw() {
  background(0);
  rectX = rectX += 1; // Move Rectangle

  if (rectX >= width) { // If you go off screen.
    rectX = -100;
  }
  
  opac = 1;
  for (var i = rectX; i <= rectX+w; i++) {
    if (i % 2 && go===true) {
      var inter = map(i, rectX, rectX+w, 0, 1);
      var c = lerpColor(from, to, inter);
      fill(c);
      ellipse(i, rectY, w);
    }
  }
}

function keyTyped() {
  if (key === 'a') {
    console.log('a');
    go = true;
  } else if (key === 'b') {
    value = 0;
  }
  //uncomment to prevent any default behavior
   return false;
}
var noteone, notetwo, notethree, notefour, notefive, notesix, noteseven, noteeight;
var img;
var mywidth = 500;
var myheight = 350;
var currentX = 490; //iniitializing x and y
var currentY = 20;
var currentspot;

function preload() {
  img = loadImage("assets/parrots.jpg");
}

function setup() {
  noteone = loadSound('assets/one.mp3');
  notetwo = loadSound('assets/two.mp3');
  notethree = loadSound('assets/three.mp3');
  notefour = loadSound('assets/four.mp3');
  notefive = loadSound('assets/five.mp3');
  notesix = loadSound('assets/six.mp3');
  noteseven = loadSound('assets/seven.mp3');
  noteeight = loadSound('assets/eight.mp3');
  createCanvas(mywidth, myheight);
  frameRate(30);
  colorMode(HSB);
  var currentspot = get(490, 20);
}

function mousePressed() {
  colorMode(RGB);
  currentX = mouseX;
  currentY = mouseY;
  var mypixel = get(mouseX, mouseY);
  var d = dist(mouseX, mouseY, 400, 30);
  if (d < 50) {
    playall();
  } else {
  console.log(colorClassify(mypixel));
  playNote(mypixel);
  };
  colorMode(HSB);
}

function colorClassify(c)
{
    myhue = hue(c);
    sat = saturation(c);
    brt = brightness(c);

    if (brt > 250) { return "White"}
    else if (brt < 20) { return "Black" }
    else if (myhue < 40)  { return "Reds" }
    else if (myhue < 90)  {  return "Yellows" }
    else if (myhue < 150) { return "Greens" }
    else if (myhue < 270) { return "Blues" }
    else if (myhue < 330) { return "Magentas" }
    else if (sat < 20) { return "Grey" }
    else { return "Reds"};
}

function playNote(pixelcolor) {
  if (colorClassify(pixelcolor) == "Reds") {
    noteone.play();
  } else if (colorClassify(pixelcolor) == "Yellows") {
    notetwo.play()
  } else if (colorClassify(pixelcolor) == "Greens") {
    notethree.play();
  } else if (colorClassify(pixelcolor) == "Blues") {
    notefour.play();
  } else if (colorClassify(pixelcolor) == "Magentas") {
    notefive.play();
  } else if (colorClassify(pixelcolor) == "Grey") {
    notesix.play();
  } else if (colorClassify(pixelcolor) == "Black") {
    noteseven.play();
  } else if (colorClassify(pixelcolor) == "White") {
    noteeight.play();
  }
}

function playall() {
  for (var x = 10; x < 50; x++) {
    for (var y = 10; y < 50; y++) {
      currentpixel = get(x,y);
      playNote(currentpixel);
    }
  }
}

function draw() {
  colorMode(HSB);
  image(img, 0, 0, mywidth, myheight);
  colorMode(RGB);
  currentspot = get(currentX,currentY);
  var c = currentspot;
  fill(c);
  stroke(0);
  rect(25, 25, 50, 50);
  fill(255);
  stroke(255);
  rect(400, 10, 80,50);
  fill(0);
  stroke(0);
  textSize(15);
  text(" Play All \n Pixels", 400, 30);
}

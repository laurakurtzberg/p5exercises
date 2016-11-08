/** Midterm Project by 
 * Laura Kurtzberg
 * for Creative Coding
 * UM Interactive
 **/
 
var canvaswidth = 1200;
var canvasheight = 1000;
var margin = 40;

var timewindow = 0;
var myschedule = 
[
  {
    "day": "Monday",
    "starttime": 7,
    "endtime": 7,
    "name": "Wake Up",
    "type": "moment"
  },
  {
    "day": "Monday",
    "starttime": 7.5,
    "endtime": 8,
    "name": "Yoga",
    "type": "yoga"
  },
  {
    "day": "Monday",
    "starttime": 8,
    "endtime": 9,
    "name": "Breakfast",
    "type": "food"
  },
  {
    "day": "Monday",
    "starttime": 9,
    "endtime": 10,
    "name": "Get Ready",
    "type": "prep"
  },
  {
    "day": "Monday",
    "starttime": 10,
    "endtime": 11,
    "name": "Morning Commute",
    "type": "commute"
  },
  {
    "day": "Monday",
    "starttime": 12,
    "endtime": 12,
    "name": "Snack",
    "type": "food"
  },
  {
    "day": "Monday",
    "starttime": 13,
    "endtime": 16,
    "name": "Design Innovation",
    "type": "class"
  },
  {
    "day": "Monday",
    "starttime": 16.5,
    "endtime": 17.5,
    "name": "Evening Commute",
    "type": "commute"
  },
  {
    "day": "Monday",
    "starttime": 18,
    "endtime": 19,
    "name": "Dinner",
    "type": "food"
  },
  {
    "day": "Monday",
    "starttime": 19.5,
    "endtime": 21.5,
    "name": "Capoeira",
    "type": "capoeira"
  },
  {
    "day": "Tuesday",
    "starttime": 7,
    "endtime": 7,
    "name": "Wake Up",
    "type": "moment"
  },
  {
    "day": "Tuesday",
    "starttime": 7.5,
    "endtime": 8,
    "name": "Yoga",
    "type": "yoga"
  },
  {
    "day": "Tuesday",
    "starttime": 8,
    "endtime": 9,
    "name": "Breakfast",
    "type": "food"
  },
  {
    "day": "Tuesday",
    "starttime": 9,
    "endtime": 10,
    "name": "Get Ready",
    "type": "prep"
  },
  {
    "day": "Tuesday",
    "starttime": 10,
    "endtime": 11,
    "name": "Morning Commute",
    "type": "commute"
  },
  {
    "day": "Tuesday",
    "starttime": 11,
    "endtime": 12.5,
    "name": "Data Viz",
    "type": "class"
  },
  {
    "day": "Tuesday",
    "starttime": 12.5,
    "endtime": 13.5,
    "name": "Capoeira Club",
    "type": "capoeira"
  },
  {
    "day": "Tuesday",
    "starttime": 14,
    "endtime": 16.5,
    "name": "Interfaces",
    "type": "class"
  },
  {
    "day": "Thursday",
    "starttime": 14,
    "endtime": 14,
    "name": "Snack",
    "type": "food"
  },
  {
    "day": "Tuesday",
    "starttime": 17,
    "endtime": 18,
    "name": "Evening Commute",
    "type": "commute"
  },
  {
    "day": "Tuesday",
    "starttime": 18,
    "endtime": 19,
    "name": "Dinner",
    "type": "food"
  },
  {
    "day": "Tuesday",
    "starttime": 19.5,
    "endtime": 21.5,
    "name": "Capoeira",
    "type": "capoeira"
  },
  {
    "day": "Wednesday",
    "starttime": 7,
    "endtime": 7,
    "name": "Wake Up",
    "type": "moment"
  },
  {
    "day": "Wednesday",
    "starttime": 7.5,
    "endtime": 8,
    "name": "Yoga",
    "type": "yoga"
  },
  {
    "day": "Wednesday",
    "starttime": 8,
    "endtime": 9,
    "name": "Breakfast",
    "type": "food"
  },
  {
    "day": "Wednesday",
    "starttime": 9,
    "endtime": 10,
    "name": "Get Ready",
    "type": "prep"
  },
  {
    "day": "Wednesday",
    "starttime": 10,
    "endtime": 11,
    "name": "Morning Commute",
    "type": "commute"
  },
  {
    "day": "Wednesday",
    "starttime": 12,
    "endtime": 12,
    "name": "Snack",
    "type": "food"
  },
  {
    "day": "Wednesday",
    "starttime": 12.5,
    "endtime": 15,
    "name": "Creative Coding",
    "type": "class"
  },
  {
    "day": "Wednesday",
    "starttime": 15,
    "endtime": 16,
    "name": "Counseling",
    "type": "appointment"
  },
  {
    "day": "Wednesday",
    "starttime": 15.6,
    "endtime": 17.5,
    "name": "Evening Commute",
    "type": "commute"
  },
  {
    "day": "Wednesday",
    "starttime": 18,
    "endtime": 19,
    "name": "Dinner",
    "type": "food"
  },
  {
    "day": "Wednesday",
    "starttime": 19.5,
    "endtime": 21.5,
    "name": "Capoeira",
    "type": "capoeira"
  },
  {
    "day": "Thursday",
    "starttime": 7,
    "endtime": 7,
    "name": "Wake Up",
    "type": "moment"
  },
  {
    "day": "Thursday",
    "starttime": 7.5,
    "endtime": 8,
    "name": "Yoga",
    "type": "yoga"
  },
  {
    "day": "Thursday",
    "starttime": 8,
    "endtime": 9,
    "name": "Breakfast",
    "type": "food"
  },
  {
    "day": "Thursday",
    "starttime": 9,
    "endtime": 10,
    "name": "Get Ready",
    "type": "prep"
  },
  {
    "day": "Thursday",
    "starttime": 10,
    "endtime": 11,
    "name": "Morning Commute",
    "type": "commute"
  },
  {
    "day": "Thursday",
    "starttime": 11,
    "endtime": 12.5,
    "name": "Data Viz",
    "type": "class"
  },
  {
    "day": "Thursday",
    "starttime": 12.5,
    "endtime": 13,
    "name": "Meet with Clay",
    "type": "meeting"
  },
  {
    "day": "Thursday",
    "starttime": 13.5,
    "endtime": 14.5,
    "name": "Commute",
    "type": "commute"
  },
  {
    "day": "Thursday",
    "starttime": 15,
    "endtime": 19,
    "name": "Univision",
    "type": "fellowship"
  },
  {
    "day": "Thursday",
    "starttime": 19.5,
    "endtime": 21.5,
    "name": "Capoeira",
    "type": "capoeira"
  },
  {
    "day": "Friday",
    "starttime": 7,
    "endtime": 7,
    "name": "Wake Up",
    "type": "moment"
  },
  {
    "day": "Friday",
    "starttime": 7.5,
    "endtime": 8,
    "name": "Yoga",
    "type": "yoga"
  },
  {
    "day": "Friday",
    "starttime": 8,
    "endtime": 9,
    "name": "Breakfast",
    "type": "food"
  },
  {
    "day": "Friday",
    "starttime": 9,
    "endtime": 10,
    "name": "Get Ready",
    "type": "prep"
  },
  {
    "day": "Friday",
    "starttime": 10,
    "endtime": 11,
    "name": "Morning Commute",
    "type": "commute"
  },
  {
    "day": "Friday",
    "starttime": 11.5,
    "endtime": 19,
    "name": "Univision",
    "type": "fellowship"
  },
  {
    "day": "Saturday",
    "starttime": 10.5,
    "endtime": 13,
    "name": "Capoeira",
    "type": "capoeira"
  },
  {
    "day": "Saturday",
    "starttime": 13,
    "endtime": 14,
    "name": "Farmers Market",
    "type": "food"
  },
  {
    "day": "Sunday",
    "starttime": 7,
    "endtime": 7,
    "name": "Wake Up",
    "type": "moment"
  },
  {
    "day": "Sunday",
    "starttime": 7.5,
    "endtime": 8,
    "name": "Yoga",
    "type": "yoga"
  },
  {
    "day": "Sunday",
    "starttime": 8,
    "endtime": 9,
    "name": "Breakfast",
    "type": "food"
  }
];

function setup() {
  createCanvas(canvaswidth,canvasheight);
  noLoop();
  angleMode(DEGREES);
  colorMode(RGB);  // Try changing to HSB.
  from = color('rgba(2, 59, 247,0.8)');
  to = color('rgba(247, 2, 39,0.8)');
  inter1 = lerpColor(from, to, .1);
  inter2 = lerpColor(from, to, .2);
  inter3 = lerpColor(from, to, .3);
  inter4 = lerpColor(from, to, .4);
  inter5 = lerpColor(from, to, .5);
  inter6 = lerpColor(from, to, .6);
  inter7 = lerpColor(from, to, .7);
  inter8 = lerpColor(from, to, .8);
  inter9 = lerpColor(from, to, .9);
}

function draw() {
  b = color('hsla(255, 100%, 50%, 0.2)');
  fill(b);
  stroke(255);
  /*
  arc(150, 150, 180, 180, 125, 165, PIE); //Monday
  arc(150, 150, 180, 180, 165, 205, PIE); //Tuesday
  arc(150, 150, 180, 180, 205, 245, PIE); //Wednesday
  arc(150, 150, 180, 180, 245, 285, PIE); //Thursday
  arc(150, 150, 180, 180, 285, 325, PIE); //Friday
  arc(150, 150, 180, 180, 325, 365, PIE); //Saturday
  arc(150, 150, 180, 180, 365, 55, PIE); //Sunday */
  
  c = color('hsla(160, 100%, 50%, 0.5)');
  fill(c);
  var row, column;
  
  function checkType(v) {
    if (v == "commute") {
      return inter1;
    } else if (v =="yoga") {
      return inter2;
    } else if (v == "food") {
      return inter3;
    } else if (v == "capoeira") {
      return inter4;
    } else if (v == "moment") {
      return inter5;
    } else if (v == "class") {
      return inter6;
    } else if (v == "prep") {
      return inter7;
    } else if (v == "appointment") {
      return inter8;
    } else if (v == "meeting") {
      return inter9;
    } else {
      return to;
    }
  }
  
  noStroke();
  for (var element of myschedule) {
    timewindow = abs(element.endtime - element.starttime);
    column = map(lineassign(element.day), 0, 7, 150, canvaswidth);
    row = map(element.starttime+(timewindow/2), 6, 24, 0, canvasheight);

    if (timewindow > 0) {
      fill(checkType(element.type));
      stroke(checkType(element.type));
      noStroke();
      ellipse(column, row, map(timewindow, 0, 24, 0, canvaswidth));
    } else if (timewindow === 0) {
       fill(checkType(element.type));
       stroke(checkType(element.type));
       stroke(0);
       strokeWeight(3);
       line(row+20, column, row+40, column);
       
       /* Radial version inside the push pop
       translate(150,150);
       rotate(-235);
       rotate(map(element.starttime, 6, 22, (40*lineassign(element.day)), 40 + (40*lineassign(element.day)) ));
       */
    }
  }
  
}

function lineassign(day) {
    if (day == "Monday") {
      return 0;
    } else if (day == "Tuesday") {
      return 1;
    } else if (day == "Wednesday") {
      return 2;
    } else if (day == "Thursday") {
      return 3;
    } else if (day == "Friday") {
      return 4;
    } else if (day == "Saturday") {
      return 5;
    } else if (day == "Sunday") {
      return 6;
    }
  }

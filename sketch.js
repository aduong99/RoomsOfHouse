/***********************************************************************************
	RoomsOfHouse
	by An Duong


***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

var strings = [];

// load all images into an array
function preload() {
  images[0] = loadImage('assets/home.jpg');
  images[1] = loadImage('assets/den.jpg');
  images[2] = loadImage('assets/kitchen.jpg');
  images[3] = loadImage('assets/dining.jpg');
  images[4] = loadImage('assets/hallway.jpg');
  images[5] = loadImage('assets/masterBed.jpg');
  // images[6] = loadImage('assets/masterCloset.jpg');
  // images[7] = loadImage('assets/mainBath.jpg');
  // images[8] = loadImage('assets/living.jpg');
  // images[9] = loadImage('assets/closet2.jpg');
  // images[10] = loadImage('assets/masterBath.jpg');
  // images[11] = loadImage('assets/br2.jpg');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawYard;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}

loadArray = function() {
    strings[0] = "An's Dream Home";
    strings[1] = "";
    strings[2] = "Click on objects to navigate";
}
//-- drawYard() will draw the image at index 0 from the array
drawYard = function() {
   image(images[0]);

   fill(0,0,0);
   text("Front Yard", width/2, height - gTextOffset);

   loadArray();
}

//-- drawDen() will draw the image at index 1 from the array
drawDen = function() {
   image(images[1]);

   fill(240,120,0);
   text("Den", width/2, height - gTextOffset);
}

//-- drawKitchen() will draw the image at index 2 from the array
drawKitchen = function() {
   image(images[2]);

   fill(40,230,120);
   text("Kitchen", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawDining = function() {
   image(images[3];

   fill(255,255,178);
   text("Dining", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawHallway = function() {
   image(images[4]);

   fill(230,50,50);
   text("Hallway", width/2, height - gTextOffset);
}



//-- drawSplash() will draw the image at index 4 from the array
drawMasterBed = function() {
   image(images[5]);


   fill(230,50,50);
   text("Master Bedroom", width/2, height - gTextOffset);
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawYard ) {
    return;
  }

  if( key === '1' ) {
  	drawFunction = drawYard;
  }
  else if( key === '2' ) {
  	drawFunction = drawDen;
  }
  else if( key === '3' ) {
  	drawFunction = drawKitchen;
  }
  else if( key === '4' ) {
  	drawFunction = drawDining;
  }
  else if( key === '5' ) {
  	drawFunction = drawHallway;
  }

  else if( key === '6' ) {
    drawFunction = drawMasterBed;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawYard ) {
    drawFunction = drawDen;
  }
}
/***********************************************************************************
  RoomsOfAHouse 
  by An DUong
  Here is my dream home! I love mid century modern, the color green, lots of plants, and lots of natural lighting.
------------------------------------------------------------------------------------
***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

var midX;
var startY;
var lineHeight = 24;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/home.jpg');
  images[1] = loadImage('assets/den.jpg');
  images[2] = loadImage('assets/kitchen.jpg');
  images[3] = loadImage('assets/dining.jpg');
  images[4] = loadImage('assets/hallway.jpg');
  images[5] = loadImage('assets/masterBed.jpg');
  images[6] = loadImage('assets/masterCloset.jpg');
  images[7] = loadImage('assets/mainBath.jpg');
  images[8] = loadImage('assets/living.jpg');
  images[9] = loadImage('assets/closet2.jpg');
  images[10] = loadImage('assets/masterBath.jpg');
  images[11] = loadImage('assets/br2.jpg');
  // images[12] = loadImage('assets/rabbit.png');
  // images[13] = loadImage('assets/candle.png');
  // images[14] = loadImage('assets/flowerVase3.png');
  // images[15] = loadImage('assets/fruitBasket.png');
  // images[16] = loadImage('assets/plate.png');
  // images[17] = loadImage('assets/teapot.png');
  // images[18] = loadImage('assets/vase.png');
  // images[19] = loadImage('assets/flowerVase2.png');
  // images[20] = loadImage('assets/wallPlant.png');
  // images[21] = loadImage('assets/hourglass.png');
  // images[22] = loadImage('assets/wallFlower.png');
  // images[21] = loadImage('assets/plant3.png');
  // images[22] = loadImage('assets/clock.png');
  // images[23] = loadImage('assets/plant2.png');
  // images[24] = loadImage('assets/plant.png');
  // images[25] = loadImage('assets/books.png');
  // images[26] = loadImage('assets/clocks.png');
  // images[27] = loadImage('assets/basket.png');
  // images[28] = loadImage('assets/panda.png')
  // images[29] = loadImage('assets/theSwing.png');
  // images[30] = loadImage('assets/flowerVase.png');
  // images[31] = loadImage('assets/jewelryBox.png');
  // images[32] = loadImage('assets/decor.png');
  // images[33] = loadImage('assets/elephant.png');
  // images[34] = loadImage('assets/flowers3.png');
  // images[35] = loadImage('assets/plant1.png');
  // images[36] = loadImage('assets/meninas.png');

}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(15);

  // set to one for startup
  drawFunction = drawYard;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawDen = function() {
   image(images[1], width/2, height/2);

   fill(255);
   text("Den", width/2, height - gTextOffset);

   fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'k' to go to kitchen • 'y' to go to yard", width/2, 55);
}

//-- drawTwo() will draw the image at index 1 from the array
drawKitchen = function() {
   image(images[2],width/2, height/2);


   fill(255);
   text("Kitchen", width/2, height - gTextOffset);

    fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'d' to go to dining • 'e' to go to den • 'y' to go to yard", width/2, 55);
}

//-- drawOne() will draw the image at index 2 from the array
drawDining = function() {
   image(images[3],width/2, height/2);

   fill(255);
   text("Dining", width/2, height - gTextOffset);

   fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'k' to go to kitchen • 'h' to go to hallway", width/2, 55);
}

//-- drawOne() will draw the image at index 3 from the array
drawHallway = function() {
   image(images[4],width/2, height/2);

   fill(255);
   text("Hallway", width/2, height - gTextOffset);

   fill(255);
   noStroke();
   rect(width/2 - 400, 20, 800, 55, 20);

   fill(0,80,0);
   text("'d' to go to dining • 'm' to go to master bed • 'r' to bedroom • 't' to main bath • 'l' to living room ", width/2, 55);
}

//-- drawOne() will draw the image at index 4 from the array
drawMasterBed = function() {
   image(images[5],width/2, height/2);

   fill(255);
   text("Master Bedroom", width/2, height - gTextOffset);

   fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'c' to go to closet • 'b' to go to bathroom • 'h' to go to hallway", width/2, 55);
}

drawMasterCloset = function() {
    image(images[6],width/2, height/2);

    fill(255);
    text("Master Closet", width/2, height - gTextOffset);


    fill(255);
    noStroke();
    rect(width/2 - 250, 20, 500, 55, 20);

    fill(0,80,0);
    text("'m' to go to master bedroom • 'b' to go to bathroom", width/2, 55);
}

drawMainBath= function() {
    image(images[7],width/2, height/2);

    fill(255);
    text("Main Bathroom", width/2, height - gTextOffset);

    fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'h' to go to hallway", width/2, 55);
}

drawLiving = function() {
    image(images[8],width/2, height/2);

    fill(230);
    text("Living Room", width/2, height - gTextOffset);

    fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'h' to go to hallway • 'y' to go to yard", width/2, 55);
}

drawCloset2 = function() {
    image(images[9],width/2, height/2);

    fill(255);
    text("Closet", width/2, height - gTextOffset);

    fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'r' to go to bedroom", width/2, 55);
}

drawMasterBath = function() {
    image(images[10],width/2, height/2);

    fill(255);
    text("Master Bathroom", width/2, height - gTextOffset);

    fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'m' to go to master bedroom • 'c' to go to closet", width/2, 55);
}

drawBedroom2 = function() {
    image(images[11],width/2, height/2);

    fill(255);
    text("Bedroom", width/2, height - gTextOffset);

    fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'h' to go to hallway • 's' to go to closet", width/2, 55);
}

drawYard = function() {
   image(images[0],width/2, height/2);

    fill(255);
    text("Front Lawn", width/2, height - gTextOffset);

    fill(255);
   noStroke();
   rect(width/2 - 250, 20, 500, 55, 20);

   fill(0,80,0);
   text("'k' to go to kitchen •  'e' to go to den • 'l' to go living room", width/2, 55);
}



// Change the drawFunction variable based on your interaction
function keyPressed() {


  print(keyCode);

  // draw Yard
  if( drawFunction === drawYard ) {
    if( key === 'k' ) {
        drawFunction = drawKitchen;
    }

    if( key === 'e' ) {
      drawFunction = drawDen;
    }

    if (key === 'l' ) {
      drawFunction = drawLiving;
    }
  }

  // draw Kitchen
  if ( drawFunction === drawKitchen ) {
    if ( key === 'd') {
      drawFunction = drawDining;
    }

    if( key === 'e' ) {
      drawFunction = drawDen;
    }

    if (key === 'y') {
      drawFunction = drawYard;
    }
  }

  // draw Den
  if ( drawFunction === drawDen ) {
    if( key === 'k' ) {
        drawFunction = drawKitchen;
    }

    if (key === 'y') {
      drawFunction = drawYard;
    }
  }

  // draw Dining room
  if ( drawFunction === drawDining ) {
    if ( key === 'h') {
      drawFunction = drawHallway;
    }

    if( key === 'k' ) {
        drawFunction = drawKitchen;
    }
  }

  // draw Hallway
  if ( drawFunction === drawHallway ) {

    if (key === 'd') {
      drawFunction = drawDining;
    }

    if (key === 'm') {
      drawFunction = drawMasterBed;
    }

    if ( key === 'r') {
      drawFunction = drawBedroom2;
    }

    if ( key === 't') {
      drawFunction = drawMainBath;
    }

    if ( key === 'l') {
      drawFunction = drawLiving;
    }
  }

  // draw Main Bathroom
  if ( drawFunction === drawMainBath ) {
    if ( key === 'h' ) {
      drawFunction = drawHallway;
    }
  }

  // draw Bedroom 2
  if ( drawFunction === drawBedroom2 ) {
    if ( key === 'h' ) {
      drawFunction = drawHallway;
    }

    if ( key === 's' ) {
      drawFunction = drawCloset2;
    }
  }

  // draw Closet 2
  if ( drawFunction === drawCloset2 ) {
    if ( key === 'r' ) {
      drawFunction = drawBedroom2;
    }
  }

  // draw Master Bedroom
  if ( drawFunction === drawMasterBed ) {
    if ( key === 'h' ) {
      drawFunction = drawHallway;
    }

    if ( key === 'b' ) {
      drawFunction = drawMasterBath;
    }

    if ( key === 'c' ) {
      drawFunction = drawMasterCloset;
    }
  }

  // draw Master Closet
  if ( drawFunction === drawMasterCloset ) {
    if ( key === 'm' ) {
      drawFunction = drawMasterBed;
    }

    if ( key === 'b' ) {
      drawFunction = drawMasterBath;
    }
  }

  // draw Master Bath 
  if ( drawFunction === drawMasterBath ) {
    if ( key === 'c' ) {
      drawFunction = drawMasterCloset;
    }

    if ( key === 'm' ) {
      drawFunction = drawMasterBed;
    }
  }

  // draw Living Room
  if ( drawFunction === drawLiving ) {
    if ( key === 'h' ) {
      drawFunction = drawHallway;
    }

    if ( key === 'y' ) {
      drawFunction = drawYard;
    }
  }

  // draw Yard again
  if ( drawFunction === drawYard2 ) {
    if (key === 'l' ) {
      drawFunction = drawLiving;
    }

    if ( key === 'e' ) {
      drawFunction = drawDen;
    }

    if ( key === 'k' ) {
      drawFunction = drawKitchen;
    }
  }

}
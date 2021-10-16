var rectX = 0;
var fr = 30;
var clr;
var scan = false;
var xPos = 100;
var yPos = 100;
var rotation = 10;
var catnip1;
var catnip2;
var catnip3;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  frameRate(fr); // Attempt to refresh at starting FPS
  clr = color(255, 0, 0);

  catnip1 = new Catnip(width * .8, height * .8, 10);
  catnip2 = new Catnip(width * .3, height * .2, -20);
  catnip3 = new Catnip(width * .5, height * .5, 30);
  catnip4 = new Catnip(width * .1, height * .7, -30);

  console.log('INITIATE BOOT UP SEQUENCE');
}

function draw() {
  background(20);

  catnip1.display();
  catnip2.display();
  catnip3.display();
  catnip4.display();

  CREATEBASE();
  FACIALSTRUCTURE();
  AUDIOINPUTLEFT();
  AUDIOINPUTRIGHT();
  EARPARTS();
  mousePressed();
  VOICETRANSMITTER();


  catnip1.move();
  catnip2.move();
  catnip3.move();
  catnip4.move();

}

function VOICETRANSMITTER() {
  stroke(166, 102, 46);
  strokeWeight(3);
  line(200, 245, 215, 258);
  line(200, 245, 185, 258);
}

function EARPARTS() {
  stroke(166, 102, 46); //ear hole lines
  strokeWeight(3);
  line(165, 108, 145, 150);
  line(105, 174, 145, 150);
  line(238, 109, 255, 150);
  line(296, 175, 255, 150);
}

function CREATEBASE() {
  fill(255, 156, 69);
  noStroke();
  circle(200, 200, 200); //head and ears
}

function AUDIOINPUTLEFT() {
  fill(255, 156, 69);
  triangle(85, 80, 105, 180, 180, 110);
}

function AUDIOINPUTRIGHT() {
  fill(255, 156, 69);
  triangle(315, 80, 295, 180, 230, 110);
}

function FACIALSTRUCTURE() {
  noStroke();
  fill(250, 238, 227); //eyes
  arc(150, 180, 50, 50, 30, -140, CHORD, PI + QUARTER_PI);
  arc(250, 180, 50, 50, -35, 150, CHORD, PI + QUARTER_PI);

  fill(255, 189, 189); //nose
  triangle(200, 220, 190, 210, 210, 210);

}

function mousePressed() { //turn on robo-cat
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
    noStroke();
    fill(255, 0, 0); //pupils
    triangle(150, 179, 145, 190, 155, 190);
    triangle(150, 206, 145, 190, 155, 190);
    triangle(250, 206, 245, 190, 255, 190);
    triangle(250, 179, 245, 190, 255, 190);
    console.log('SCANNING SUBJECT FOR POTENTIAL CATNIP . . .');

    rectX = rectX + 1 * (deltaTime / 10); // Move Rectangle in relation to deltaTime

    if (rectX >= width) {
      rectX = 0;
    }

    noStroke();
    fill(clr);
    rect(rectX, 320, 20, 50);
  }
}

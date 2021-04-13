let choice = 0;
let initials ='AD';
let lastPrnt = 1;
let noiseHere = 0.0;

function setup() {
  createCanvas(1050, 650);
  background(248,248,248);

  blackBrush();
  redBrush();
  blueBrush();
  pastelBrush();

  button = createButton('SEND');
  button.mousePressed(msgReceive);

}

function draw() {
  colorMode(RGB);
  strokeWeight(10);

  if (keyIsPressed) {
    choice = key;
    clear_print();
  }

  if (mouseIsPressed){
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice) {
 if (toolChoice == '1' ) {

  colorMode(RGB);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '2') {

  colorMode(RGB);
  stroke(255, 0, 0);
  line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '3') {

  colorMode(RGB);
  stroke(0, 0, 255);
  line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

  colorMode(HSB);
  // background(frameCount % 360, 100, 100);
  if(mouseIsPressed){
  noStroke();
  stroke((5*frameCount) % 360, 40, 100);
  fill((5*frameCount) % 360, 100, 100);

    // ellipse(mouseX, mouseY, 30,30);
  line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

function clear_print() {
  if(key == 'p' || key == 'P') {
    savePic();
  } else if (key == 'x' || key == 'X') {
    clear();
    background(248,248,248);
    blackBrush();
    redBrush();
    blueBrush();
    pastelBrush();
    choice = 0;
  }

}

function savePic(){
  imgName = initials + '-' + month() + '-' + day() + '-' + year();
  if (second()!=lastPrnt) {
    saveCanvas(imgName, 'jpg');
  }
  lastPrnt=second();
}

function msgReceive(){
  alert('Message sent!');
  clear();
  background(248,248,248);
  blackBrush();
  redBrush();
  blueBrush();
  pastelBrush();
  choice = 0;
}

function blackBrush(){
  noStroke();
  fill(0);
  circle(30, 30, 35);
  fill(255);
  textSize(25);
  text('1', 23, 39);
}

function redBrush(){
  noStroke();
  fill(255, 0, 0);
  circle(75, 30, 35);
  fill(0);
  textSize(25);
  text('2', 68, 40);
}

function blueBrush(){
  noStroke();
  fill(0, 0, 255);
  circle(120, 30, 35);
  fill(255);
  textSize(25);
  text('3', 113.5, 39);
}

function pastelBrush(){
  fill(249, 227, 255);
  circle(165, 30, 35);
  fill(0);
  textSize(26);
  text('?', 158, 39);
}

let choice = 1;
let initials ='AD';
let lastPrnt = 1;
let noiseHere = 0.0;
let brushSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(254, 240, 255);
}

function draw() {
  colorMode(RGB);
  background(254, 240, 255, 10);
  strokeWeight(brushSize);

  noiseHere += 0.10;
  brushSize = noise(noiseHere) * 100;

  if (keyIsPressed) {
    choice = key;
    clear_print();
  }

  if (mouseIsPressed){
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice) {
 if (toolChoice == '1' ) { //cool rainbow brush a friend showed me

  colorMode(HSB);
  // background(frameCount % 360, 100, 100);
  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);

    // ellipse(mouseX, mouseY, 30,30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    }

  } else if (toolChoice == '2') {

    colorMode(RGB);
    stroke(153, 255, 248);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '3') {

    colorMode(RGB);
    stroke(255, 216, 161);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function clear_print() {
  if(key == 'p' || key == 'P') {
     savePic();
  } else if (key == 'DELETE') {
    clear();
  }

}

function savePic(){
  imgName = initials + '-' + month() + '-' + day() + '-' + year();
  if (second()!=lastPrnt) {
    saveCanvas(imgName, 'jpg');
  }
  lastPrnt=second();
}

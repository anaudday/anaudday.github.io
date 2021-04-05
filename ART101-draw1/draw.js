let choice = 1;
let initials ='AD';
let lastPrnt = 1;

function setup() {
  createCanvas(800, 800);
}

function draw() {
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
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
    }

  } else if (toolChoice == '2') {

    stroke(236, 142, 68);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '3') {

    stroke(1223, 503, 155);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function clear_print() {
  if (key == 'x' || key == 'X') {
      createCanvas(windowWidth, windowHeight);
      background(199, 209, 255);
  } else if (key == 'p' || key == 'P') {
     savePic();
  }

}

function savePic(){
  imgName = initials + '-' + month() + '-' + day() + '-' + year();
  if (second()!=lastPrnt) {
    saveCanvas(imgName, 'jpg');
  }
  lastPrnt=second();
}

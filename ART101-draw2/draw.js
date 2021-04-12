let choice = 1;
let initials ='AD';
let lastPrnt = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
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

    colorMode(RGB);
    stroke(153, 255, 248);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '3') {

    colorMode(RGB);
    stroke(255, 216, 161);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function clear_print() {
  if(key == 'p' || key == 'P') {
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

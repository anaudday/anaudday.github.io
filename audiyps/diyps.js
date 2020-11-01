var img;
var boba ='mybobatea'; // your initials
var choice = 'g'; // starting choice, so it is not empty
var screenbg = (199, 209, 255);
var lastscreenshot=61; // last screenshot never taken

function preload() {
  glass = loadImage('https://anaudday.github.io/audiyps/empty-glass.png');
  bobapearl = loadImage('https://anaudday.github.io/audiyps/boba-pearl.png');
  mango = loadImage('https://anaudday.github.io/audiyps/mango-bit.png');
  aloe = loadImage('https://anaudday.github.io/audiyps/aloe-vera.png');
  pokeball = loadImage('https://anaudday.github.io/audiyps/pokeball.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);  // canvas size
background(199, 209, 255);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // house milk tea
   
    stroke(232, 201, 160);
    strokeWeight(80);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // thai milk tea

    stroke(236, 142, 68);
    strokeWeight(80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // strawberry milk tea

    stroke(250, 212, 230);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // matcha milk tea

    stroke(207, 247, 129);
    strokeWeight(80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // taro milk tea
  
    stroke(215, 201, 224);  
    strokeWeight(80);
    line(mouseX, mouseY, pmouseX, pmouseY);
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { // boba pearl

    image(bobapearl, mouseX, mouseY);
  } else if (toolChoice == '7') { // mango bit

    image(mango, mouseX, mouseY);
  } else if (toolChoice == '8') { // aloe vera

    image(aloe, mouseX, mouseY);
  } else if (toolChoice == '9') { // pokeball

    image(pokeball, mouseX, mouseY);
  } else if (toolChoice== 'g') { // cup
      
    image(glass, mouseX, mouseY);  
  }
  
 }

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
      createCanvas(windowWidth, windowHeight);  // canvas size
      background(199, 209, 255);   // use our background screen color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }

}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=boba+month()+day()+year();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}
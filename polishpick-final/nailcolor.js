let color = ['red','orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black', 'grey'];

let clr;
let pick;

function preload() {
  hand = loadImage('https://anaudday.github.io/polishpick-final/hand-nails.png');
}

function setup() {
  createCanvas(560, 560);
  background(400);
  frameRate(60);
  image(hand, 0, 0);
  prompt();
}

function draw() {
}

function mousePressed() {
  clr = int(random(color.length));
  pick = color[clr] + '!';
  answer();
  prompt();
}

function prompt() {
  fill(0);
  textAlign(CENTER);
  textSize(18);
  textStyle(ITALIC);
  text('What color should I paint my nails today?', width*0.5, height*0.15);
}

function answer() {
  background(400);
  fill(0);
  textAlign(CENTER);
  text(pick, width*0.5, height*0.5)
}

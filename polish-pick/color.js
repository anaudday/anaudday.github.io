let color = ['red','orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black', 'grey'];

let clr;
let pick;

function setup() {
  createCanvas(400, 400);
  background(400);
  frameRate(60);
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

let OPI = ["Looks great!", "Eh..", "Pick another.", "So pretty!", "Looks alright.", "OMG! Love it!", "Super cute!", "Wow!"];
let thoughts;

function preload() {
  hand = loadImage('https://anaudday.github.io/polishpick-final/hand-nails.png');
}

function setup() {
  createCanvas(560, 600);
  frameRate(60);
  background(255);

  fill(0);
  textAlign(CENTER);
  textSize(20);
  textStyle(ITALIC);

  text('What color should I paint my nails today? (Click to choose.)', width*0.5, height*0.07);
}

function draw() {
  image(hand, 0, 80);
}

function mousePressed() {
  text('What color should I paint my nails today?', width*0.5, height*0.07);
  background(255);
  rv = random(255);
  gv = random(255)
  bv = random(255);
  pickColor();

  op = int(random(OPI.length));
  thoughts = OPI[op];
  yesNo();
}

function pickColor() {
  fill(rv, gv, bv);
  noStroke();
  square(10, 80, 500);
}

function yesNo() {
  fill(0);
  textAlign(CENTER);
  textSize(22);

  text(thoughts, width*0.5, height*0.12)
}

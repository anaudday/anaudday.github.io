let state = 'title';
let cnv;
let points = 0;

// This is supposed to be a preview to one of the paths you can choose.

function setup() {
  cnv = createCanvas(600, 600);
}

function draw() {

  switch (state) {
    case 'title':
      titlePage();
      cnv.mouseClicked(titleClick);
      break;
    case 'level one':
      lvlOne();
      cnv.mouseClicked(lvlOneClick);
      break;
    case 'the end':
      theEnd();
      cnv.mouseClicked(endClick);
      break;
  }
}

function titlePage() {
  background(220);
  textSize(50);
  textFont('Cantarell');
  textStyle(ITALIC);
  text('lifeUnlike', 90, 200);

  textSize(20);
  textStyle(NORMAL);
  text('Click to start', 90, 300);
}

function titleClick() {
  console.log('title');
  state = 'level one';
}

function lvlOne() {
  background(194, 213, 255);

  textFont('Cantarell');
  textSize(25);
  text('click to live another day', 70, 80);

  textSize(16);
  text('Days spent here: ' + points, 70, 120);
}

function lvlOneClick() {
  points++;
  console.log('Days spent here: ' + points);

  if (points > 5) {
    state = 'the end';
  }
}

function theEnd() {
  background(115, 4, 0);
  textFont('Georgia');
  textSize(28);
  textStyle(BOLD);
  text("YOU'VE LIVED LONG ENOUGH.", 30, 250);
  text("THE HIERARCHY HAS KILLED YOU.", 30, 290);

  textSize(22);
  textStyle(NORMAL);
  text('Click to restart your life', 30, 550);
}

function endClick() {
  state = 'level one';
  points = 0;
}

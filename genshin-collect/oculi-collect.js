var ballx = 450;
var bally = 150;
var ballSize = 80;
var score =0;
var gameState= "L1";

function preload() {
  Mondstadt = loadImage('https://anaudday.github.io/dot_touch/mondstadt.png');
  Liyue = loadImage('https://anaudday.github.io/dot_touch/liyue.png');
  statue7 = loadImage('https://anaudday.github.io/dot_touch/statueof7.png');
  anemo = loadImage('https://anaudday.github.io/dot_touch/anemoculus.png');
  geo = loadImage('https://anaudday.github.io/dot_touch/geoculus.png');
}

function setup() {
  createCanvas(940, 600);
  textAlign(CENTER);
} // end setup


function draw() {
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="victory"){
    endScreen();
  }
  
  text(("Oculi collected: " + score), width/2, 40);

} // end draw


function levelOne(){
  background(Mondstadt);
  fill(4,88,90);
  text("Mondstadt", width/1.3, height-40);
  textFont('Palatino Linotype', 30);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/4){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  image(anemo, ballx, bally, ballSize, ballSize);
  
  
} // end level one

function levelTwo(){
  background(Liyue);
  fill(150, 89, 6);
  text("Liyue", width/4, height-40);
  textFont('Palatino Linotype', 30);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "victory";
  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(geo, ballx, bally, ballSize, ballSize);
} // end level two

function endScreen(){ // win game
  background(statue7);
  fill(232, 255, 245);
  text("You collected all the oculi! The Statue of the Seven appreciates your offerings.", width/2, height-100);
  textFont('Palatino Linotype', 25);
}

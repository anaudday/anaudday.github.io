class Choice {
  constructor(xPos, yPos) {
	this.x = xPos;
	this.y = yPos;
	}
  
  display(xPos, yPos) {
    noStroke();
    fill(255);
    circle(xPos, yPos, 110);
  }

}
class titleChoice {
  constructor(xPos, yPos) {
	this.x = xPos;
	this.y = yPos;
	}
  
  display() {
    noStroke();
    fill(255);
    circle(this.x, this.y, 150);
  }

}
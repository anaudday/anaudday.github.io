class Catnip {
  constructor(_xPos, _yPos, _rotation) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
  }

  display() {
    noStroke();
    fill(192, 229, 84);

    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    rectMode(CENTER);
    circle(-width * .15, -height * .04, -height * .02);
    circle(width * .15, height * .04, -height * .06);
    circle(width * .04, -height * .15, -height * .04);
    circle(-width * .04, height * .15, -height * .08);
    pop();
  }

  move() {
    if (this.yPos <= height * 1.08) {
      this.yPos += 5;
    } else {
      this.yPos = -height * .08;
    }
  }
}
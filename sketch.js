// Worlds Second Hardest Game
// Jeremy Tratch
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walls {
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 5;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  
}

function moveCube() {
  if (keyIsDown === "w") {
    this.x -= this.dx;
  }

  if (keyIsDown === "s") {
    this.x += this.dx;
  }  

  if (keyIsDown === "a") {
    this.y -= this.dy;
  }  

  if (keyIsDown === "w") {
    this.y += this.dy;
  }
}
let a;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  a= random(25)
  
  noStroke();
  fill(223,100,10);
  circle(mouseX, mouseY, a)
 
}
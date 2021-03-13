function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(0);
  fill(240, 150, 150);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  box((sin(frameCount/4) * 50) + 250);
  
}
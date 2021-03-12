function setup() {
  createCanvas(700 , 700);
  background(240);
}

function draw() {
  if (mouseIsPressed) {
    fill( 33, 93, 120 );
  } else {
    fill(255, 87, 51);
  }
  ellipse(mouseX, mouseY, 40, 40);
}
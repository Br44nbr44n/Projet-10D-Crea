function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  if (mouseIsPressed) {
    fill( 33, 93, 120 );
  } else {
    fill(255, 87, 51);
  }
  square(mouseX, mouseY, 40, 40);
}
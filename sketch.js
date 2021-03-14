// draw a spinning box
// with width, height and depth of 50
function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  stroke(  42, 191, 54  );
  line(0,0,0,100,0,0);
  line(100,0,0,100,100,0);
  line(100,100,0,0,100,0);
  line(0,100,0,0,0,0);
  line(0,0,0,50,50,100);
  line(100,0,0,50,50,100);
  line(100,100,0,50,50,100);
  line(0,100,0,50,50,100);

}
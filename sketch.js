const zoomColor = 7;
const saturation = 60;
const lightness = 100;
const scrollSpeed = 1.2;

function setup() {
  createCanvas(700, 700);
  background(142, 95, 194);
  colorMode(HSB);
}

function draw() {
  let hue = frameCount * scrollSpeed % 360 * 10;

  for(let i = 0; i < height; i++){
    let newHue = hue+i;
    fill((newHue/zoomColor)%360, saturation, lightness);
    noStroke();
    circle(width/2 , height/2, height/1.5);
  }

  fill ( 'rgb(142, 95, 194)' );
  noStroke ();
  beginShape();
vertex(0, 450);
vertex(700, 450);
vertex(700, 700);
vertex(0, 700);
endShape(CLOSE);

beginShape();
vertex(0, 350);
vertex(700, 350);
vertex(700, 400);
vertex(0, 400);
endShape(CLOSE);

beginShape();
vertex(0, 290);
vertex(700, 290);
vertex(700, 320);
vertex(0, 320);
endShape(CLOSE);

beginShape();
vertex(0, 245);
vertex(700, 245);
vertex(700, 260);
vertex(0, 260);
endShape(CLOSE);

beginShape();
vertex(0, 215);
vertex(700, 215);
vertex(700, 225);
vertex(0, 225);
endShape(CLOSE);

beginShape();
vertex(0, 200);
vertex(700, 200);
vertex(700, 205);
vertex(0, 205);
endShape(CLOSE);

}
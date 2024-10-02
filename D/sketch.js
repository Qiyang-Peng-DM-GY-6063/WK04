function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(2);
  let pitch = 100;
  let sqDim = 0.9 * pitch;

  translate(pitch / 2, pitch / 2);

  //randomSeed(1010);
  //draw a column of rows

  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      let rn = random(0, 6);
      let ccc = random(["#ff0000","#00ff00","0000ff"]);

      push();
      fill(ccc);
      translate(x, y);

      if (rn < 3) {
        rect(0, 0, sqDim);
      } else if (rn < 5) {
        ellipse(0, 0, sqDim);
      } else {
        star(0, 0, sqDim, 10, 4);
      }
      pop();
    }
  }
}

function draw() {}

function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);

  for (let cnt = 0; cnt < l; cnt++) {
    line(c, -c, r, 0);
    line(c, c, r, 0);

    rotate(360 / l);
  }

  // line(-c, c, 0, r);
  // line(c, c, 0, r);

  // line(-c, -c, -r, 0);
  // line(-c, c, -r, 0);

  // line(-c, -c, 0, -r);
  // line(c, -c, 0, -r);
  pop();
}

function mouseClicked(){
  setup();
}
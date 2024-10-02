function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);

  for (let cnt = 0; cnt < l ; cnt++) {
    line(c, -c, r, 0);
    line(c, c, r, 0);

    rotate(360/l);
  }

  // line(-c, c, 0, r);
  // line(c, c, 0, r);

  // line(-c, -c, -r, 0);
  // line(-c, c, -r, 0);

  // line(-c, -c, 0, -r);
  // line(c, -c, 0, -r);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150, 150, 220);
  strokeWeight(0.5);

  angleMode(DEGREES);

  star(width / 4, height / 2, 200, 10,24);
  star(width / 2, height / 2, 350, 25,360);
  star((3 * width) / 4, height / 2, 100, 10,24);

  for(let x = 100; x<width; x+=100){
    star(x, height / 5, 350, 25,360); 
  }
}

function draw() {}

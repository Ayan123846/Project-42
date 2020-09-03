function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(rgb(255, 132, 8));
  noFill();
  let secondHand = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondHand);

  stroke(rgb(251, 80, 73));
  let minuteHand = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteHand);

  stroke(rgb(69, 118, 148));
  let hourHand = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourHand);

  push();
  rotate(secondHand);
  stroke(rgb(255, 132, 8));
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteHand);
  stroke(rgb(251, 80, 73));
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourHand);
  stroke(rgb(69, 118, 148));
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
}

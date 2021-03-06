function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  background(0);
  stroke(255);
  strokeWeight(20);
  pi = Math.PI;
  start = [w / 3, h / 2];
  middle = [w / 2, h / 2];
  end = [(2 * w) / 3, h / 2];
  angle = pi / 4;
  delta = 0;
  i = 0;
  offset = 30;
}

function draw() {
  background(0);
  noFill();

  delta += 0.01;
  angle += (Math.PI / 100) * noise(delta);
  start[1] = -(h / 4) * cos(angle) + h / 2;
  middle[1] = (h / 3) * sin(angle) + h / 2;
  end[1] = (h / 5) * sin(angle) + h / 2;

  a1 = [100 * cos(angle) + start[0], 100 * sin(angle) + start[1]];
  b1 = [-100 * cos(angle) + middle[0], -100 * sin(angle) + middle[1]];
  a2 = [-100 * cos(angle + pi) + middle[0], -100 * sin(angle + pi) + middle[1]];
  b2 = [100 * cos(angle + pi) + end[0], 100 * sin(angle + pi) + end[1]];
  bezier(start[0], start[1], a1[0], a1[1], b1[0], b1[1], middle[0], middle[1]);
  bezier(middle[0], middle[1], a2[0], a2[1], b2[0], b2[1], end[0], end[1]);
}

setup = (_) => {
  //#つぶやきProcessing
  w = windowWidth;
  h = windowHeight;
  c = "#203744";
  r = 0;
  createCanvas(w, h);
  background(c);
  stroke(c);
  strokeWeight(7);
  for (i = 3600; i > 1; i -= i / 150) {
    r = i / 15;
    t = (i / 360) * 2 * Math.PI;
    circle(r * Math.cos(t) + w / 2, r * Math.sin(t) + h / 2, r);
  }
  fill(c);
  circle(w / 2, h / 2, 60);
};

setup = (_) => {
  //#つぶやきProcessing
  w = windowWidth;
  h = windowHeight;
  c = "#203744";
  r = 0;
  createCanvas(w, h);
  background(c);
  stroke(c);
  strokeWeight(10);
  for (i = 3600; i > 1; i -= i / 200) {
    r = i / 10;
    t = (i / 360) * 2 * Math.PI;
    circle(r * Math.cos(t) + w / 2, r * Math.sin(t) + h / 2, 60);
  }
  fill(c);
  circle(w / 2, h / 2, 60);
};

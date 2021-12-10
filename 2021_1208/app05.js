f = 0;
draw = (_) => {
  //#つぶやきProcessing
  c = "#203744";
  r = 0;
  createCanvas((w = 750), w);
  background(c);
  stroke(c);
  strokeWeight(3);
  for (i = 3600; i > 1; i -= i / 150) {
    r = i / 15;
    t = (i / 360) * 2 * Math.PI;
    d = t + f / 100;
    circle(r * cos(t) + w / 2, r * sin(t) + w / 2, (r * sin(d)) / 1.5);
  }
  f++;
};

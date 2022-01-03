f = 0;
draw = (_) => {
  //#つぶやきProcessing
  if (f == 0) {
    c = "#203744";
    r = 0;
    createCanvas((w = 750), w);
  }
  background(c);
  stroke(c);
  strokeWeight(25);
  for (i = 3600; i > 1; i -= 25) {
    r = i / 15;
    t = (i / 360) * 2 * Math.PI;
    d = t + f / 100;
    circle(r * cos(t) + w / 2, r * sin(t) + w / 2, r * noise(sin(d)) * cos(d));
  }
  f++;
};

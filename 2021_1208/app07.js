f = 0;
draw = (_) => {
  //#つぶやきProcessing
  if (f == 0) {
    (c = "#203744"), (r = 0);
    createCanvas((w = 750), w);
  }
  background(c);
  noStroke();
  for (i = 10000; i > 0; i -= 50) {
    fill(255, (i / 10000) * 255);
    r = i / 44;
    t = (i / 360) * 2 * Math.PI;
    d = t + f / 100;
    b = (r * sin(d)) / 2;
    rect(r * cos(t) + w / 2, r * sin(t) + w / 2, b, b);
  }
  f++;
};

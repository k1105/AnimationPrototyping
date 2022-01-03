f = 0;
draw = (_) => {
  //#つぶやきProcessing
  if (f == 0) {
    (a = 1), (b = 1), (k = 300), (a2 = random() * 0.6 - 0.3);
    createCanvas((w = windowWidth), (h = windowHeight));
    background(0);
    p = [w / 2, h / 2];
    c = [p[0] + k * random() - k / 2, p[1] + k * random() - k / 2];
    strokeCap(SQUARE);
  }
  n = [c[0] + k * random() - k / 2, c[1] + k * random() - k / 2];
  cp = sqrt((c[0] - p[0]) ** 2 + (c[1] - p[1]) ** 2);
  nc = sqrt((n[0] - c[0]) ** 2 + (n[1] - c[1]) ** 2);
  if (
    nc * cp > 0 &&
    ((n[0] - c[0]) * (p[0] - c[0]) + (n[1] - c[1]) * (p[1] - c[1])) /
      (cp * nc) <
      0 &&
    n[0] > 0 &&
    n[1] > 0 &&
    (n[0] - w / 2) ** 2 + (n[1] - h / 2) ** 2 < (h / 3) ** 2
  ) {
    t = Math.atan2(n[1] - c[1], n[0] - c[0]);
    p = Math.atan2(-(n[0] - c[0]), n[1] - c[1]);
    l = sqrt((n[0] - c[0]) ** 2 + (n[1] - c[1]) ** 2);
    a1 = a2;
    a2 = t + random() * 0.6 - 0.3;

    stroke(255);
    strokeWeight(80);
    line(n[0], n[1], c[0], c[1]);
    bezier(
      n[0],
      n[1],
      (l / 3) * cos(a1) + n[0],
      (l / 3) * sin(a1) + n[1],
      (-l / 3) * cos(a2) + c[0],
      (-l / 3) * sin(a2) + c[1],
      c[0],
      c[1]
    );
    stroke(0);
    strokeWeight(5);
    for (i = -3; i < 4; i++) {
      dx = cos(p) * 10 * i;
      dy = sin(p) * 10 * i;
      line(n[0] + dx, n[1] + dy, c[0] + dx, c[1] + dy);
    }
    p = c;
    c = n;
  }
  f++;
};

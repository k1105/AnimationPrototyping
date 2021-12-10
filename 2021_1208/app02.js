setup = (_) => {
  createCanvas(windowWidth, windowHeight);
  r = 0;
  for (t = 0; t < 3600; t += 10) {
    r = t / 10;
    circle(
      r * Math.cos((t / 360) * 2 * Math.PI) + windowWidth / 2,
      r * Math.sin((t / 360) * 2 * Math.PI) + windowHeight / 2,
      50
    );
  }
};

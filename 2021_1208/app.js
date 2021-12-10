function setup() {
  createCanvas(windowWidth, windowHeight);
  let theta = 0;
  for (let r = 0; r < windowWidth; r += 1) {
    theta += (5 * r) % 360;
    circle(
      r * Math.cos((theta / 360) * 2 * Math.PI) + windowWidth / 2,
      r * Math.sin((theta / 360) * 2 * Math.PI) + windowHeight / 2,
      50
    );
  }
}

function setup() {
  createCanvas(300, 300, WEBGL);
  c = "#203744";
  background(c);
  let art = createGraphics(400, 400);
  art.fill(20, 255, 30);
  texture(art);
  sphere(100);
}

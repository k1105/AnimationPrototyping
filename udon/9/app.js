const num = 150; //num of circle
const step = 0.01; // udon_length = num * step
const anchorNum = 10;
const pi = Math.PI;
const boundaryRadius = 50;
const udonWidth = 5;
const dishSize = 120;
let angle = pi / 4;
let delta = 0;
let trajectory = [];
let points = [];
let time = 0;
let rows;
let cols;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  rows = ceil(w / dishSize);
  cols = ceil(h / dishSize);
  stroke(255, 255, 230);

  // initialize points
  for (let n = 0; n < rows * cols; n++) {
    trajectory[n] = [];
    points[n] = [];

    trajectory[n] = resetPositionInCircle(anchorNum, 0, 0, boundaryRadius);
    for (let i = 0; i < num; i++) {
      const t = i * step;
      points[n].push(getPositionOnTrajectory(t, trajectory[n]));
    }
  }
  console.log(trajectory.length);
}

function draw() {
  background(0, 95, 171);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      push();
      noFill();
      strokeWeight(1);
      translate(dishSize * i + dishSize / 2, dishSize * j + dishSize / 2);
      circle(0, 0, dishSize);
      fill(255, 255, 230);
      const pos = points[i * cols + j];
      for (let k = 0; k < pos.length; k++) {
        circle(pos[k][0], pos[k][1], udonWidth * (1 + noise(0.01 * k)));
      }
      pop();
    }
  }
  for (let n = 0; n < rows * cols; n++) {
    points[n].shift();
  }
  const t = ((num + time) * step) % anchorNum;
  for (let n = 0; n < rows * cols; n++) {
    points[n].push(getPositionOnTrajectory(t, trajectory[n]));
  }
  time++;
}

const getPositionOnTrajectory = (t, trajectory) => {
  const i = Math.floor(t);
  const ratio = t - i;
  const a0 = trajectory[i % trajectory.length];
  const a1 = trajectory[(i + 1) % trajectory.length];
  const input = [
    [a0.position[0], a0.position[1]],
    [a0.oppositeHandle[0], a0.oppositeHandle[1]],
    [a1.handle[0], a1.handle[1]],
    [a1.position[0], a1.position[1]],
  ];
  return getPositionOnBezier(input, 1 - ratio);
};

const getPositionOnBezier = (p, t) => {
  if (p.length == 1) {
    return p[0];
  } else {
    const new_points = [];
    for (let i = 0; i < p.length - 1; i++) {
      const new_point = [
        p[i][0] * t + p[i + 1][0] * (1 - t),
        p[i][1] * t + p[i + 1][1] * (1 - t),
      ];
      new_points.push(new_point);
    }

    return getPositionOnBezier(new_points, t);
  }
};

const resetPositionInCircle = (num, x, y, radius) => {
  let p = new Array(num);
  for (i = 0; i < num; i++) {
    k = random();
    theta = pi * 2 * random();
    const position = [radius * cos(theta) + x, radius * sin(theta) + y];
    p[i] = new Anchor(
      position,
      radius / 3,
      k * (theta + pi / 2) + (1 - k) * (2 * pi * random())
    );
  }

  return p;
};

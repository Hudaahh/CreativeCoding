function setup() {
  createCanvas(600, 600);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 0, 15, 10); // Slight transparency for trail effect

  let gridSize = 30;
  let time = millis() * 0.001;

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let n = noise(x * 0.01, y * 0.01, time * 0.5);
      let angle = TAU * n;
      let radius = map(n, 0, 1, 5, gridSize);
      let hue = map(n, 0, 1, 180, 360);

      let xOffset = cos(angle) * 5;
      let yOffset = sin(angle) * 5;

      fill(hue, 80, 100, 70);
      ellipse(x + xOffset, y + yOffset, radius);
    }
  }
}

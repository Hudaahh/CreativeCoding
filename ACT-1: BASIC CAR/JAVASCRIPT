function setup() {
  createCanvas(600, 400);
  background(220);
  drawCar(150, 250);
}

function drawCar(x, y) {
  // Car Body
  fill(255, 0, 0); // Red
  rect(x, y, 300, 50);         // Bottom part of car
  rect(x + 50, y - 40, 200, 40); // Top part of car (roof)

  // Windows
  fill(173, 216, 230); // Light blue
  rect(x + 60, y - 35, 40, 30); // Left window
  rect(x + 150, y - 35, 40, 30); // Right window

  // Wheels
  fill(0); // Black
  ellipse(x + 60, y + 50, 50, 50); // Left wheel
  ellipse(x + 240, y + 50, 50, 50); // Right wheel

  // Wheel rims
  fill(100);
  ellipse(x + 60, y + 50, 20, 20);
  ellipse(x + 240, y + 50, 20, 20);

  // Headlights
  fill(255, 255, 0); // Yellow
  ellipse(x + 295, y + 15, 10, 10);

  // Taillights
  fill(255, 100, 100); // Pinkish-red
  ellipse(x + 5, y + 15, 10, 10);
}

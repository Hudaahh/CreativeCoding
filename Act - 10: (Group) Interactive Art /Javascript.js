let snowflakes = [];
let showMessage = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
}

function draw() {
  // Darker blue shades based on mouse position
  let r = map(mouseX, 0, width, 50, 0);    // Lower red for darker blue
  let g = map(mouseY, 0, height, 100, 30); // Lower green for deeper blue
  let b = 180;                             // Constant darker blue base
  background(r, g, b);

  // Snowflakes falling
  if (mouseIsPressed || frameCount % 5 === 0) {
    for (let i = 0; i < 3; i++) {
      snowflakes.push(new Snowflake());
    }
  }

  for (let flake of snowflakes) {
    flake.update();
    flake.display();
  }

  // Display welcome message on spacebar press
  if (showMessage) {
    fill('#87CEEB'); // Sky blue text
    stroke(255);
    strokeWeight(2);
    textSize(50);
    text("❄️ Welcome to Bath Spa University ❄️", width / 2, height / 2);
  }
}

function keyPressed() {
  if (key === ' ') {
    showMessage = !showMessage;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Snowflake class
class Snowflake {
  constructor() {
    this.x = random(width);
    this.y = random(-10, -100);
    this.size = random(2, 8);
    this.speed = random(1, 3);
    this.wind = random(-0.5, 0.5);
  }

  update() {
    this.y += this.speed;
    this.x += this.wind;
    if (this.y > height) {
      this.y = random(-100, -10);
      this.x = random(width);
    }
  }

  display() {
    noStroke();
    fill(255, 255, 255, 200);
    ellipse(this.x, this.y, this.size);
  }
}

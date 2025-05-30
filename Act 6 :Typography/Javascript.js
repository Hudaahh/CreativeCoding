let quote = "BE REAL, BE YOU.";
let baseY;
let offset = 0;
let fontSize = 32;
let colors = ["#FFC0CB", "#FFB6C1", "#FFCCE5", "#FF99CC"];
let currentColor;

let sparkles = [];

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  baseY = height / 2;
  currentColor = random(colors);
  background("#FFF0F5");

  // Create sparkle particles
  for (let i = 0; i < 100; i++) {
    sparkles.push(new Sparkle());
  }
}

function draw() {
  background("#FFF0F5");

  // Gentle text movement
  offset = sin(frameCount * 0.03) * 5;

  // Draw quote
  fill(currentColor);
  textSize(fontSize);
  text(quote, width / 2, baseY + offset);

  // Draw sparkles
  for (let sparkle of sparkles) {
    sparkle.update();
    sparkle.display();
  }
}

function mousePressed() {
  // Change quote color on click
  currentColor = random(colors);
}

// Sparkle class
class Sparkle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 5);
    this.alpha = random(150, 255);
    this.speedY = random(0.3, 1);
  }

  update() {
    this.y -= this.speedY;
    this.alpha -= 1;

    if (this.alpha <= 0 || this.y < 0) {
      this.reset();
      this.y = height;
    }
  }

  display() {
    noStroke();
    fill(255, 255, 255, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}

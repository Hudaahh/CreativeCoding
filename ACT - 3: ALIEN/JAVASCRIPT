function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(20, 20, 30);

  // Center of canvas
  translate(width / 2, height / 2);

  drawBody();
  drawEyes();
  drawArms();
  drawAntennae();
}

// Alien Body using bezier and shape
function drawBody() {
  push();
  fill(100, 200, 180);
  beginShape();
  vertex(0, -100);
  bezierVertex(60, -80, 60, 80, 0, 120);
  bezierVertex(-60, 80, -60, -80, 0, -100);
  endShape(CLOSE);
  pop();
}

// Eyes using scale and rotation
function drawEyes() {
  for (let i = -1; i <= 1; i += 2) {
    push();
    translate(i * 30, -40);
    rotate(i * 5);
    scale(1.2, 1);
    fill(255);
    ellipse(0, 0, 30, 40); // Eye white
    fill(50, 0, 100);
    ellipse(0, 0, 15, 20); // Pupil
    pop();
  }
}

// Arms using bezier shapes and rotate
function drawArms() {
  for (let i = -1; i <= 1; i += 2) {
    push();
    translate(i * 70, 20);
    rotate(i * 30);
    fill(100, 200, 180);
    beginShape();
    vertex(0, 0);
    bezierVertex(20 * i, 20, 30 * i, 70, 0, 90);
    bezierVertex(-30 * i, 70, -20 * i, 20, 0, 0);
    endShape(CLOSE);
    pop();
  }
}

// Antennae using custom shape and translation
function drawAntennae() {
  for (let i = -1; i <= 1; i += 2) {
    push();
    translate(i * 25, -100);
    rotate(i * 15);
    stroke(200, 100, 255);
    strokeWeight(4);
    noFill();
    beginShape();
    vertex(0, 0);
    bezierVertex(10 * i, -20, 20 * i, -40, 0, -60);
    endShape();
    fill(255, 100, 200);
    noStroke();
    ellipse(0, -60, 15, 15); // Antenna bulb
    pop();
  }
}

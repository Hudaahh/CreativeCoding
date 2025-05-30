let rocketY;
let landed = false;
// hold star positions
let stars = [];
let moonY;
let moonHeight = 350; 

function setup() {
  createCanvas(400, 400);
  // Initial height of the rocket
  rocketY = 100;
  // adjusted so rocket touches top of moon
  moonY = height - moonHeight / 2 + 50; 
  for (let i = 0; i < 100; i++) {
    stars.push(createVector(random(width), random(height / 2)));
  }
}

function draw() {
  // background for Night Sky
  background(10, 10, 30);

  // Drawing the stars
  for (let s of stars) {
    fill(255);
    noStroke();
    ellipse(s.x, s.y, random(1, 3));
  }

  // Drawing the moon surface
  fill(120);
  noStroke();
  ellipse(width / 2, moonY + moonHeight / 2, width * 2, moonHeight);

  // Move rocket
  let targetLandingY = moonY - 60;
  // Move rocket down until it reaches the moon
  if (!landed) {
    rocketY += 1;
    if (rocketY >= targetLandingY) {
      rocketY = targetLandingY;
      // Stops the movement once it landed
      landed = true;
    }
  }

  // Draw the rocket at the current position
  drawRocket(width / 2, rocketY);
  
  // Show smoke effect after landing
  if (landed) {
    for (let i = 0; i < 10; i++) {
      fill(200, 200, 200, 100);
      ellipse(width / 2 + random(-10, 10), rocketY + 50 + random(10), random(5, 10));
    }
  }
}

function drawRocket(x, y) {
  push();
  translate(x, y);

  // Rocket body
  fill(220);
  rectMode(CENTER);
  rect(0, 0, 20, 60);

  // Rocket head (triangle on top)
  fill(255, 0, 0);
  triangle(-10, -30, 10, -30, 0, -50);

 // Side triangles
  fill(255, 100, 100);
  triangle(-10, 30, -20, 40, -10, 40);
  triangle(10, 30, 20, 40, 10, 40);

 // Flame only if rocket is still flying
  if (!landed) {
    let flameHeight = random(20, 35);
    fill(255, 150, 0, 200); // Orange
    triangle(-8, 30, 8, 30, 0, 30 + flameHeight);
  }

  pop();
}

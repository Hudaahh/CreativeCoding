let trail = [];

function setup() {
  createCanvas(1000, 600);
  noStroke();
  background(255);
}

function draw() {
  // Fade the background slightly for trailing effect
  fill(255, 255, 255, 20);
  rect(0, 0, width, height);
  
  // Store mouse positions in trail
  trail.push({ x: mouseX, y: mouseY, t: frameCount });

  // Limit trail length
  if (trail.length > 100) {
    trail.shift();
  }

  // Draw flowery wave
  for (let i = 0; i < trail.length; i++) {
    let p = trail[i];
    let angle = sin(p.t * 0.1 + i) * PI;
    let size = map(i, 0, trail.length, 5, 30);
    let petalCount = 6;
    
    push();
    translate(p.x, p.y);
    rotate(angle);

    fill(255 - i * 2, 100 + i, 200, 150); // Gradual pink/purple
    for (let j = 0; j < petalCount; j++) {
      let a = TWO_PI / petalCount * j;
      let x = cos(a) * size;
      let y = sin(a) * size;
      ellipse(x, y, size / 2, size);
    }
    pop();
  }
}

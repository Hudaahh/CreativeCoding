let boatX = -200;
let netDrop = false;
let netLength = 0;
let fishes = [];

function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
  for (let i = 0; i < 10; i++) {
    fishes.push(createFish());
  }
}

function draw() {
  background(135, 206, 250); // Sky
  drawSun();
  drawSea();
  drawBoat(boatX, 200);
  drawFishes();

  // Move boat
  boatX += 1;
  if (boatX > width + 200) {
    boatX = -200;
    netDrop = false;
    netLength = 0;
    fishes.forEach(f => f.caught = false); // Reset fish
  }

  if (netDrop) {
    drawNet();
    if (netLength < 120) {
      netLength += 2;
    } else {
      checkCatch();
    }
  }
}

function drawBoat(x, y) {
  // Boat base
  fill(139, 69, 19);
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x + 150, y);
  vertex(x + 130, y + 30);
  vertex(x + 20, y + 30);
  endShape(CLOSE);

  // Cabin
  fill(255);
  rect(x + 30, y - 30, 60, 30);
  fill(0);
  rect(x + 35, y - 25, 15, 15);

  // Man
  fill(255, 220, 180); // Face
  ellipse(x + 70, y - 10, 15, 15);
  fill(0); // Body
  rect(x + 65, y - 5, 10, 20);
}

function drawSea() {
  noStroke();
  fill(0, 119, 190);
  rect(0, 230, width, height - 230);

  // Animated waves
  fill(255, 255, 255, 100);
  for (let i = 0; i < width; i += 40) {
    ellipse(i + frameCount % 40, 260 + sin(i + frameCount) * 2, 40, 10);
  }
}

function drawSun() {
  fill(255, 204, 0);
  ellipse(700, 100, 80, 80);
}

function drawNet() {
  stroke(100);
  strokeWeight(2);
  let x = boatX + 70;
  let y1 = 220;
  let y2 = 220 + netLength;
  line(x, y1, x, y2);

  for (let y = y1; y < y2; y += 20) {
    line(x - 5, y, x + 5, y);
  }
}

function createFish() {
  return {
    x: random(100, 700),
    y: random(260, 400),
    size: random(20, 30),
    speed: random(1, 2),
    dir: random([1, -1]),
    color: color(random(100, 255), random(100, 255), random(100, 255)),
    caught: false
  };
}

function drawFishes() {
  for (let fish of fishes) {
    if (!fish.caught) {
      fish.x += fish.speed * fish.dir;
      if (fish.x > width || fish.x < 0) {
        fish.dir *= -1;
      }
    }

    drawFish(fish);
  }
}

function drawFish(fish) {
  fill(fish.color);
  noStroke();
  ellipse(fish.x, fish.y, fish.size * 1.5, fish.size);
  triangle(
    fish.x - fish.size / 2 * fish.dir,
    fish.y,
    fish.x - fish.size * fish.dir,
    fish.y - fish.size / 3,
    fish.x - fish.size * fish.dir,
    fish.y + fish.size / 3
  );
}

function checkCatch() {
  let netX = boatX + 70;
  let netY1 = 220;
  let netY2 = netY1 + netLength;

  for (let fish of fishes) {
    if (!fish.caught &&
        abs(fish.x - netX) < 10 &&
        fish.y >= netY1 && fish.y <= netY2) {
      fish.caught = true;
    }
  }
}

function mousePressed() {
  if (!netDrop && dist(mouseX, mouseY, boatX + 70, 220) < 50) {
    netDrop = true;
  }
}

let data = [
  { label: "Social Media", time: 3, color: "#FFB6C1" },
  { label: "Education", time: 4, color: "#87CEFA" },
  { label: "YouTube", time: 2, color: "#FFD700" },
  { label: "Gaming", time: 1.5, color: "#BA55D3" },
  { label: "Reading", time: 1, color: "#90EE90" }
];

let totalTime;
let cx, cy, radius;

function setup() {
  createCanvas(500, 500); // ✅ Updated canvas size
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(18);
  cx = width / 2;
  cy = height / 2 - 20; // Slight upward shift for title space
  radius = 150;
  totalTime = data.reduce((acc, item) => acc + item.time, 0);
}

function draw() {
  background(255, 240, 250);
  fill(30);
  textSize(22);
  text("📱 My Daily Screen Time", width / 2, 30);
  textSize(16);

  let lastAngle = 0;
  let mouseAngle = atan2(mouseY - cy, mouseX - cx);
  if (mouseAngle < 0) mouseAngle += 360;

  for (let i = 0; i < data.length; i++) {
    let angle = (data[i].time / totalTime) * 360;
    let isHover = dist(mouseX, mouseY, cx, cy) < radius &&
                  mouseAngle > lastAngle &&
                  mouseAngle < lastAngle + angle;

    fill(isHover ? lerpColor(color(data[i].color), color(255), 0.3) : data[i].color);
    stroke(255);
    strokeWeight(2);
    arc(cx, cy, radius * 2, radius * 2, lastAngle, lastAngle + angle, PIE);

    if (isHover) {
      fill(50);
      text(`${data[i].label}: ${data[i].time} hrs`, cx, cy + radius + 25);
    }

    lastAngle += angle;
  }

  drawLegend();
}

function drawLegend() {
  let x = 20;
  let y = height - 110;
  for (let i = 0; i < data.length; i++) {
    fill(data[i].color);
    noStroke();
    rect(x, y + i * 22, 15, 15);
    fill(30);
    textAlign(LEFT, CENTER);
    textSize(14);
    text(`${data[i].label} (${data[i].time} hrs)`, x + 20, y + i * 22 + 7);
  }
}

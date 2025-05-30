function preload() {
  img = loadImage('ACT 4 - 2.png'); // Make sure the file is in the same folder as your sketch
}

function setup() {
  createCanvas(500, 500);
  img.resize(500, 500); // Resize to fit canvas
  background(255);
  noStroke();
  frameRate(100); // Increase for faster drawing
}

function draw() {
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let c = img.get(x, y); // Get pixel color at (x, y)

  fill(c);
  ellise(x, y, 5, 5); // Draw dot (try 3 to 8 for different styles)
}

let img;

function preload() {
  img = loadImage('ACT 4 - 1.jpg'); // Ensure the image file is in your project folder
}

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);

  img.resize(500, 500); // Resize image to 500x500
  img.loadPixels();
  loadPixels();
  
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      
      let i = (x + y * width) * 4;
      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = a;
    }
  }
  
  updatePixels();
}

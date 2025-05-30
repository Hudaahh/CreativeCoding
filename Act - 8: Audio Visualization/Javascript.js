let sound;
let fft;

function preload() {
  // Automatically load sound file (must be in the project folder)
  sound = loadSound("sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 255, 255);
  noFill();

  fft = new p5.FFT();
  userStartAudio().then(() => {
    sound.play();
  });
}

function draw() {
  background(230, 100, 10); // Dark background

  if (sound && sound.isPlaying()) {
    let spectrum = fft.analyze();

    noStroke();
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = map(amp, 0, 255, height, 0);
      let hue = map(i, 0, spectrum.length, 0, 360);
      fill(hue, 255, 255);
      rect(i * (width / spectrum.length), y, width / spectrum.length, height - y);
    }
  } else {
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Click anywhere to start the sound", width / 2, height / 2);
  }
}

function mousePressed() {
  if (sound && !sound.isPlaying()) {
    sound.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let mySound;
let amplitude;
let xpos;
let ypos;

function preload() {
  mySound = loadSound('music.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("setup")
  amplitude = new p5.Amplitude();
}
function mousePressed() { 
  if (mySound.isPlaying()) {
    mySound.stop();
  }
  else { 
    mySound.play();
  }
}
function draw() {
  background(0);
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 500);
  let xpos = displayWidth/2;
  let ypos = displayHeight/2;
  fill('#39ff14');
  ellipse(xpos,ypos,diam,diam);
}

let stars = [];

let speed = 5;
let setSpeed = 5;
let spaceshipActive = true;

let coverHeight = 500;
let coverActive = false;
let lightActive = true;

// define color
let frameColor1 = 100;
let frameColor2 = 70;
let frameColor3 = 50;
let windowC1 = 200;
let interfareC;

function setup() {
  // create the canvas (1200px wide, 800px high)
  createCanvas(1200, 800);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  strokeWeight(5);
  rect(0, 0, width, height);

  for (let i = 0; i < 600; i++) {
    stars[i] = new star();
  }



  rectMode(CENTER);
}

function draw() {

  if (spaceshipActive) {
    if (speed < setSpeed) {
      speed += 0.1;
    } else if (speed > setSpeed) {
      speed -= 0.1;
    }
  } else {
    if (speed > 0) {
      speed -= 0.1;
    }
  }

  // draw space and stars
  push();
  translate(width / 2, height / 2)
  background(5);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  pop();

  // your cool workstation code goes in this draw function

  drawWindowFrame()

  drawControlPanel();

  drawCover()

  drawLight()

  // draw the workstation

}

function drawWindowFrame() {
  push();
  strokeWeight(0);
  fill(frameColor1);
  rect(width / 2, 50, width, 100);
  rect(width / 2, height - 50, width, 100);

  fill(frameColor2);
  rect(width / 2, 90, width, 20);
  rect(width / 2, height - 90, width, 20);

  fill(frameColor3);
  rect(135, height / 2, 70, height);
  rect(1065, height / 2, 70, height);
  pop();
}

function drawControlPanel() {

  interfareC = color(182, 116, 42, 180);
  // interfareC = color(255, 255, 255, 50);

  // Drawing the Operator Panel Background
  fill(interfareC);
  rect(width / 2, height - 250, 300, 200);
  fill(234, 169, 39, 100);
  rect(width / 2 - 100, height - 250, 80, 180);

  // Drawing the Operator Panel Background
  fill(234, 169, 39);
  noStroke();
  triangle(width / 2 - 100, height - 250, width / 2 - 80, height - 270, width / 2 - 120, height - 270); // Up arrow (accelerate)
  triangle(width / 2 - 100, height - 200, width / 2 - 80, height - 230, width / 2 - 120, height - 230); // Down arrow (decelerate)

  // Drawing the Operator Panel Background
  fill(255, 37, 39);
  ellipse(width / 2 - 100, height - 250, 50, 50); // Circle button (start/stop)

  // Drawing the Operator Panel Background
  fill(50, 150, 255);
  rect(width / 2 + 100, height - 250, 50, 50);
}

function drawCover() {
  fill(0);
  rect(width / 2, coverHeight, width, 100);


  if (coverActive) {
    coverHeight += 5;
  }
  else {
    coverHeight -= 5;
  }
  if (coverHeight > 800) {
    coverHeight = 800
  }
  else if (coverHeight < 300) {
    coverHeight = 300;
  }

}

function drawLight() {
  noStroke();
  rectMode();
  fill(24, 32, 33);
  rect(135, 0, 100, 80);
  rect(1065, 0, 100, 80);
  if (lightActive) {
    push();
    noStroke
    fill(255, 255, 255, 30);
    beginShape();
    vertex(85, 39);
    vertex(-110, height);
    vertex(400, height);
    vertex(185, 39);

    vertex(85 + 930, 39);
    vertex(-110 + 930, height);
    vertex(400 + 930, height);
    vertex(185 + 930, 39);
    endShape();
    pop();
  }
}

function mousePressed() {
  // Check if mouse is over the up arrow (accelerate)
  if (mouseX > width / 2 - 120 && mouseX < width / 2 - 80 && mouseY > height - 300 && mouseY < height - 270) {
    if (setSpeed < 20) {
      setSpeed += 1; // Increase speed
    }
  }

  // Check if mouse is over the down arrow (decelerate)
  if (mouseX > width / 2 - 120 && mouseX < width / 2 - 80 && mouseY > height - 230 && mouseY < height - 200) {
    if (setSpeed > 1) {
      setSpeed -= 1; // Increase speed
    }

  }

  // Check if mouse is over the circle button (start/stop)
  if (dist(mouseX, mouseY, width / 2 + 100, height - 250) < 25) {
    if (spaceshipActive == true) {
      spaceshipActive = false;
    }
    else {
      spaceshipActive = true;
    }
  }
}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}

class star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    let types = [
      { color: [255, 255, 255], name: "normal stars", size: 1 },
      { color: [244, 254, 255], name: "white dwarf", size: 1 },
      { color: [169, 200, 125], name: "red gaint", size: 1 },
      { color: [198, 173, 212], name: "blue supergaint", size: 1 }
    ];

    let tpyeNum = random(0, 1);
    if (
      tpyeNum < 0.9) {
      this.starsType = types[0];
    } else if (
      tpyeNum >= 0.9 && tpyeNum < 0.93) {
      this.starsType = types[1];
    } else if (
      tpyeNum >= 0.93 && tpyeNum < 0.96) {
      this.starsType = types[2];
    } else if (tpyeNum >= 0.96) {
      this.starsType = types[3];
    }


  }

  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = width;
    }
  }

  show() {

    push();
    fill(this.starsType.color);

    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, this.starsType.size * 6, 0);
    ellipse(sx, sy, r, r);
    pop()

  }
}
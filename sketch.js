let speed = 5;
let stars = [];
let SetSpeed = 50;
let planets = [];

// define color
let spaceC;

let frameColor1 = 200;
let frameColor2 = 180;
let frameColor3 = 150;
let windowC1 = 200;
let interfareC; 

function setup() {
  // create the canvas (1200px wide, 800px high)
  createCanvas(1200, 800);
    
  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  strokeWeight(5);
  rect(0, 0, width, height);

  background(0);

  for (let i = 0; i < 600; i++) {
    stars[i] = new star();
  }
  spaceC = color(20,30,31);
  interfareC = color(182, 116, 22,150); 
  
  rectMode(CENTER);
}

function draw() {
  // your cool workstation code goes in this draw function
  push();
  translate(width / 2, height / 2)
  background(0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  pop();
  // draw window frame
  push();
  strokeWeight(0);
  fill(frameColor1);
  rect(width/2,50,width, 100);
  rect(width/2,height - 50,width, 100);
  
  fill(frameColor2);
  rect(width/2,90,width, 20);
  rect(width/2,height - 90,width, 20);

  fill(frameColor3);
  rect(135,height/2,70, height);
  rect(1065,height/2,70, height);
 
  fill(interfareC);
  rect(width/2,height - 300,400,300);
  pop(close);


  // draw the workstation

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
      { color: [244, 254, 255], name: "white dwarf", size: 2 },
      { color: [169, 30, 25], name: "red gaint", size: 4 },
      { color: [98, 173, 212], name: "blue supergaint", size: 3 }
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

    let r = map(this.z, 0, width, this.starsType.size * 8, 0); 
    ellipse(sx, sy, r, r);
    pop()

  }
}
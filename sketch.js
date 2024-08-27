let SetSpeed = 50;
let speed = 0;
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
  spaceC = color(20,30,31);
  interfareC = color(182, 116, 22,150); 
  
  rectMode(CENTER);
  background(spaceC);
}

function draw() {
  // your cool workstation code goes in this draw function

  // draw the space and planet


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

let SetSpeed = 50;
let speed = 2;
let stars = [];
let types = [
  {color:[255,255,255],name:"normal stars", size: 1},
  {color:[255,255,255],name:"white dwarf", size: 2},
  {color:[169,30,25],name:"red gaint"},
  {color:[98,173,212],name:"blue supergaint"}
];

// define color
let spaceColor = (20,30,31);

function setup() {
  // create the canvas (1200px wide, 800px high)
  createCanvas(1200, 800);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  strokeWeight(5);
  rect(0, 0, width, height);
  background(spaceColor);

  for(let i = 0; i <800; i++){
    stars[i] = new star();
  }
}

function draw() {
  // your cool workstation code goes in this draw function

  // draw the space and planet


  // draw window
  push();
  strokeWeight(0);
  fill(100);
  rect(0,0,width, 100);
  fill(60);
  rect(0,80,width, 20);
 
  fill(100);
  rect(0,height - 100,width, 100);
  fill(60);
  rect(0,height - 100,width, 20);
 
  // beginShape();
  // vertex(0, 0);
  // vertex(100, 100);
  // vertex(1100, 100);
  // vertex(1200, 0);
  endShape(close)
  fill("red");
  rect(300,height/2 +100,400,300);
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
  constructor(){
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.zStart = random(width);
    this.zPos = this.z;

    
    tpyeNum = random(0,1);
    if (i < 0.9)
    {this.starsType = types[0];
    }else if(i >=0.9 && i < 0.93){

    }else if (i >= 0.93 && i < 0.96){

    }else if (i >= 0.93 && i < 0.96){

    }
  }

  move(){
    this.z - speed;
    if (this.zPos < 1){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.zStart = random(width);
      this.zPos = this.z;
    }
  }

  draw(){

  }
}
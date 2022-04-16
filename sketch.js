var trex
var trexRunning

function preload(){
  trexRunning = loadAnimation("trex1.png","trex2.png","trex4.png")
}



function setup(){
  createCanvas(600,200);
  
trex = createSprite(50,150,20,20);
trex.addAnimation("running",trexRunning)
trex.scale  = 0.5
}



function draw(){
  background("lightBlue");
  drawSprites();
}
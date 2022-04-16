var trex
var trexRunning
var edges
var ground
function preload(){
  trexRunning = loadAnimation("trex1.png","trex2.png","trex4.png")
}



function setup(){
  createCanvas(600,200);
  
trex = createSprite(50,150,20,20);
trex.addAnimation("running",trexRunning)
trex.scale  = 0.5

edges = createEdgeSprites();
ground = createSprite(50,190,100,20)
}



function draw(){
  background("lightBlue");

if(keyDown("space")){
  trex.velocityY = -6
}

trex.velocityY = trex.velocityY + 0.5
trex.collide(ground)
  drawSprites();
}

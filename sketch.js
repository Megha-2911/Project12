var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadAnimation("apple.png");
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//rabbit.x = MouseX
}

function createApples (){
  apple = createSprite(random(50,350),40,10,10);
  apple.addAnimation(appleImg)
  apple.velocityY = 2
  apple.lifetime = 100
}
  


function createLeaves() {
  leaves = createSprite(random);
  leaves.addImage(leavesImg);
  leaves.lifetime = 100
  
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
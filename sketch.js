var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  gameObject1 = createSprite(800, 400,80,30);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(100, 100, 50, 50);
  gameObject2 .shapeColor="green" ;
  
  
}

function draw() {
  background(0,0,0);  
  gameObject1.x = World.mouseX;
  gameObject1.y = World.mouseY;

  if(isTouching2(gameObject1,gameObject2)){
    gameObject1.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  
  else {
    gameObject1.shapeColor = "green";
  
    gameObject2.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


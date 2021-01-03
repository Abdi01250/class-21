function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 50, 50);
  movingR=createSprite(200,100,50,50);
  fixedR2=createSprite(200, 200, 100, 100);
  fixedR3=createSprite(300, 200, 100, 100);
  fixedR4=createSprite(400, 400, 200, 200);
  fixedR3.velocityY=3
  fixedR4.velocityY=-3
}

function draw() {
background(255,255,255);  

movingR.x=mouseX;
movingR.y=mouseY;
if(isTouching(fixedR,fixedR2)){
  fixedR.shapeColor="red"
  fixedR2.shapeColor="red"
}else{
  fixedR.shapeColor="green"
  fixedR2.shapeColor="green"
}
bounceOff(fixedR,fixedR2)

  drawSprites();
}


var wall, bullet, thickness, speed, weight

thickness=random(22, 83);
speed=random(223, 321);
weight=random(30, 52)

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness, height/2);
  bullet=createSprite(200, 200, 50, 20);
  bullet.velocityX=speed;
  wall.shapeColour("yellow");
  bullet.shapeColour("green");
  bullet.weight=weight;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(hasCollided(bullet, wall)){

bullet.velocityX=0

var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

if(damage>10){
wall.shapeColour(red)

}

if(damage<10){

wall.shapeColour("green")

}





  }
}

function hasCollided(bullet, wall){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){

  return true
}

return false


}



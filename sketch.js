var r1,r2;
var r3,r4;

function setup() {
  createCanvas(1200,800);
 r1 = createSprite(100,100,50,100)
 r2= createSprite(400,300,100,50)
 r3= createSprite(200,50,50,50)
 r4= createSprite(200,700,50,50)
 r1 .shapeColor = "green";
 r2 .shapeColor = "green";
 r3 .shapeColor = "green";
 r4 .shapeColor = "green";
 r3.velocityY = 5;
 r4.velocityY = -5;
}


function draw() {
  background(0); 
r1.x = mouseX
r1.y= mouseY


if (isTouching(r1,r3))
  {
  r1.shapeColor = "red"
  r3.shapeColor = "red"
}
else 
{
  r1.shapeColor = "green"
  r3.shapeColor = "green"
}
  bounceOff(r3,r4);
  drawSprites();
}


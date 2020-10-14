var a;
var b;


function setup() {
  createCanvas(800,800);
   b = createSprite(600, 400, 50, 80);
   b.shapeColor = "green";
   b.debug = true;
   a = createSprite(600,1,80,30);
   a.shapeColor = "green";
   a.debug = true;
   a.velocityY = 5;
   b.velocityY = -5;

}

function draw() {
  background(255,255,255);  
 
  if(a.x - b.x < a.width/2 + b.width/2 &&
     b.x - a.x < a.width/2 + b.width/2 ){
      a.velocityX = a.velocityX *(-1) ;
      b.velocityX = b.velocityX *(-1);
     }
     if(a.y - b.y < a.height/2 + b.height/2 &&
      b.y - a.y < a.height/2 + b.height/2 ){
       a.velocityY = a.velocityY *(-1) ;
       b.velocityY = b.velocityY *(-1);
      }

  drawSprites();
}
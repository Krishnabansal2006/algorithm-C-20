var movingrect,fixedrect;

var ball1,ball2; 

function setup() {
  createCanvas(800,400);
 ball1 = createSprite(70,300, 50, 50);
 ball1.velocityX=2;
ball2 = createSprite(750,300,50,50);
 ball2.velocityX=-2;

  movingrect = createSprite (200,200,80,30);
  movingrect.shapeColor="blue";

  fixedrect = createSprite (100,150,30,80);
  fixedrect.shapeClour="blue";
}

function draw() {
  background(0);  

  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if (movingrect.width/2+fixedrect.width/2>movingrect.x-fixedrect.x && movingrect.width/2+fixedrect.width/2>fixedrect.x-movingrect.x 
      && movingrect.height/2+fixedrect.height/2>movingrect.y-fixedrect.y && movingrect.height/2+fixedrect.height/2>fixedrect.y-movingrect.y){
      movingrect.shapeColor="green";
      fixedrect.shapeColor="green";
  }
  else {
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }

  if (ball1.width/2+ball2.width/2>ball2.x-ball1.x && ball1.width/2+ball2.width/2>ball1.x-ball2.x){
    ball1.velocityX=ball1.velocityX*(-1);
    ball2.velocityX=ball2.velocityX*(-1);
  }

  if (ball1.height/2+ball2.hight/2>ball1.y-ball2.y && ball1.height/2+ball2.height/2>ball2.y-ball1.y){
      ball1.velocityY=ball1.velocityY*(-2);
      ball2.velocityY=ball2.velocityY*(-2);
  }
       


  drawSprites();
}
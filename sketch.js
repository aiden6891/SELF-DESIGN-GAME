var bgImage
var gameState = "play";
var score = 0;
function preload() {
 bgImage = loadImage("images/Galaxy1.jpg");
 CharlieImage = loadImage("images/charlietheastronaut5.gif")
MerImg = loadImage("images/MERCURY.png") 
VenImg = loadImage("images/VENUS.png") 
EarImg = loadImage("images/EARTH.png") 
MarImg = loadImage("images/MARS.png") 
JupImg = loadImage("images/JUPITER.png") 
SatImg = loadImage("images/SATURN.png") 
UraImg = loadImage("images/URANUS.png") 
NepImg = loadImage("images/NEPTUNE.png") 
AstImg = loadImage("Images/asteroid.png");
RestartImg = loadImage("Images/restartbutton.png");
GameoverImg = loadImage("Images/gameover.png");
sound = loadSound("Images/sound.mp3");
}

function setup() {
 createCanvas(1200,700);
 bg = createSprite(700,500,600,350);
 bg.addImage("bg",bgImage);
 bg.x = bg.width/4
 bg.scale = 1.3;
 bg.velocityX = -3; 
ground = createSprite(250, 600, 700, 10);
ground.visible = false;
gameover = createSprite(600,200);
restart = createSprite(600,350); 
gameover.addImage(GameoverImg);
restart.addImage(RestartImg);
gameover.scale = 0.55;
restart.scale = 0.3;
gameover.visible = false;
restart.visible = false;
charlie = createSprite(100,450, 35, 35);
charlie.addImage(CharlieImage);
charlie.scale = 0.18
charlie.setCollider("circle", 0, 0, 400);
charlie.debug = false; // with this you can be able to see the collider around the given image, if false then you can not see the image

SatGroup = new Group();
AstGroup = new Group();

 
}

function draw() {
  background(0);
  //console.log(bg.x);
  if(gameState === "play"){

  if(bg.x < 0){
    bg.x = bg.width/4
  }
charlie.collide(ground);
if(keyDown("space")){
  //sound.play();
charlie.velocityY = -10;

 }
 charlie.velocityY = charlie.velocityY + 0.8; // this gives the gravity

SpawnObstacles();
SpawnAsteroid();
if(charlie.isTouching(SatGroup)){
 score++;
SatGroup.destroyEach();

}



if(charlie.isTouching(AstGroup)){
 gameState = "end"
}
  }
  else if (gameState === "end"){ 
bg.velocityX = 0;
charlie.velocityY = 0;
gameover.visible = true;
restart.visible = true;
AstGroup.setVelocityXEach(0);
AstGroup.setLifetimeEach(-1);
SatGroup.setVelocityXEach(0);
SatGroup.setLifetimeEach(-1);

  }
  if(mousePressedOver(restart)){
   AstGroup.destroyEach();
    reset();
    }
  else if (gameState === "win"){
    bg.velocityX = 0;
    charlie.velocityY = 0;
    //if(sound.isPlaying()){
    //  sound.pause();
   // }
  
    AstGroup.setVelocityXEach(0);
    AstGroup.setLifetimeEach(-1);
    SatGroup.setVelocityXEach(0);
    SatGroup.setLifetimeEach(-1);
    
      }
drawSprites();
textSize(25);
fill("white");
text("Score: " +score , 200, 50);
if(score >= 5){
  
  fill("yellow");
  textSize(40);
  text("Congradulations!!! You have won the game!!!", 200,200);
  gameState = "win";

}
 console.log(gameState);
}

function SpawnObstacles(){

if(frameCount % 200 === 0){ // check after every 70 frame counts
  var Sat = createSprite(1200, Math.round(random(50,400)), 10, 10);
  

  var rand = Math.round(random(1,8));
  switch(rand){
    case 1:Sat.addImage(MerImg);
    Sat.velocityX = -5
    Sat.scale = 0.3
          break 
    case 2:Sat.addImage(VenImg);
    Sat.velocityX = -5
    Sat.scale = 0.3
          break
    case 3:Sat.addImage(EarImg);
    Sat.velocityX = -5
    Sat.scale = 0.3
          break
    case 4:Sat.addImage(MarImg);
    Sat.velocityX = -5
    Sat.scale = 0.3
           break
    case 5:Sat.addImage(JupImg);
    Sat.velocityX = -5
    Sat.scale = 0.5
          break
    case 6:Sat.addImage(SatImg);
    Sat.velocityX = -5
    Sat.scale = 0.5
           break
    case 7:Sat.addImage(UraImg);
    Sat.velocityX = -5
    Sat.scale = 0.5
           break
    case 8:Sat.addImage(NepImg);
    Sat.velocityX = -5
    Sat.scale = 0.3
           break
    default:break;

  }
  SatGroup.add(Sat);
  Sat.lifetime = 250;
}

}

function SpawnAsteroid(){
  if(frameCount % 50 === 0){ // check after every 70 frame counts
    var Ast = createSprite(1200, Math.round(random(50,400)), 10, 10);
    Ast.velocityX = -8
    Ast.addImage(AstImg);
    Ast.scale = 0.3
     AstGroup.add(Ast);
     Ast.lifetime = 250


  Ast.setCollider("circle", 0, 0, 80);
  Ast.debug = false; // with this you can be able to see the collider around the given image, if false then you can not see the image

  }
 
  

   
}

function reset(){
gameState = "play";
gameover.visible = false;
restart.visible = false;
score = 0;
//AstGroup.destory();
SatGroup.destroyEach();
}




var bgImage

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
}

function setup() {
 createCanvas(1200,700);
 bg = createSprite(700,500,600,350);
 bg.addImage("bg",bgImage);
 bg.x = bg.width/4
 bg.scale = 1.3;
 bg.velocityX = -3; 
ground = createSprite(250, 600, 700, 10);
ground.visible = true; 


charlie = createSprite(100,450, 35, 35);
charlie.addImage(CharlieImage);
charlie.scale = 0.23
charlie.setCollider("circle", 0, 0, 460);
charlie.debug = true; // with this you can be able to see the collider around the given image, if false then you can not see the image



 
}

function draw() {
  background(0);
  //console.log(bg.x);
  if(bg.x < 0){
    bg.x = bg.width/4
  }
 charlie.collide(ground);
 if(keyDown("space")){
charlie.velocityY = -10;

 }
 charlie.velocityY = charlie.velocityY + 0.8; // this gives the gravity

SpawnObstacles();

  drawSprites();
}

function SpawnObstacles(){

if(frameCount % 220 === 0){ // check after every 70 frame counts
  var Mer = createSprite(600, 100, 10, 10);
  var Ven = createSprite(600, 150, 10, 10);
  var Ear = createSprite(600, 200, 10, 10);
  var Mar = createSprite(600, 250, 10, 10);
  var Jup = createSprite(600, 300, 10, 10);
  var Sat = createSprite(600, 350, 10, 10);
  var Ura = createSprite(600, 400, 10, 10);
  var Nep = createSprite(600, 450, 10, 10);
  Mer.velocityX = -5
  Ven.velocityX = -5
  Ear.velocityX = -5
  Mar.velocityX = -5
  Jup.velocityX = -5
  Sat.velocityX = -5
  Ura.velocityX = -5
  Nep.velocityX = -5
  var rand = Math.round(random(1,8));
  switch(rand){
    case 1:Mer.addImage(MerImg);
    Mer.scale = 0.5
          break 
    case 2:Ven.addImage(VenImg);
    Ven.scale = 0.5
          break
    case 3:Ear.addImage(EarImg);
    Ear.scale = 0.5
          break
    case 4:Mar.addImage(MarImg);
    Mar.scale = 0.5
           break
    case 5:Jup.addImage(JupImg);
    Jup.scale = 0.5
          break
    case 6:Sat.addImage(SatImg);
    Sat.scale = 0.5
           break
    case 7:Ura.addImage(UraImg);
    Ura.scale = 0.5
           break
    case 8:Nep.addImage(NepImg);
    Nep.scale = 0.5
           break
    default:break;


    



  }






}

}








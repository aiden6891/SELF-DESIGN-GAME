var bgImage

function preload() {
 bgImage = loadImage("images/Galaxy1.jpg");
 CharlieImage = loadImage("images/charlietheastronaut5.gif")
}

function setup() {
 createCanvas(1200,700);
 bg = createSprite(700,500,600,350);
 bg.addImage("bg",bgImage);
 bg.x = bg.width/4
 bg.scale = 1.3;
 bg.velocityX = -3; 

charlie = createSprite(100,450, 35, 35);
charlie.addImage(CharlieImage);
charlie.scale = 0.23


 
}

function draw() {
  background(0);
  //console.log(bg.x);
  if(bg.x < 0){
    bg.x = bg.width/4
  }
  drawSprites();
}


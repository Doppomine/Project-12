var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg
var Oleaf,OleafImg
var Mleaf,MleafImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  OleafImg = loadImage("orangeLeaf.png");
  MleafImg = loadImage("mapleLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  var select_sprites = Math.round(random(1,4));
  if (frameCount%80==0){
    if (select_sprites ==1 ){
      spawnApples();
   }
   else if (select_sprites==2){
    spawnLeaves();
  }
  else if (select_sprites==3){
    spawnOLeaves();
  }
  else if (select_sprites==4){
    spawnMLeaves();
  }
}
   
  
   drawSprites();
}

function spawnApples(){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY= 3;
  apple.scale= 0.1;
  apple.lifetime = 100;


}


function spawnLeaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.velocityY= 2;
  leaf.scale= 0.1;
  leaf.lifetime = 100;

}



function spawnOLeaves(){
  Oleaf = createSprite(random(50, 350), 40, 10, 10);
  Oleaf.addImage(OleafImg);
  Oleaf.velocityY= 2;
  Oleaf.scale= 0.1;
  Oleaf.lifetime = 100;

}



function spawnMLeaves(){
  Mleaf = createSprite(random(50, 350), 40, 10, 10);
  Mleaf.addImage(MleafImg);
  Mleaf.velocityY= 2;
  Mleaf.scale= 0.1;
  Mleaf.lifetime = 100;

}
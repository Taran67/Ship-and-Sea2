
function preload(){
     seaImg = loadImage("sea.png")
     shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(1000,500);
  sea = createSprite(200, 160, 20, 500)
  sea.addImage(seaImg);

  ship = createSprite(200, 220, 20, 50)
  ship.addAnimation("moving", shipImg1)
  ship.scale = 0.5
  
}

function draw() {
  background("blue");

  

  sea.velocityX = -2;
  
  //infinite scrolling effect
  if(sea.x<0){
    sea.x=sea.width/2;
  }


  drawSprites();
} 

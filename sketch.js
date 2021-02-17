var garden, tom, jerry
var gardenImg, tomImg, jerryImg, tomImg2, tomImg3, tomImg4

function preload() {
gardenImg = loadImage ("garden.png")
tomImg = loadImage ("cat1.png")
tomImg2 = loadImage ("cat2.png")
tomImg3 = loadImage ("cat3.png")
tomImg4 = loadImage ("cat4.png")
jerryImg = loadImage ("mouse1.png")


}

function setup(){
    createCanvas(1000,800)
    garden.addImage ("garden", gardenImg)
    tom.addImage ("cat", tomImg)
    tom.scale = 0.8
    jerry.addImage ("mouse", jerryImg)
    jerry.scale = 0.8

}

function draw() {
    background(255);
    if(tom.x-jerry.x < (tom.width/2+jerry.width)/2) 
      {
    tom.addAnimation("tomlastimg",tomImg4 )
    tom.changeAnimation("tomlastimg")
    tom.velocityX = 0
      }

    
    drawSprites();
}


function keyPressed(){
 if (keyCode === LEFT_ARROW) {
     tom.velocityX = -5 
     tom.addAnimation ("catmoving",tomImg2 )
     tom.changeAnimation ("catmoving" )
 }
}

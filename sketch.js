var robot , robotImg
var backgroundImg , bg
var coins , coinsImg
var heart , heartImg
var rock1 , rock1Img
var rock2 , rock2Img
var rock3 , rock3Img
var invisibleGround 

function preload(){
  robotImg = loadImage("pc.png")
  backgroundImg = loadImage("earth.jpg")
  coinsImg = loadImage("coins.gif")
  heartImg = loadImage("heart.gif")
  rock1Img = loadImage("rock1.png")
  rock2Img = loadImage("rock2.png")
  rock3Img = loadImage("rock3.png")
}

function setup(){
  createCanvas(800 ,600)
  bg = createSprite(400,300,800 ,600)
  bg.addImage(backgroundImg)
  bg.scale = 1.25
  bg.velocityX = -1

  robot  = createSprite(275,350,100,100)
  robot.addImage(robotImg)
  robot.scale = 0.1
  
 invisibleGround = createSprite(275,450,400,10)
 invisibleGround.visible = false 
}


function draw(){
background(0)
 if(bg.x < 350){
   bg.x = 400
 }
 if(keyDown("up")){
   robot.velocityY = -8 
 }
robot.velocityY = robot.velocityY + 0.8
robot.collide(invisibleGround)
spawnObstacles()
spawnObstacles2()
spawnObstacles3()
  drawSprites()
}

function spawnObstacles(){
if(frameCount % 200 === 0){
  obstacle = createSprite(750,Math.round(random(50,400)),100,100)
obstacle.velocityX = -2
obstacle.addImage(rock1Img)
obstacle.scale = 0.3
}
}

function spawnObstacles2(){
  if(frameCount % 100 === 0){
    obstacle2 = createSprite(Math.round(random(10,600)),10,100,100)
  obstacle2.velocityY = 2
  obstacle2.addImage(rock2Img)
  obstacle2.scale = 0.3
  }
}

function spawnObstacles3(){
  if(frameCount % 300 === 0){
    obstacle3 = createSprite(750,Math.round(random(50,400)),100,100)
  obstacle3.velocityX = -2
  obstacle3.addImage(rock3Img)
  obstacle3.scale = 0.3
  }
}
var tower,towerImage
var door,doorImage,doorGroup
var climber,climberImage,climberGroup
var ghost,ghostImage
var ib,ibGroup
var gamestate="play"
var spookysound

function preload(){
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  spookysound=loadSound("spooky.wav")
  
}
function setup(){
  createCanvas(600,600)
  spookysound.loop()
  tower = createSprite(300,300)
  tower.addImage(towerImage)
  tower.velocityY=1
  
  doorGroup = new Group();
  climberGroup= new Group()
  ibGroup = new Group()
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImage)
  ghost.scale=0.3
  ghost.debug=true
}

function draw(){
  background(0)
  if(gamestate==="play"){
     if(tower.y>=400){
    tower.y=300
    
  }
  
  if(keyDown("space")){
    ghost.velocityY=-5
    
  }
  ghost.velocityY=ghost.velocityY+0.8
   if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
    
  }
   if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
    
  }
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0
    
  }
  if(ibGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gamestate="end"
  }
  
  spawndoor();
  drawSprites()
  }
  
 

  if(gamestate==="end"){
    stroke("yellow")
    fill("yellow")
    textSize(30)
    text("Game Over",230,250)
    
  }
}

function spawndoor(){
  if(frameCount % 240===0){
    door= createSprite(200,-50)
    door.addImage(doorImage)
     climber= createSprite(200,10)
    climber.addImage(climberImage)
    ib = createSprite(200,15)
    ib.width=climber.width
    ib.height=2
    door.x=Math.round(random(120,400))
    door.velocityY=1
    climber.x=door.x
    climber.velocityY=1
    ib.x=door.x
    ib.velocityY=1
    ib.debug=false
    ib.visible=false
    
    ghost.depth=door.depth
    ghost.depth+=1
    door.lifetime=600
    climber.lifetime=600
    doorGroup.add(door)
    climberGroup.add(climber)
    ibGroup.add(ib)
  }
  
  
  
}











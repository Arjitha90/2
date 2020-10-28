
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var paper

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
  world = engine.world
	
	Engine.run(engine);
  paper = new Paper(100,180,20,20)
  ground = new Ground(200,600,1500,30)
  box1 = new Dustbin(610,200,20,70)
  box2 = new Dustbin(650,210,90,20)
  box3 = new Dustbin(680,200,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
 
}

function keyPressed(){
  if( keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:30})
}
}


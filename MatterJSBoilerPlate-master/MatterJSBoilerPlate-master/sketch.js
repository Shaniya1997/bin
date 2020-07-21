var ball1,dustbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new ball(200,200,30);
	dustbin1=new dustbin(600,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  dustbin1.display();
  
  drawSprites();
 
}
function keypressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})

	}
}



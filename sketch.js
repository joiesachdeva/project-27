
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	var bobDiameter=40;
	//Create the Bodies Here.
	bobObject1 = new Bob(100,500,20);
	bobObject2 = new Bob(200,522,20);
	bobObject3 = new Bob(300,522,20);
	bobObject4 = new Bob(400,522,20);
	bobObject5 = new Bob(500,500,20);

	roof = new Roof(300,100,550,50);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== "UP_ARROW");
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:45});
  }
  




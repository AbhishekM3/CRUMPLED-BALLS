const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){

}

function setup() {
	createCanvas(800, 700);

    grounds  = createSprite(400,670,width,10);
	grounds.shapeColor = "yellow";

	engine = Engine.create();
	world = engine.world;

	ground  = Bodies.rectangle(400,670,width,10,{isStatic: true});
	World.add(world, ground);
		
    paperObject = new Paper(200,650,10);
	dustbin1 = new Dustbin(700,640,100,20);
	dustbin2 = new Dustbin(650,600,20,100);
	dustbin3 = new Dustbin(750,600,20,100);
    Engine.run(engine); 
}
   
function draw() {
  background(0);

  paperObject.display();
  dustbin1.display();
  dustbin2.display();  
  dustbin3.display(); 

  keyPressed();
  drawSprites();
  
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){ 
		
       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0.2,y:-0.9});           
	}
}





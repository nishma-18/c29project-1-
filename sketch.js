const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;
var hexagonImg;

var block8, block9, block10, block11, block12, block13, block14, block15, block16;
var ground1, ground2, ground3;

function preload(){
  hexagonImg= loadImage("hexagon.png");
}

function setup() {
  createCanvas(1500,600);
  engine= Engine.create();
  world=engine.world;

//level two
block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);
//level three
block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);
//top
block16 = new Box(390,155,30,40);

  ground1 = new Ground(750,600,1500,20);
  /*ground2= new Ground();
  ground3= new Ground();*/

  polygon= Bodies.circle(50,200,20);
  World.add(world.polygon);

  sling = new SlingShot(this.polygon,{x:100,y:200});

  
}

function draw() {
  background("white"); 
  Engine.update(engine);
  
  fill(rgb(135,205,236));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  


  ground1.display(); 
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(hexagonImg, polygon.positionx, polygon.positiony,40,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y:mouseY });
}

function mouseReleased(){
  sling.fly();
}

/*function keyPressed(){
  if(keyCode === 32){

Matter.Body.setPosition()

  }
}*/
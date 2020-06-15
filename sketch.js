const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;
var polygonImg;
function preload(){
   polygonImg = loadImage("polygon.png");
}
function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(700,height,1400,20);
  base1 = new Ground(600,400,220,10);
  base2 = new Ground(1000,200,180,10);

  box1a = new Box(515,380,25,25);
  box1b = new Box(540,380,25,25);
  box1c = new Box(565,380,25,25);
  box1d = new Box(590,380,25,25);
  box1e = new Box(615,380,25,25);
  box1f = new Box(640,380,25,25);
  box1g = new Box(665,380,25,25);
  box1h = new Box(690,380,25,25);

  box2a = new Box(540,355,25,25);
  box2b = new Box(565,355,25,25);
  box2c = new Box(590,355,25,25);
  box2d = new Box(615,355,25,25);
  box2e = new Box(640,355,25,25);
  box2f = new Box(665,355,25,25);

  box3a = new Box(565,330,25,25);
  box3b = new Box(590,330,25,25);
  box3c = new Box(615,330,25,25);
  box3d = new Box(640,330,25,25);

  box4a = new Box(590,305,25,25);
  box4b = new Box(615,305,25,25);

  box5a = new Box(602,280,25,25);

  var options ={
    restitution:0.8,
    density:1.5,
    friction:0
  }
 polygon1 = Bodies.circle(150, 420,15,options);
  World.add(world,polygon1);
  
  link = new SlingShot(polygon1,{x:150,y:400});
  //console.log(polygon1);


  box21a = new Box(1000,180,25,25);
  box21b = new Box(1025,180,25,25);
  box21c = new Box(1050,180,25,25);
  box21d = new Box(975,180,25,25);
  box21e = new Box(950,180,25,25);

  box22a = new Box(975,155,25,25);
  box22b = new Box(1000,155,25,25);
  box22c = new Box(1025,155,25,25);

  box23a = new Box(1000,130,25,25);
}

function draw() {
  background(0);  
  Engine.update(engine);
  textSize(20);
  text("Drag and release the Hexagon",100,100);
  text("Press space to reload the Hexagon",1000,500);
  ground1.display();
  base1.display();
  base2.display();

  fill(0,150,240);
  box1a.display();
  box1b.display();
  box1c.display();
  box1d.display();
  box1e.display();
  box1f.display();
  box1g.display();
  box1h.display();

  fill(0,240,150);
  box2a.display();
  box2b.display();
  box2c.display();
  box2d.display();
  box2e.display();
  box2f.display();

  fill(250,220,0);
  box3a.display();
  box3b.display();
  box3c.display();
  box3d.display();

  fill(220,0,250);
  box4a.display();
  box4b.display();

  fill(226, 140, 147);
  box5a.display();


  box21a.display();
  box21b.display();
  box21c.display();
  box21d.display();
  box21e.display();

  fill(220,0,250);
  box22a.display();
  box22b.display();
  box22c.display();

  fill(0,240,150);
  box23a.display();

  link.display();
  
  imageMode(CENTER);
  image(polygonImg,polygon1.position.x,polygon1.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  link.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon1,{x:150,y:420});
    link.attach(polygon1);
  }
}
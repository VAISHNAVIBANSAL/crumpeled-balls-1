const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle, wood1, wood2, wood3, ground;
var world, engine;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  circle = new Circle(400, 300, 10);
  wood1 = new Wood(550, 400, 10, 100, 0);
  wood2 = new Wood(560, 500, 10, 160, 90);
  wood3 = new Wood(400, 400, 10, 100, 0);
  ground = Bodies.rectangle(400, 680, 800, 20, { isStatic: true });
  World.add(world, ground);
  Engine.run(engine);
}

function draw() {
  background(0);
  //Engine.update(engine);

  circle.display();
  wood1.display();
  wood2.display();
  wood3.display();

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  if (keyDown("space")) {
    Matter.Body.applyForce(circle.body, circle.body.position, {
      x: 85,
      y: -85,
    });
    console.log("pressed key down");
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(circle.body, circle.body.position, {
      x: 85,
      y: -85,
    });
    console.log("pressed key down");
  }
}

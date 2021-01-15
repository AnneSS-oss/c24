const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,400,70,70);
    box2 = new Box(600,400,70,70);
    box3 = new Box(800,300,70,70);
    box4 = new Box(600,300,70,70);
    box5 = new Box(700,200,70,70);
    ground = new Ground(600,height,1200,20)
    log = new Log(700,350,300,PI/2);
    log2 = new Log(700,200,300,PI/2);
    log3 = new Log(610,100,150,PI/7);
    log4 = new Log(780,100,150,-PI/7)
    pig = new Pig(700,400);
    pig2 = new Pig(700,300);
    bird = new Bird(700,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    pig.display();
    pig2.display();
    bird.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(900,350,70);
    stone1 = new stone(300,350)
    iron1 = new iron(600, 350)
    sand1 = new sands(400,350,20);
    sand2 = new sands(420,350,20);
    sand3 = new sands(440,350,20);
    sand4 = new sands(460,350,20);
    sand5 = new sands(480,350,20);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);



    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
}
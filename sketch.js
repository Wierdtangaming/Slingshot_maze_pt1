const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;

var display_vr;
var r,g,b;
var rgbcount;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    r = Math.round(random(0,255));
    g = Math.round(random(0,255));
    b = Math.round(random(0,255));

    rgb_add_1 = Math.round(random(20,100));
    rgb_add_2 = Math.round(random(10,120));


    ground = new Ground(600,height,1200,20);

    obstacle1 = new Ground(660,350,10,200);
    obstacle2 = new Ground(880,350,10,800);
    obstacle3 = new Ground(400,200,300,10);

    box1 = new Box(475,250,50,40,0,r,g,b);
    
    tg1 = new Box(800,375,30,30,0,r+25,b+19,b-20);
    tg2 = new Box(770,375,30,30,0,r+50,g-10,b/2);
    tg3 = new Box(740,375,30,30,0,r-50,g+10,b*2);
    tg4 = new Box(770,345,30,30,0,r-rgb_add_1,g+rgb_add_2,b+5);


    tg5 = new Box(400,170,30,30,0,r+rgb_add_1,g-rgb_add_2,b-5);
    tg6 = new Box(400,140,30,30,0,r*rgb_add_1,g+100,b*2-5);
    tg7 = new Box(400,110,30,30,0,r*rgb_add_2,g-rgb_add_1,b*5-100);

    display_vr = 1; 

    slingshot = new Slingshot(box1.body,{x:475,y:300});
}

function draw(){
    background(255,100,255);
    Engine.update(engine);
    strokeWeight(4);

    tg1.display();
    tg2.display();
    tg3.display();
    tg4.display();
    tg5.display();
    tg6.display();
    tg7.display();

    box1.display();
    slingshot.display(); 

    obstacle1.display(); 
    obstacle2.display();
    obstacle3.display();
    ground.display();   
}

function mouseDragged() {
    Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY})
    display_vr = 1;
}

function mouseReleased() {
    slingshot.fly();

}
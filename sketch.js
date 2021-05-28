const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine, world;
var box1, pig1;
var backgroundImg;
var flatform;
var Chain;
var bgbg
var score = 0


function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    getbackgroundimg();
    
    flatform = new Ground(50,380,400,300)
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,50);
    log6 = new Log(200,360,100, PI/2);
    
    Slingshot = new slingshot(bird.body,{x:200,y:50})

}

function draw(){
    background(backgroundImg);
    
    text(mouseX+","+mouseY,mouseX,mouseY)
    textSize (38)
    fill ("white")
    text("score :"+score,10,40)



    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    flatform.display();
    //log6.display();
    Slingshot.display();
    
    pig1.score()
    pig3.score()

}



function mouseDragged(){
Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){
Slingshot.fly()

}

function keyPressed(){
if(keyCode===32){
Slingshot.attach(bird.body)

bird.trajactory= []
}
}


async function getbackgroundimg (){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responsetype = await response.json()
console.log (responsetype)
//var datetime: "2021-05-28T19:32:35.522224+05:30"
var date = responsetype.datetime
console.log(date)
var hour = date.slice(11,13)
console.log (hour)
if(hour>=06 && hour <= 18){
bgbg = ("sprites/bg.png")

}

else{
bgbg = ("sprites/night.jpg")
}

backgroundImg = loadImage(bgbg)
console.log(backgroundImg)
}
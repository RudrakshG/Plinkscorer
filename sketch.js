var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var particles=[];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  fill(229,0,255)
  textSize(20)
 text("Score : "+score,20,30);
 textSize(20)
 text("500",100,500);
 text("100",25,500);
 text("200",175,500);
 text("500",250,500);
 text("200",325,500);
 text("200",420,500);
 text("100",505,500);
 text("100",570,500);
 text("200",655,500);
 text("500",740,500);
 text("100",795,500);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
if(particle!=null)
 {
  particle.display();
  if(particle.body.position.y>300)
  {
    console.log('particle');
   if(particle.body.position.x<300)
   {
    score=score+100;
    console.log('100');
    particle=null;
   }
   if(particle!=null)
   {
   if(particle.body.position.x>300&&particle.body.position.x<600)
   {
    score=score+200;
    particle=null;
   }
  }
  if(particle!=null)
  {
   if(particle.body.position.x>600&&particle.body.position.x<900)
   {
    score=score+100;
    particle=null;
   }
  }
  }
 }
function mousePressed(){
  if(gameState!=="end"){
    count++;
    particples=new Participle(mouseX,10,10,10);
  }
}
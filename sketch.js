let ground;
let lander;
var lander_img;
var bg_img;

var vy = 0;
var g = 0.05;
var vx=0;
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() 
{
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.debug=true;
  //Write code to show the setcollider of lander
  lander.setCollider("rectangle",0,0,200,200)
  //Write code to change the setCollider width & Height
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

 
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

//Use inbuilt function keyPressed & write if condition to check whether 
//UP Arrow key is pressed or not. If Pressed than change the animation
//make lander move upwards
function keyPressed(){
  if(keyCode===UP_ARROW){
    upward();
  }
}
//Create a function to move the lander upward
function upward(){
  vy=-1;
}

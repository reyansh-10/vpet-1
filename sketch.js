//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;

function preload()
{
  dog=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  d1=createSprite(250,300,150,150);
  d1.addImage(dog);
  d1.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    d1.addImage(happydog);
  }
  drawSprites();
  textSize(25);
  fill("white");
  stroke("black");
  text("Note:press up arrow key to feed drago milk",70,20);
  text("food remaining:"+foodS,170,200);
  //add styles here
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}




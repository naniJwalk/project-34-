//Create variables here
var dog, dogImage, happyDog 
var foodS,foodStock
var database
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  dog=createSprite(250,300,150,150);
  dog.scale=0.25;
  dog.addImage(dogImage);
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }
  textSize(13);
  fill("blue");
  stroke(3);
  text("I WANT FOOD",410,10);

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
   } else{
     x=x-1;
   }
  database.ref('/').update({
    Food:x
  })
}




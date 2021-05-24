var background

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  if(hour>=00 && hour<=05){
    background="snow1.jpg"
else(hour>=05 && hour<=10){
  background="snow2.jpg"
}else(hour>=10 && hour<=15){
background="snow3.jpg"
}else(hour>=15 && hour<=20){
background="snow4.webp"
}else(hour>=20 && hour<=24){
background="smow5.webp"
}
  background(255,255,255);  
  drawSprites();
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("yellow");
  noStroke();
  fill("red");
  triangle(0,400,0,0,200,0);
  
  fill('blue');
  triangle(400,400,200,0,400,0);
  
  fill("white");
  triangle(200,0,150,100,250,100);
  
  fill('black');
  rect(150,100,100,270);
  
  fill('black');
  rect(60,190,290,90);
  
  fill('black');
  square(20,20,80);
  
  fill('black');
  ellipse(330,50,80)
  
  
  
  
  

}
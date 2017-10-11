function setup() {
  
  createCanvas(500, 500);
  background(128, 85, 0)
  noFill()
  strokeWeight(1)
  

  angleMode(DEGREES);
  frameRate(50);
  
}

function draw() {


stroke(lerpColor(color(204, 204, 0), color(204, 102, 153), frameCount/360));
  
  line(-200,0,200*sin(-frameCount),200*cos(-frameCount));
   if (frameCount == 360) {
    noLoop();}



translate(width/2,height/2);
stroke(lerpColor(color(204, 102, 153), color(204,204,0), frameCount/360));
  
  line(0,200,200*sin(frameCount),200*cos(frameCount));
   if (frameCount == 360) {
    noLoop();}



translate(width/2,height/2);
stroke(lerpColor(color(204, 102, 153), color(204, 204, 0), frameCount/360));
  
  line(200,0,200*sin(frameCount),200*cos(frameCount));
   if (frameCount == 360) {
    noLoop();}

translate(-width/2,-height/2)
 
  rotate(frameCount*20)
  noFill()
  strokeWeight(1)
  stroke(250,200,200);
  
  
  line(0,100,100*sin(frameCount+0),100*cos(frameCount+0));
  
  if (frameCount == 360) {
    noLoop();
}

 
}
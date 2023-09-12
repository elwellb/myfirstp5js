function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Set Background to White
  background("white");

  //Set Stroke Weight
  strokeWeight((6));

  //Create interconnecting lines behind boxes (Based on Box Heights) 

  //Horizontal Lines
  line(0, 25, 400, 25);
  line(0, 50, 400, 50);
  line(0, 125, 400, 125);
  line(0, 150, 400, 150);
  line(0, 200, 400, 200);
  line(0, 250, 400, 250);
  line(0, 275, 400, 275);
  line(0, 300, 400, 300);
  line(0, 325, 400, 325);

  //Vertical Lines
  line(25, 0, 25, 400);
  line(50, 0, 50, 400);
  line(100, 0, 100, 400);
  line(150, 0, 150, 400);
  line(175, 0, 175, 400);
  line(200, 0, 200, 400);
  line(225, 0, 225, 400);
  line(275, 0, 275, 400);
  line(300, 0, 300, 400);
  line(325, 0, 325, 400);
  line(350, 0, 350, 400);

  //Create Black Boxes
  fill("black");
  rect(225, 50, 50, 75);
  rect(150, 325, 25, 75);

  //Create Red Boxes
  fill("red");
  rect(200, 200, 100, 100);
  rect(325, 0, 75, 150);
  
  //Create Blue Boxes
  fill("blue");
  rect(50, 25, 50, 300);
  rect(350, 275, 75, 150);

  //Create Yellow Boxes
  fill("yellow");
  rect(25, 50, 150, 200);

  //Create Border Lines
  line(0, 0, 0, 400);
  line(0, 0, 400, 0);
  line(0, 400, 400, 400);
  line(400, 0, 400, 400);
}

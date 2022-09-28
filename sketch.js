function setup() {
  createCanvas(800, 1000);
  angleMode(DEGREES);
}

function draw() {

  strokeWeight(0);
  stroke(241, 250, 238);
  background(241, 250, 238);  
  frameRate(3);

  //quadrato azzurro in alto a sx
  push();
  fill(168, 218, 220);
  square(100, 100, 200);
  pop();

  //quadrante orologio
  push();
  fill(168, 218, 220);
  ellipse(300, 500, 400);
  pop();

  //semicerchio rosso in alto a sx
  push();
  fill(230, 57, 70);
  arc(200, 100 , 200, 200, 0, 180, CHORD);
  pop();

  //quadrato in alto-centro
  push();
  fill(69, 123, 157);
  translate(300, 100);
  square(0, 0, 200);
  pop();

  //quadrato grande centrale
  push();
  fill(29, 53, 87);
  translate(300, 500);
  rotate(frameCount*6);
  ellipse(0, 0, 20);
  ellipse(50, 50, 20);
  ellipse(100, 100, 20);
  pop();


  //triangolo blu scuro in basso a sx
  push();
  fill(29, 53, 87);
  triangle(100, 700, 100, 900, 300, 900);
  pop();

  //triangolo in basso a sx
  push();
  fill(69, 123, 157);
  triangle(100, 700, 300, 900, 300, 700);
  pop();

  //quadrato in basso-centro
  push();
  fill(168, 218, 220);
  square(300, 700, 200);
  pop();

  //quarti di cerchio 
  push();
  fill(230, 57, 70);
  arc(600, 100, 200, 200, 90, 180, PIE);

  fill(230, 57, 70);
  arc(700, 100, 200, 200, 90, 180, PIE);

  fill(230, 57, 70);
  arc(600, 200, 200, 200, 90, 180, PIE);
  
  fill(230, 57, 70);
  arc(700, 200, 200, 200, 90, 180, PIE);
  pop();
  
  //quadrato blu centro-dx
  push();
  fill(29, 53, 87);
  square(500, 300, 200);
  pop();

  //quadrato rosso centro-dx
  push();
  fill(230, 57, 70);
  square(500, 500, 200);
  pop();

  //semicerchio bianco centro-dx
  push();
  fill(241, 250, 238);
  translate(600, 500);
  rotate(180);
  arc(0, 0 , 200, 200, 0, 180, CHORD);
  pop();

  //semicerchio azzurro centro-dx
  push();
  fill(168, 218, 220);
  translate(600, 500);
  arc(0, 0 , 200, 200, 0, 180, CHORD);
  pop();

  //quadrati in basso a dx
  push();
  let diameter = 100;
  fill(29, 53, 87);
  square(500, 700, diameter);

  fill(69, 123, 157);
  square (500, 800, diameter);

  fill(241, 250, 238);
  square (600, 800, diameter);

  fill(168, 218, 220);
  square(600, 700, diameter);
  pop();

  //semicerchio piccolo blu in basso a dx
  push();
  fill(29, 53, 87);
  translate(550, 800);
  arc(0, 0, 100, 100, 0, 180, CHORD);
  pop();

  //semicerchio piccolo azzurro in basso a dx
  push();
  fill(168, 218, 220);
  translate(550, 800);
  rotate(180);
  arc(0, 0, 100, 100, 0, 180, CHORD);
  pop();

  //cerchio piccolo rosso in basso a dx
  push();
  fill(230, 57, 70);
  translate(650, 850);
  rotate(frameCount * 6);
  square(-25, -25, 50);
  pop();
}

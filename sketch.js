let isNight = false
let blink = false
let u = 25;


function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  noStroke();
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
let medBlue = color(105, 170, 210);
let darkBlue = color (60, 115, 175);
let white = color (255);

if (isNight===true){
  background(20, 30, 60);
}else{
  background(205, 230, 245);
} 

translate (width/2, height/2 - 50);

if (isNight === false) {
    fill(255, 255, 255, 200); 
    
    randomSeed(99); 
    
    for (let i = -15 * u; i <= 15 * u; i = i + 8 * u) {
      
      
      let altezzaCasuale = random(-10 * u, -4 * u); 
      let grandezzaCasuale = random(0.4, 1.2);      
      push(); 
      
      translate(i, altezzaCasuale); 
      
      scale(grandezzaCasuale);      
      
      circle(0, 0, 3.5 * u);             
      circle(-1.5 * u, 1 * u, 2.5 * u);   
      circle(1.5 * u, 1 * u, 2.5 * u);   
      rect(-1.5 * u, 0.5 * u, 3 * u, 1.25 * u); 
      
      pop(); 
    }
  } else {
      fill(white);
      circle (8*u, -8*u, 4*u);
    }

fill(medBlue); //spalle e muso sx
  triangle(-4*u, 6*u, -8*u, 18*u, -4*u, 18*u); 
  triangle(4*u, 6*u, 8*u, 18*u, 4*u, 18*u);
  rect(-4*u, -5*u, 4*u,11*u);
  rect(0, 1*u, 3*u, 6*u);

fill(darkBlue);
  triangle(-3*u,1*u, 4*u, 2*u, 4*u, 7.5*u); //ombra muso

fill(white);//busto
  rect(-4*u, 6*u, 8*u, 12*u);

fill(medBlue); //spazio zampe
  rect(-1.5*u, 12*u, 3*u, 8*u);

fill(white); //muso dx
  rect(0,-5*u,4*u,7*u);

fill (darkBlue);//orecchie
  triangle(-4*u,-5*u,-4*u,1*u,-7*u, -2*u); //sx
  triangle(4*u,-5*u,4*u,1*u,7*u, -2*u); //dx

fill(white); //muso bianco
  ellipse(0, 2*u, 8*u,6*u);

fill(darkBlue);
  circle(0, 2*u, 2.5*u); //naso
  circle(-2*u, -2*u, 1.2*u); //occhio sx

fill(darkBlue);
if (blink===true){
  rect(1.5*u, -2.2*u, 1.2*u, 0.3*u);
}else{
  circle(2*u, -2*u, 1.2*u);
}

text("Greta Cais", 0*u, -9*u);
text("Laboratorio di Computergrafica C2", 0*u, -8*u);
text("2026", 0, -7*u);
}

function mouseClicked (){
  isNight=!isNight;
  blink=!blink;
}

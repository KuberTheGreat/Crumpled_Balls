const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var paper_ball;
var ground;

var bin1, bin2, bin3;

var bin, bin_image;

function preload(){
	bin_image = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground();

	paper_ball = new Paper(100, 100, 60);

	bin1 = new Bin(1000, 540, 200, 20);
	bin2 = new Bin(1100, 460, 20, 200);
	bin3 = new Bin(900, 460, 20, 200);

	bin = Bodies.rectangle(1000, 460, 10, 10);
	World.add(world, bin);

	Engine.run(engine);
}


function draw() {
	background(255);
  
	Engine.update(engine);

	paper_ball.display();

	bin1.display();
	bin2.display();
	bin3.display();

	ground.display();

	imageMode(CENTER);
	image(bin_image, 1000, 460, 200, 200);

	keyPressed();

	textSize(20);
	stroke("purple");
	fill(255);
	text("Keep pressing up arrow", 500, 100);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper_ball.body, paper_ball.body.position, {x:3, y:-80});
	}
}
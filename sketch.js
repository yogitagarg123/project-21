var bullet,wall;


var speed, weight,thickness; 


function setup() {
  createCanvas(1200, 400);


	speed=random(55,90)
	weight=random(400,1500)

	thickness = random (22,83)


	bullet=createSprite(50, 200, 60,10);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1100,200, thickness, height/2)
	  wall.shapeColor=color(80,80,80)
	  
	  if(hasCollided(bullet,wall)){
	 bullet.velocityX = 0;
	 var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

	 if(damage>10){
		 bullet.shapeColor(255,0,0)
	 }
    if(damage<10){
		bullet.shapeColor(0,255,0)
	}





	  }
}


function draw() {
  background(0);

  
  drawSprites();
 
}
function hasCollided(bullet,wall){
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
	return true
}
return false;
}



class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

  this.fade= 255
  }  
  display(){
    //console.log(this.body.speed)
  if (this.body.speed <3){
    super.display()
  
  }

  else {
push();

World.remove (world,this.body)

this.fade = this.fade-1
tint(255,this.fade)
image (this.image, this.body.position.x, this.body.position.y,50, 50) 

pop();  
}


  }

score(){
if(this.fade < 0 && this.fade> -1005){
score++

}

}

};
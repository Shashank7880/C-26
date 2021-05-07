class slingshot{
constructor(bodyA,pointB){
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:10, 
    stiffness:0.03,
    }
    this.body=Constraint.create(options) 
    World.add(world, this.body)
    this.bodyA=bodyA;
    this.pointB=pointB;

    this.sling1=loadImage("sprites/sling 1.png")
    this.sling2=loadImage("sprites/sling2.png")
    this.sling3=loadImage("sprites/sling3.png")
}

fly (){
this.body.bodyA=null

}

attach (body){
    this.body.bodyA=body
    
    }


display(){
// line(x1,y1,x2,y2)

image(this.sling1,200,32)
image(this.sling2,170,32)


if (this.body.bodyA){
    var pointA= this.body.bodyA.position;
    var pointB= this.pointB;
    push()

    if(pointA.x<220){
    stroke(48,22,8)
    strokeWeight(7)
    line(pointA.x-15,pointA.y,pointB.x-10,pointB.y+9)
    line(pointA.x-15,pointA.y,pointB.x+30,pointB.y+8)
    image(this.sling3,pointA.x-30,pointA.y-10,15,30)

    }
    else{
    stroke(48,22,8)
    strokeWeight(2)
    line(pointA.x-15,pointA.y,pointB.x-10,pointB.y+9)
    line(pointA.x-15,pointA.y,pointB.x+30,pointB.y+8)
    image(this.sling3,pointA.x-30,pointA.y-10,15,30)
    }
    pop()
}


}

}

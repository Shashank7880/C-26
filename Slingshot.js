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
}

fly (){
this.body.bodyA=null

}


display(){
// line(x1,y1,x2,y2)


if (this.body.bodyA){
    var pointA= this.body.bodyA.position;
    var pointB= this.pointB;
    push()
    stroke("blue")
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
}


}

}

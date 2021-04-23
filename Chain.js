class chain{
constructor(bodyA,bodyB){
    var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:10, 
    stiffness:0.03,
    }
    this.body=Constraint.create(options) 
    World.add(world, this.body)
    this.bodyA=bodyA;
    this.bodyB=bodyB;
}
display(){
// line(x1,y1,x2,y2)
var pointA= this.body.bodyA.position;
var pointB= this.body.bodyB.position;
push()
stroke("blue")
strokeWeight(3)
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()
}

}
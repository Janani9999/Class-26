class CanonBall{
    constructor(x,y,r){
    this.x=x
    this.y=y
    this.r=r 
    var options={
        isStatic:true
    }

    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body)
     this.canonBallImg=loadImage("./assets/cannonball.png")  
    }

    show(){
    image(this.canonBallImg,this.body.position.x,this.body.position.y,this.r,this.r)    

    }

    shoot(){
        var angle=canon.a-30
        var angle=angle*(3.14/180)
        var velocity=p5.Vector.fromAngle(angle)
        velocity.mult(0.3)
        Matter.Body.setVelocity(this.body, {x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
        console.log(this.body.velocity.x)
        Matter.Body.setStatic(this.body,false)   
    }
}

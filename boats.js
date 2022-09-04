class Boat{
    constructor(x,y,w,h,boatPos){
     var options={
        density:1,
        friction:1
     }   
     this.body=Matter.Bodies.rectangle(x,y,w,h,options)
     World.add(world,this.body)
     this.w=w
     this.h=h
     this.boatPos=boatPos
     this.image=loadImage("./assets/boat.png")
     
    }


    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)    
    image(this.image,0,this.boatPos,this.w,this.h)    
    pop()    
        
    }
}


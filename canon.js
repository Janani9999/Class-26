class Canon {
    constructor(x, y, w, h, a) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.canonBaseImg = loadImage("./assets/cannonBase.png")
        this.canonImg = loadImage("./assets/canon.png")
    }
    show() {
        if (keyIsDown(LEFT_ARROW)) {
            console.log("arrowKeyPressed")
            this.a = this.a - 1
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.a = this.a + 1
        }
        push()
        translate(this.x+70,this.y+40)
        rotate(this.a)
        imageMode(CENTER)
        image(this.canonImg, 0, 0, this.w - 50, this.h - 50)
        pop()
        image(this.canonBaseImg, this.x, this.y - 20, this.w, this.h)
        
    }

    

}

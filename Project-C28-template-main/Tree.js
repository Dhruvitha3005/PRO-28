class Tree{
    construct(x,y){
        this.x = x;
        this.y = y;
        this.Width=430;
        this.Height=600;
        this.wallThickness=10;
        this.image=loadImage("tree.png")
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.wallThickness, {isStatic:true})

        World.add(world, this.bottomBody)
    }
    display(){
        var postionBottom=this.bottomBody.position;
			push()
			translate(postionBottom.x, postionBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.Height/2,this.Width, this.Height)
			pop()
			
    }
}
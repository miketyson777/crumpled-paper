class Paper
{
constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paper.png");
this.body=Bodies.circle(this.x,this,y,(this.r-20)/2,options)//creating the sprite
World.add(world,this.body)
}

display(){
var paperposition=this.body.position
push()


translate(paperposition.x,paperposition.y)//it takes the input from the user

restMode(CENTER)
fill(255,0,255)//"color name"
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()
}







}
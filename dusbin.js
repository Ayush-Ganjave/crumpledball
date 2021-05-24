class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
     this.body=Bodies.rectangle(x,y,width,height,options) 
     this.height = height;
     this.width = width;  
     World.add(world,this.body)
    }
    display(){
     var pos = this.body.position   
     rectMode(CENTER);
     fill(225)
     rect(pos.x,pos.y,this.width,this.height)

    }
}
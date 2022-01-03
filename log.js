class Log{
    constructor(x,y,h,a){
        var options = {
            'restitution': 0.8,
            'friction': 1,
            'density': 1
        }
        this.a = a;
        this.w = 20;
        this.h = h;
        this.body = Bodies.rectangle(x,y,20,h,options);
        World.add (world,this.body);
        Matter.Body.setAngle(this.body,a);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.w,this.h)
        pop();
    }
}
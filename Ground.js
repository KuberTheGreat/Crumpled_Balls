class Ground{
    constructor(){
        this.body = Bodies.rectangle(600, 580, 1200, 20, {isStatic:true});
        World.add(world, this.body);
        this.width = 1200;
        this.height = 20;
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(2);
        stroke("grey");
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
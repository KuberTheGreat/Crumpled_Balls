class Paper{
    constructor(x, y, radius){

        var paper_options = {
            isStatic:false,
            restitution:0.4,
            friction:0.5,
            density:10
        }

        this.body = Bodies.circle(x, y, radius / 2, paper_options);
        World.add(world, this.body);
        this.radius = radius;
        this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);

        pop();
    }
}
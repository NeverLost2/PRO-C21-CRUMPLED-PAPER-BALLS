class ground{
    constructor(x, y, w, h){
        var option = {
            isStatic: true
        }
        this.h = h;
        this.y = y;
        this.w = w;
        this.x = x;
        this.body = Bodies.rectangle(x, y, h, w, option)
        World.add(world, this.body);

    }
    display()
    {
        var groundPos = this.body.position;
        push();
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255, 255, 0)
        rect(0, 0, this.w, this.h);
        pop()
    }
}

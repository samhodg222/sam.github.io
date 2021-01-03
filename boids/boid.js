class Boid {
    constructor() {
        this.accel = createVector(0, 0);
        this.vel = createVector(random(-1,  1), random(-1,1));
        this.pos = createVector(random(0, width), random(0, height));
        this.r = 4;
    }

    show() {
        strokeWeight(16);
        stroke('white');
        point(this.pos.x, this.pos.y);
    }

    update() {
        this.vel.add(this.accel);
        this.pos.add(this.vel);
        
        if (this.pos.x < -this.r)  this.pos.x = width + this.r;
        if (this.pos.y < -this.r)  this.pos.y = height + this.r;
        if (this.pos.x > width + this.r) this.pos.x = -this.r;
        if (this.pos.y > height + this.r) this.pos.y = -this.r;
    }

    align(boid) {
        let avg = createVector();
        for(let neighbour of boid){
            let distance = Math.floor(p5.Vector.dist(neighbour.pos,this.pos));
    
            avg.add(neighbour.vel);
            //avg.div(neighbour.length);
        }

    }
}
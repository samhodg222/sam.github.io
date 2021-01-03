let flock = [];


function setup(){
    createCanvas(windowWidth-100, windowHeight-100);
    frameRate(60);
    for(i=0;i<5;i++){
        flock.push(new Boid());
    }
}
function draw(){
    background(51);
    for(let boid of flock){
        boid.show();
        boid.update();
        boid.align(flock);
    }
}



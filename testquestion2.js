let circleX = 20
let circleY = 20
let Tfactor = 1
let colour = 10


function setup() {
    createCanvas(600, 600);
    background("grey")
    for (i = 0; i < 11; i++) {
        circle(circleX * Tfactor, circleY * Tfactor, 50);
        fill("black");
        Tfactor = Tfactor + 1.4;
    }
}

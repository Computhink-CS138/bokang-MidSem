let circleX = 40
let circleY = 40
let Tfactor = 1
let colour = 20


function setup() {
    createCanvas(600, 600);
    background("grey")
    for (i = 0; i < 10; i++) {
        fill(colour * Tfactor);
        circle(circleX * Tfactor, circleY * Tfactor, 50);
        Tfactor = Tfactor + 1.4;
    }
}

let canvas;
let b, h, w;
let width = [];
let height = [];
let cursor;

let janela;

let isDrawing = false;
let drawingPaths = [];

function setup() {
    angleMode(DEGREES);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    cursor = loadImage('img/lapis.png');
}

function draw() {
    

    b = document.querySelector("body");
    w = windowWidth;
    h = b.offsetHeight;

    if (windowHeight > h) {
        janela = windowHeight;
    } else {
        janela = h;
    }

    resizeCanvas(w, janela);
    imageMode(CENTER);


    for (let path of drawingPaths) {
        blendMode(MULTIPLY);
        stroke(40);
        strokeWeight(8); 
        noFill();
        beginShape();
        for (let point of path) {
            vertex(point.x, point.y);
        }
        endShape();

    }

}


function mousePressed() {

    isDrawing = true;
    drawingPaths.push([]);
}

function mouseReleased() {

    isDrawing = false;
}

function mouseDragged() {

    if (isDrawing) {
        let point = {
            x: mouseX,
            y: mouseY
        };
        drawingPaths[drawingPaths.length - 1].push(point);
    }
}
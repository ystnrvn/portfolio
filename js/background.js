let cols, rows;
let spacing = 20;
let noiseScale = 0.5;
let t = 0;
let colors;
let hoverColor;

function setup() {

    const container = document.getElementById("canvas-container");
    let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent("canvas-container");

    noStroke();
    rectMode(CENTER);

    cols = floor(width / spacing);
    rows = floor(height / spacing);

    colors = [
        color('#0125B7'),
        color('#0F3AE6'),
        color('#2C54F2')
    ];
    hoverColor = color('#F243FF');
}

function draw() {
    cols = ceil(width / spacing);
    rows = ceil(height / spacing);
    
    background(10);
    t += 0.01;

    let isMouseInside = (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let px = x * spacing + spacing / 2;
            let py = y * spacing + spacing / 2;

            let n = noise(x * noiseScale, y * noiseScale, t);
            let level = floor(map(n, 0, 1, 0, 3));
            let baseColor = colors[level];

            let fillColor = baseColor;

            if (isMouseInside) {
                let d = dist(mouseX, mouseY, px, py);
                if (d < 30) {
                    fillColor = hoverColor;
                }
            }

            fill(fillColor);
            rect(px, py, spacing * 0.8, spacing * 0.8);
        }
    }
}

function windowResized() {
    const container = document.getElementById("canvas-container");
    resizeCanvas(container.offsetWidth, container.offsetHeight);
    cols = ceil(width / spacing);
    rows = ceil(height / spacing);
}

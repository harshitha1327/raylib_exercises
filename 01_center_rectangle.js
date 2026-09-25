const r = require("raylib");

function centreCoordinate(rectangleSize, windowSize) {
    return windowSize / 2 - rectangleSize / 2;
}

const windowWidth = 1000;
const windowHeight = 1000;
const width = 500;
const height = 500;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Rectangle in Centre");
    r.SetTargetFPS(50);
}

function update() { }

function drawCenterRectangle() {
    const x = centreCoordinate(width, windowWidth);
    const y = centreCoordinate(height, windowHeight);

    r.DrawRectangle(x, y, width, height, r.WHITE);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    drawCenterRectangle();

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();

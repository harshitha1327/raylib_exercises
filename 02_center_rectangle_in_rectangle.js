const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Rectangle Inside Rectangle");
    r.SetTargetFPS(50);
}

function centreCoordinate(
    outerRectangleCoordinate,
    outerRectangleDimension,
    innerRectangleDimension,
) {
    return (
        outerRectangleDimension / 2 -
        innerRectangleDimension / 2 +
        outerRectangleCoordinate
    );
}

function update() { }

function drawRectangleInRectangle() {

    const innerRectangleWidth = 100;
    const innerRectangleHeight = 50;

    const outerRectangleX = 30;
    const outerRectangleY = 400;

    const outerRectangleWidth = 200;
    const outerRectangleHeight = 300;

    r.DrawRectangle(
        outerRectangleX,
        outerRectangleY,
        outerRectangleWidth,
        outerRectangleHeight,
        r.WHITE,
    );

    const innerRectangleX = centreCoordinate(
        outerRectangleX,
        outerRectangleWidth,
        innerRectangleWidth,
    );
    const innerRectangleY = centreCoordinate(
        outerRectangleY,
        outerRectangleHeight,
        innerRectangleHeight,
    );

    r.DrawRectangle(
        innerRectangleX,
        innerRectangleY,
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    drawRectangleInRectangle();

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


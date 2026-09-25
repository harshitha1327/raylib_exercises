const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

function centreCoordinate(
    outerRectangleCoordinate,
    outerDimension,
    innerDimension,
) {
    return outerDimension / 2 - innerDimension / 2 + outerRectangleCoordinate;
}

function relativeDimension(relativeValue, outerRectangleDimension) {
    return relativeValue * outerRectangleDimension;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scale And Center");
    r.SetTargetFPS(50);
}

function update() { }

function scaleAndCenter() {

    const outerRectangleWidth = 500;
    const outerRectangleHeight = 400;

    const outerRectangleCoordinateX = 40;
    const outerRectangleCoordinateY = 50;

    const relativeWidthInnerRectangle = 0.5;
    const relativeHeightInnerRectangle = 0.2;

    r.DrawRectangle(
        outerRectangleCoordinateX,
        outerRectangleCoordinateY,
        outerRectangleWidth,
        outerRectangleHeight,
        r.WHITE,
    );

    const innerRectangleWidth = relativeDimension(
        relativeWidthInnerRectangle,
        outerRectangleWidth,
    );
    const innerRectangleHeight = relativeDimension(
        relativeHeightInnerRectangle,
        outerRectangleWidth,
    );
    const innerRectangleCoordinateX = centreCoordinate(
        outerRectangleCoordinateX,
        outerRectangleWidth,
        innerRectangleWidth,
    );
    const innerRectangleCoordinateY = centreCoordinate(
        outerRectangleCoordinateY,
        outerRectangleHeight,
        innerRectangleHeight,
    );

    r.DrawRectangle(
        innerRectangleCoordinateX,
        innerRectangleCoordinateY,
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    scaleAndCenter();

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

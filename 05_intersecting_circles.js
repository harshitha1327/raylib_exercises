const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

const circle1X = 100;
const circle1Y = 100;
const circle1Radius = 40;

const circle2X = 190;
const circle2Y = 100;
const circle2Radius = 50;

function sqr(x) {
    return x * x;
}

function isIntersecting(circle1X, circle2X, circle1Y, circle2Y, circle1Radius, circle2Radius) {
    const distance = (sqr(circle2X - circle1X) + sqr(circle2Y - circle1Y)) ** 0.5;
    return distance < circle1Radius + circle2Radius;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Intersecting Circles");
    r.SetTargetFPS(50);
}

function update() {

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    const color = isIntersecting(circle1X, circle2X, circle1Y, circle2Y, circle1Radius, circle2Radius) ? r.RED : r.BLACK;
    r.DrawCircle(circle1X, circle1Y, circle1Radius, color);
    r.DrawCircle(circle2X, circle2Y, circle2Radius, color);
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
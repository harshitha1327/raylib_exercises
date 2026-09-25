const r = require("raylib");

const windowWidth = 1500;
const windowHeight = 1000;

const sourceX = 250;
const sourceY = 900;

const x1 = 900;
const y1 = 90;

const x2 = 90;
const y2 = 90;

const radiusOfCircle = 30;

function sqr(x) {
	return x * x;
}

function distanceBetweenTwoPoints(x1, y1, x2, y2) {
	return (sqr(x2 - x1) + sqr(y2 - y1)) ** 0.5;
}

function setup() {
	r.InitWindow(windowWidth, windowHeight, "Closer Target");
	r.SetTargetFPS(50);
}

function update() { }

function drawSource() {
	r.DrawCircle(sourceX, sourceY, radiusOfCircle, r.WHITE);
}

function drawTargets() {
	r.DrawCircle(x1, y1, radiusOfCircle, r.RED);
	r.DrawCircle(
		x2,
		y2,
		radiusOfCircle,
		r.GREEN,
	);
}
function drawConnector() {

	const target1Distance = distanceBetweenTwoPoints(
		sourceX,
		sourceY,
		x1,
		y1,
	);
	const target2Distance = distanceBetweenTwoPoints(
		sourceX,
		sourceY,
		x2,
		y2,
	);

	let tx = x1;
	let ty = y1;

	if (target1Distance > target2Distance) {
		tx = x2;
		ty = y2;
	}

	r.DrawLine(sourceX, sourceY, tx, ty, r.WHITE);
}

function draw() {
	r.BeginDrawing();
	r.ClearBackground(r.BLACK);

	drawSource();
	drawTargets();
	drawConnector();

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


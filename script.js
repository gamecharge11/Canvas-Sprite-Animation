var canvasWidth = 650;
var canvasHeight = 350;

var spriteWidth = 864;
var spriteHeight = 280;

var rows = 2;
var columns = 8;

var trackRight = 0;
var trackLeft = 1;

var width = spriteWidth / columns;
var height = spriteHeight / rows;

var curFrame = 0;
var frameCount = 8;

var x = 0; //render the entire sprite
var y = 0;

var scrX = 0; //render the single frame of sprite
var scrY = 0;

var left = false;
var right = true;

var speed = 12;

var canvas = document.getElementById("canvas");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var character = new Image();
character.src = "character.png"

function updateFrame() {
    curFrame = ++curFrame % frameCount;
    scrX = curFrame * width;
    ctx.clearRect(x, y, width, height);
    if (left && x > 0) {
        scrY = trackLeft * height;
        x -= speed;
    }
    if (right && x < (canvasWidth - width)) {
        scrY = trackRight * height;
        x += speed;
    }
}

function draw() {
    updateFrame();
    ctx.drawImage(character, scrX, scrY, width, height, x, y, width, height);
}


setInterval(draw, 100)

function moveLeft() {
    left = true;
    right = false;
}

function moveRight() {
    left = false;
    right = true;
}